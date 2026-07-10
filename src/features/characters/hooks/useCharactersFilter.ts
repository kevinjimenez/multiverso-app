import { useState } from 'react';
import { CHARACTERS_TAGS } from '../constants/characters-tags.constants';
import { useDebounce } from '@/hooks/useDebounce';

export const useCharactersFilter = () => {
  const [tag, setTag] = useState('');
  const [nameCharacter, setNameCharacter] = useState('');
  const debouncedName = useDebounce(nameCharacter, 500);

  const selectedTag = CHARACTERS_TAGS.find((item) => item.value === tag);

  const status = selectedTag?.filterKey === 'status' ? tag : undefined;
  const species = selectedTag?.filterKey === 'species' ? tag : undefined;
  const gender = selectedTag?.filterKey === 'gender' ? tag : undefined;

  return {
    nameCharacter,
    tag,
    status,
    species,
    gender,
    selectTag: setTag,
    debouncedName,
    setNameCharacter,
  };
};
