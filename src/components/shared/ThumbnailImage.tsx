import { Image, ImageProps } from 'expo-image';

interface Props extends ImageProps {
  image: string;
  width?: number;
  height?: number;
  borderRadius?: number;
}

const ThumbnailImage = ({
  image,
  contentFit = 'cover',
  cachePolicy = 'memory-disk',
  transition = 200,
  width = 64,
  height = 64,
  borderRadius = 8,
}: Props) => {
  return (
    <Image
      source={{ uri: image }}
      style={{ width, height, borderRadius }}
      placeholder={{ blurhash: 'L6PZfSi_.AyE_3t7t7R**0o#DgR4' }}
      contentFit={contentFit}
      transition={transition}
      cachePolicy={cachePolicy}
    />
  );
};

export default ThumbnailImage;
