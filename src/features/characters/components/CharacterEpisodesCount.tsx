import { Text, View } from 'react-native';

interface Props {
  total: number;
}

const CharacterEpisodesCount = ({ total }: Props) => {
  return (
    <View className="bg-gray-200 rounded-xl p-4">
      <Text className="font-semibold text-ink-soft text-[0.95rem]">
        Aparce en{'  '}
        <Text className="text-[1.1rem] text-accent font-bold">
          {total} Episodios
        </Text>
      </Text>
    </View>
  );
};

export default CharacterEpisodesCount;
