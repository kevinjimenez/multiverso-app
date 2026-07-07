import InfoTable from '@/components/shared/InfoTable';
import BaseButton from '@/components/ui/BaseButton';
import LocationHeader from '@/features/locations/components/LocationHeader';
import { useLocation } from '@/features/locations/hooks/useLocation';
import { router, useLocalSearchParams } from 'expo-router';
import { ActivityIndicator, View } from 'react-native';

const ByIdModel = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { location } = useLocation(+id);

  const info = [
    {
      label: 'Tipo',
      value: location.data?.type ?? '',
    },
    {
      label: 'Temporada',
      value: location.data?.dimension ?? '',
    },
    {
      label: 'Residentes',
      value: location.data?.residents.length ?? 0,
    },
  ];

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
      <LocationHeader name={location.data?.name ?? ''} onPress={closeModal} />
      <View className="py-10 px-7 flex-1">
        <InfoTable data={info} classNameContainer="py-2 flex-1" />
        <BaseButton onPress={closeModal}>Cerrar</BaseButton>
      </View>
    </View>
  );
};

export default ByIdModel;
