import { LinearGradient } from 'expo-linear-gradient';
import { Image, useWindowDimensions, View } from 'react-native';

interface Props {
  image: string;
}

const CharacterPoster = ({ image }: Props) => {
  const { height: screenHeight } = useWindowDimensions();
  return (
    <View style={{ height: screenHeight * 0.4 }}>
      <View className="flex-1 rounded-b-[25px] overflow-hidden">
        <Image source={{ uri: image }} resizeMode="cover" className="flex-1" />
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.75)']}
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 128,
          }}
        />
      </View>
    </View>
  );
};

export default CharacterPoster;
