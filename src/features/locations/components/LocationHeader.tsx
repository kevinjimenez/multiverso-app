import Ionicons from '@react-native-vector-icons/ionicons';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import { Image, Pressable, PressableProps, View } from 'react-native';
import LocationOverlayTitle from './LocationOverlayTitle';

interface Props extends PressableProps {
  name: string;
}

const LocationHeader = ({ name, onPress }: Props) => {
  return (
    <View>
      <Image
        source={require('../../../../assets/images/location-icon.png')}
        className="w-full h-96"
        resizeMode="cover"
      />
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
      <LocationOverlayTitle name={name} />
      <Pressable className="absolute top-10 right-5" onPress={onPress}>
        <BlurView
          intensity={60}
          tint="dark"
          style={{
            width: 30,
            height: 30,
            borderRadius: 18,
            overflow: 'hidden',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Ionicons name="close" size={18} color="white" />
        </BlurView>
      </Pressable>
    </View>
  );
};

export default LocationHeader;
