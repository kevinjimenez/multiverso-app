import ErrorView from '@/components/shared/ErrorView';
import LoadingView from '@/components/shared/LoadingView';
import ScreenHeader from '@/components/shared/ScreenHeader';
import ScreenMainContainer from '@/components/shared/ScreenMainContainer';
import CharacterListItem from '@/features/characters/components/CharacterListItem';
import CharacterSearchInput from '@/features/characters/components/CharacterSearchInput';
import TagFilterScroll from '@/features/characters/components/TagFilterScroll';
import { useCharacters } from '@/features/characters/hooks/useCharacters';
import { useCharactersFilter } from '@/features/characters/hooks/useCharactersFilter';
import { router } from 'expo-router';
import { useRef } from 'react';
import {
  FlatList,
  Keyboard,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Text,
  View,
} from 'react-native';

const CharactersScreen = () => {
  const {
    tag,
    status,
    species,
    gender,
    selectTag,
    nameCharacter,
    setNameCharacter,
    debouncedName,
  } = useCharactersFilter();
  const { characters } = useCharacters({
    status,
    species,
    gender,
    name: debouncedName,
  });
  const isLoading = useRef(false);
  // Referencia a la FlatList para poder resetear el scroll al inicio al cambiar de filtro.
  // const listRef = useRef<FlatList>(null);

  const data = characters.data?.pages.flatMap((page) => page.results);
  const count = characters.data?.pages[0]?.info.count ?? 0;

  const searchByName = (name: string) => {
    if (name.trim() === '') {
      Keyboard.dismiss();
    }
    setNameCharacter(name);
  };
  const handleSelectTag = (tag: string) => {
    selectTag(tag);
    // El queryKey cambia y React Query ya trae los datos desde la página 1,
    // pero el scroll de la FlatList no se resetea solo: hay que forzarlo.
    // listRef.current?.scrollToOffset({ offset: 0, animated: false });
  };
  const handleSelectCharacter = (id: number) => {
    // Cierra el teclado antes de navegar, por si el buscador estaba enfocado.
    // Keyboard.dismiss();
    router.push(`/detail-character/${id}`);
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

  return (
    <ScreenMainContainer>
      <ScreenHeader title="personajes" count={count} />

      {characters.error ? (
        <ErrorView
          message="Algo salió mal"
          description="No pudimos conectar con la API de Rick and Morty. Revisa tu conexión e inténtalo de nuevo."
          onRetry={() => characters.refetch()}
        />
      ) : (
        <>
          <TagFilterScroll tag={tag} onSelectTag={handleSelectTag} />

          <CharacterSearchInput
            value={nameCharacter}
            placeholder="Buscar personaje"
            onChangeText={searchByName}
          />

          {characters.isLoading ? (
            <LoadingView />
          ) : (
            <FlatList
              // Ref usada en handleSelectTag para forzar el scroll al inicio al cambiar de filtro.
              // ref={listRef}
              style={{ flex: 1 }}
              data={data}
              keyExtractor={(character) => String(character.id)}
              onScroll={onScroll}
              showsVerticalScrollIndicator={false}
              ListEmptyComponent={
                <View className="flex-1 justify-center items-center py-10">
                  <Text className="text-ink-muted">
                    No se encontraron personajes
                  </Text>
                </View>
              }
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
          )}
        </>
      )}
    </ScreenMainContainer>
  );
};

export default CharactersScreen;
