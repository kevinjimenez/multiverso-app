import InfoTable from '@/components/shared/InfoTable';
import BaseButton from '@/components/ui/BaseButton';
import Ionicons from '@react-native-vector-icons/ionicons';
import { router } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

const ProfileScreen = () => {
  const info = [
    {
      label: 'Cuenta',
      children: (
        <Ionicons name="chevron-forward-outline" size={20} color="#A6AEB6" />
      ),
      onPress: () => {
        console.log('aqui');
      },
    },
    {
      label: 'Notificaciones',
      children: (
        <Ionicons name="chevron-forward-outline" size={20} color="#A6AEB6" />
      ),
      onPress: () => {
        console.log('aqui');
      },
    },
    {
      label: 'Apariencia',
      children: (
        <Ionicons name="chevron-forward-outline" size={20} color="#A6AEB6" />
      ),
      onPress: () => {
        console.log('aqui');
      },
    },
    {
      label: 'Ayuda y soporte',
      children: (
        <Ionicons name="chevron-forward-outline" size={20} color="#A6AEB6" />
      ),
      onPress: () => {
        console.log('aqui');
      },
    },
  ];

  const logout = () => {
    router.replace('/');
  };

  return (
    <View className="px-6 pb-20 bg-white" style={{ flex: 1 }}>
      <View className="items-center pt-24">
        <View className="size-20 rounded-full bg-accent justify-center items-center shadow">
          <Text className="text-3xl font-semibold text-white">R</Text>
        </View>

        <View className="items-center gap-y-1 my-4">
          <Text className="font-semibold text-2xl text-ink">Rick Sanchez</Text>
          <Text className="text-ink-faint">rick@google.com</Text>
        </View>
      </View>

      <View className="mb-8">
        <Text className="text-ink-soft text-xs font-medium pt-3 pb-2">
          AJUSTES
        </Text>
        <InfoTable
          data={info}
          classNameLabel="font-semibold text-black text-base"
          classNameItem="py-4"
        />
      </View>

      <BaseButton onPress={logout} variant="outline" color="tertiary">
        Cerrar sesión
      </BaseButton>
    </View>
  );
};

export default ProfileScreen;
