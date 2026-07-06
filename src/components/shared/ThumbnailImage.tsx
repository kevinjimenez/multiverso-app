import { Image, ImageProps } from 'expo-image';
import { View, Text } from 'react-native';

interface Props extends ImageProps {
  image?: string | number;
  fallbackText?: string;
  width?: number;
  height?: number;
  borderRadius?: number;
}

const ThumbnailImage = ({
  image,
  fallbackText,
  contentFit = 'cover',
  cachePolicy = 'memory-disk',
  transition = 200,
  width = 64,
  height = 64,
  borderRadius = 8,
}: Props) => {
  if (!image) {
    return (
      <View className="size-16 rounded-lg bg-accent-50 items-center justify-center">
        <Text className="text-accent font-semibold">{fallbackText}</Text>
      </View>
    );
  }

  return (
    <Image
      source={typeof image === 'string' ? { uri: image } : image}
      style={{ width, height, borderRadius }}
      placeholder={{ blurhash: 'L6PZfSi_.AyE_3t7t7R**0o#DgR4' }}
      contentFit={contentFit}
      transition={transition}
      cachePolicy={cachePolicy}
    />
  );
};

export default ThumbnailImage;
