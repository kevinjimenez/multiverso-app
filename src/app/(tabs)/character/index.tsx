import ScreenHeader from '@/components/shared/ScreenHeader';
import ScreenMainContainer from '@/components/shared/ScreenMainContainer';
import CharacterListItem from '@/features/characters/components/CharacterListItem';
import TagFilterScroll from '@/features/characters/components/TagFilterScroll';
import { useCharacters } from '@/features/characters/hooks/useCharacters';
import { router } from 'expo-router';
import { useRef, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Text,
  View,
} from 'react-native';

const CharactersScreen = () => {
  const { characters } = useCharacters();
  const isLoading = useRef(false);

  const [tag, setTag] = useState('');

  const data = characters.data?.pages.flatMap((page) => page.results);
  const count = characters.data?.pages[0]?.info.count ?? 0;

  const handleSelectTag = (tag: string) => {
    setTag(tag);
  };
  const handleSelectCharacter = (id: number) => {
    router.push(`/character/${id}`);
  };
  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isLoading.current) return;

    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;

    const isEndReached =
      contentOffset.y + layoutMeasurement.height + 600 >= contentSize.height;

    if (!isEndReached) return;
    if (!characters.hasNextPage) return;

    isLoading.current = true;

    console.log('Carga pagina siguiente');

    // rickAndMorty.fetchNextPage && rickAndMorty.fetchNextPage();
    // rickAndMorty.fetchNextPage().finally(() => {
    //   isLoading.current = false;
    // });
    characters.fetchNextPage().then((result) => {
      if (!result.isError) {
        isLoading.current = false; // solo se libera si la respuesta fue OK (200)
      }
      // si hubo error, isLoading.current queda en true -> no deja disparar más fetch por scroll
    });
  };

  if (characters.isLoading) {
    return (
      <View className="flex flex-1 justify-center items-center">
        <Text className="mb-4 font-medium">Espere por favor</Text>
        <ActivityIndicator className="text-primary" size={30} />
      </View>
    );
  }

  return (
    <ScreenMainContainer>
      <ScreenHeader title="personajes" count={count} />

      <TagFilterScroll tag={tag} onSelectTag={handleSelectTag} />

      <FlatList
        data={data}
        keyExtractor={(character) => String(character.id)}
        onScroll={onScroll}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <CharacterListItem
            name={item.name}
            status={item.status}
            species={item.species}
            img={item.image}
            onPress={() => handleSelectCharacter(item.id)}
          />
        )}
      />
    </ScreenMainContainer>
  );
};

export default CharactersScreen;
