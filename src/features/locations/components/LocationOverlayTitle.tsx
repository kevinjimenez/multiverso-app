import { Text, View } from 'react-native';

interface Props {
  name: string;
}

const LocationOverlayTitle = ({ name }: Props) => {
  return (
    <View className="absolute bottom-4 left-4">
      <Text
        className="text-accent font-semibold uppercase text-xs"
        style={{ letterSpacing: 1 }}
      >
        Lugar
      </Text>
      <Text className="text-white font-bold text-3xl">{name}</Text>
    </View>
  );
};

export default LocationOverlayTitle;
