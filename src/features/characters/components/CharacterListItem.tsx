import ThumbnailImage from '@/components/shared/ThumbnailImage';
import Ionicons from '@react-native-vector-icons/ionicons';
import { Pressable, PressableProps, Text, View } from 'react-native';
import CharacterMeta from './CharacterMeta';

interface Props extends PressableProps {
  name: string;
  status: string;
  species: string;
  img: string;
}

const CharacterListItem = ({ name, status, species, img, onPress }: Props) => {
  return (
    <Pressable
      className="justify-between flex-row items-center border border-gray-300 my-1 px-3.5 py-2 rounded-xl"
      onPress={onPress}
    >
      <View className="flex-row gap-4 flex-1">
        <ThumbnailImage image={img} />

        <View className="flex-col py-1.5 flex-1">
          <View className="flex-1">
            <Text
              className="text-ink font-semibold text-lg"
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {name}
            </Text>
          </View>
          <CharacterMeta status={status} species={species} />
        </View>
      </View>

      <Ionicons name="chevron-forward-outline" size={20} color="#A6AEB6" />
    </Pressable>
  );
};

export default CharacterListItem;
