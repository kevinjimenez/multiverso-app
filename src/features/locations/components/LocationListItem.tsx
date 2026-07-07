import ThumbnailImage from '@/components/shared/ThumbnailImage';
import BaseBadge from '@/components/ui/BaseBadge';
import Ionicons from '@react-native-vector-icons/ionicons';
import { Pressable, PressableProps, Text, View } from 'react-native';

interface Props extends PressableProps {
  name: string;
  dimension: string;
  total: number;
}

const LocationListItem = ({ name, dimension, total, onPress }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      className="justify-between flex-row items-center border border-gray-300 my-1 px-3.5 py-2 rounded-xl"
    >
      <View className="flex-row gap-4 flex-1">
        <ThumbnailImage
          image={require('../../../../assets/images/location-icon.png')}
        />
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
          <Text
            className="text-[0.95rem] text-ink-soft font-light"
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {dimension}
          </Text>
        </View>

        <BaseBadge classNameContainer="self-center bg-primary-50 rounded-full">
          <Ionicons name="home-outline" size={14} color="#11B0A3" />
          <Text className="text-primary font-semibold">{total}</Text>
        </BaseBadge>
      </View>
    </Pressable>
  );
};

export default LocationListItem;
