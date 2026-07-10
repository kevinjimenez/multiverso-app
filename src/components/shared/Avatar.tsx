import { Image } from 'expo-image';
import { View } from 'react-native';
interface Props {
  seed?: string;
}

const Avatar = ({ seed }: Props) => {
  return (
    <View className="size-20 rounded-full border border-accent/30 justify-center items-center shadow overflow-hidden">
      <Image
        source={{ uri: `https://robohash.org/${seed}?gravatar=hashed` }}
        style={{ width: '100%', height: '100%' }}
        contentFit="cover"
        placeholder={{ blurhash: 'L6PZfSi_.AyE_3t7t7R**0o#DgR4' }}
        transition={200}
        cachePolicy="memory-disk"
      />
    </View>
  );
};

export default Avatar;
