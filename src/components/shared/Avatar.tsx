import { Image } from 'expo-image';
import { View } from 'react-native';
interface Props {
  placeholder?: string;
}

const Avatar = ({ placeholder }: Props) => {
  return (
    <View className="size-20 rounded-full border border-accent/30 justify-center items-center shadow overflow-hidden">
      <Image
        source={{ uri: `https://robohash.org/${placeholder}?gravatar=hashed` }}
        style={{ width: '100%', height: '100%' }}
        contentFit="cover"
        cachePolicy="memory-disk"
      />
    </View>
  );
};

export default Avatar;
