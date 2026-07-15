import ErrorView from '@/components/shared/ErrorView';
import LoadingView from '@/components/shared/LoadingView';
import ScreenHeader from '@/components/shared/ScreenHeader';
import ScreenMainContainer from '@/components/shared/ScreenMainContainer';
import EpisodeListItem from '@/features/episodes/components/EpisodeListItem';
import { useEpisodes } from '@/features/episodes/hooks/useEpisodes';
import { formatEpisodeCode } from '@/helper/format-episode-code';
import { router } from 'expo-router';
import { FlatList } from 'react-native';

const EpisodeScreen = () => {
  const { episodes } = useEpisodes();

  const data = episodes.data?.pages.flatMap((page) => page.results);
  const count = episodes.data?.pages[0]?.info.count ?? 0;

  const goToEpisode = (id: number) => {
    router.push({
      pathname: '/episode/detail',
      params: { id },
    });
  };

  const loadNextPage = () => {
    if (episodes.hasNextPage && !episodes.isFetchingNextPage) {
      episodes.fetchNextPage();
    }
  };

  return (
    <ScreenMainContainer>
      <ScreenHeader title="episodios" count={count} classNameContainer="mb-3" />

      {episodes.isLoading ? (
        <LoadingView />
      ) : episodes.error ? (
        <ErrorView
          message="Algo salió mal"
          description="No pudimos conectar con la API de Rick and Morty. Revisa tu conexión e inténtalo de nuevo."
          onRetry={() => episodes.refetch()}
        />
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => String(item.id)}
          onEndReached={loadNextPage}
          onEndReachedThreshold={0.6}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <EpisodeListItem
              key={index}
              episode={formatEpisodeCode(item.episode)}
              name={item.name}
              airDate={item.air_date}
              total={item.characters.length}
              onPress={() => goToEpisode(item.id)}
            />
          )}
        />
      )}
    </ScreenMainContainer>
  );
};

export default EpisodeScreen;
