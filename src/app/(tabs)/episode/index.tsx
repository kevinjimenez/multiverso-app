import ScreenHeader from '@/components/shared/ScreenHeader';
import ScreenMainContainer from '@/components/shared/ScreenMainContainer';
import EpisodeListItem from '@/features/episodes/components/EpisodeListItem';
import { useEpisodes } from '@/features/episodes/hooks/useEpisodes';
import { formatEpisodeCode } from '@/helper/format-episode-code';
import { router } from 'expo-router';
import { ActivityIndicator, FlatList, View } from 'react-native';

const EpisodeScreen = () => {
  const { episodes } = useEpisodes();

  const data = episodes.data?.pages.flatMap((page) => page.results);
  const count = episodes.data?.pages[0]?.info.count ?? 0;

  const goToEpisode = (id: number) => {
    router.push({
      pathname: '/episode/by-id',
      params: { id },
    });
  };

  const loadNextPage = () => {
    if (episodes.hasNextPage && !episodes.isFetchingNextPage) {
      episodes.fetchNextPage();
    }
  };

  if (episodes.isLoading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <ScreenMainContainer>
      <ScreenHeader title="episodios" count={count} classNameContainer="mb-3" />

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
    </ScreenMainContainer>
  );
};

export default EpisodeScreen;
