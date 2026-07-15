import InfoTable from '@/components/shared/InfoTable';
import BaseButton from '@/components/ui/BaseButton';
import ProfileHeader from '@/features/auth/components/ProfileHeader';
import TermsModal from '@/features/profile/components/TermsModal';
import { useUserStore } from '@/features/auth/store/useUser';
import Ionicons from '@react-native-vector-icons/ionicons';
import { router } from 'expo-router';
import { useState } from 'react';
import { Alert, Text, View } from 'react-native';

const ProfileScreen = () => {
  const { clearUser } = useUserStore();
  const [isTermsVisible, setIsTermsVisible] = useState(false);

  const info = [
    {
      label: 'Cuenta',
      children: (
        <Ionicons name="chevron-forward-outline" size={20} color="#A6AEB6" />
      ),
      onPress: () => {
        router.push('/profile/account');
      },
    },
    {
      label: 'Notificaciones',
      children: (
        <Ionicons name="chevron-forward-outline" size={20} color="#A6AEB6" />
      ),
      onPress: () => {
        router.push('/profile/notification');
      },
    },
    {
      label: 'Apariencia',
      children: (
        <Ionicons name="chevron-forward-outline" size={20} color="#A6AEB6" />
      ),
      onPress: () => {
        router.push('/profile/appearance');
      },
    },
    {
      label: 'Términos y condiciones',
      children: (
        <Ionicons name="chevron-forward-outline" size={20} color="#A6AEB6" />
      ),
      onPress: () => setIsTermsVisible(true),
    },
    {
      label: 'Ayuda y soporte',
      children: (
        <Ionicons name="chevron-forward-outline" size={20} color="#A6AEB6" />
      ),
      onPress: () => {
        Alert.alert(
          'Ayuda y soporte',
          '¿Tienes algún problema o sugerencia? Escríbenos a soporte@multiverso.app y te responderemos lo antes posible.',
          [{ text: 'Entendido' }],
        );
      },
    },
  ];

  const logout = () => {
    clearUser();
    router.replace('/');
  };

  return (
    <View className="px-6 pb-20 bg-white" style={{ flex: 1 }}>
      <ProfileHeader />

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

      <TermsModal
        visible={isTermsVisible}
        onClose={() => setIsTermsVisible(false)}
      />
    </View>
  );
};

export default ProfileScreen;
