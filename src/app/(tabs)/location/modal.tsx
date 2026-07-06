import BaseButton from '@/components/ui/BaseButton';
import { useLocation } from '@/features/locations/hooks/useLocation';
import Ionicons from '@react-native-vector-icons/ionicons';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import { router, useLocalSearchParams } from 'expo-router';
import { ActivityIndicator, Image, Pressable, Text, View } from 'react-native';

const Modal = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { location } = useLocation(+id);
  const closeModal = () => {
    router.dismiss();
  };

  if (location.isLoading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View className="bg-white flex-1">
      {/*<View className="bg-accent-100 w-full h-16" />*/}
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
        <View className="absolute bottom-4 left-4">
          <Text
            className="text-accent font-semibold uppercase text-xs"
            style={{ letterSpacing: 1 }}
          >
            Lugar
          </Text>
          <Text className="text-white font-bold text-3xl">
            {location.data?.name}
          </Text>
        </View>
        <Pressable
          className="absolute top-10 right-5"
          onPress={() => router.dismiss()}
        >
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
      <View className="py-10 px-7 flex-1">
        <View className="py-2 flex-1">
          <View className="justify-between flex-row px-4 py-3 border-t rounded-t-xl border-l border-r items-center border-gray-300">
            <Text className="text-ink-faint font-semibold">Tipo</Text>
            <Text className="text-lg font-semibold">{location.data?.type}</Text>
          </View>
          <View className="justify-between flex-row px-4 py-3 border-t border-l border-r items-center border-gray-300">
            <Text className="text-ink-faint font-semibold">Temporada</Text>
            <Text className="text-lg font-semibold">
              {location.data?.dimension}
            </Text>
          </View>
          <View className="justify-between flex-row px-4 py-3 border items-center rounded-b-xl border-gray-300">
            <Text className="text-ink-faint font-semibold flex-1">
              Residentes
            </Text>
            <Text
              className="text-lg font-semibold"
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {location.data?.residents.length}
            </Text>
          </View>
        </View>

        <BaseButton onPress={closeModal}>Cerrar</BaseButton>
      </View>
    </View>
  );
};

export default Modal;
