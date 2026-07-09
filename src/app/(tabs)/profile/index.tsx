import InfoTable from '@/components/shared/InfoTable';
import BaseButton from '@/components/ui/BaseButton';
import ProfileHeader from '@/features/auth/components/ProfileHeader';
import { useUserStore } from '@/features/auth/store/useUser';
import Ionicons from '@react-native-vector-icons/ionicons';
import { router } from 'expo-router';
import { Text, View } from 'react-native';

const ProfileScreen = () => {
  const { user, clearUser } = useUserStore();
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
    clearUser();
    router.replace('/');
  };

  return (
    <View className="px-6 pb-20 bg-white" style={{ flex: 1 }}>
      <ProfileHeader username={user?.username ?? 'Guest'} />

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
