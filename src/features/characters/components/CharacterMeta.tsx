import { Text, View } from 'react-native';
import { SPECIES_LABELS } from '../constants/species-labels.constants';
import CharacterStatus from './CharacterStatus';

interface Props {
  status: string;
  species: string;
}

const CharacterMeta = ({ status, species }: Props) => {
  const speciesLabel = SPECIES_LABELS[species];

  return (
    <View className="flex-row gap-x-5">
      <CharacterStatus status={status} />
      <Text
        className="text-sm text-ink-soft"
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {speciesLabel ? speciesLabel : species}
      </Text>
    </View>
  );
};

export default CharacterMeta;
