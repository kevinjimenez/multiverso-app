import { Text, View } from 'react-native';
import ThumbnailImage from './ThumbnailImage';
import { Image } from 'expo-image';
interface Props {
  placeholder?: string;
}

const Avatar = ({ placeholder }: Props) => {
  // https://robohash.org/kevzs?gravatar=hashed

  return (
    <View className="size-20 rounded-full bg-accent justify-center items-center shadow">
      <Image
        source={{ uri: `https://robohash.org/${placeholder}?gravatar=hashed` }}
        style={{
          width: 80,
          height: 50,
          borderRadius: 8,
        }}
        contentFit="cover"
        // transition={transition}
        cachePolicy="memory-disk"
      />
    </View>
    // <View className="size-20 rounded-full bg-accent justify-center items-center shadow">
    //   <Text className="text-3xl font-semibold text-white">{placeholder}</Text>
    // </View>
  );
};

export default Avatar;
