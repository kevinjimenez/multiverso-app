import Avatar from '@/components/shared/Avatar';
import BackHeader from '@/components/shared/BackHeader';
import BaseButton from '@/components/ui/BaseButton';
import { useUserStore } from '@/features/auth/store/useUser';
import Ionicons from '@react-native-vector-icons/ionicons';
import { router } from 'expo-router';
import { useState } from 'react';
import { Alert, Platform, Text, View } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const AccountScreen = () => {
  const { top } = useSafeAreaInsets();
  const { user, avatar, email, setUser } = useUserStore();
  const [newUsername, setNewUsername] = useState(user?.username ?? '');
  const [dimension, setDimension] = useState('C-137');

  const deleteAccount = () => {
    Alert.alert('Eliminar cuenta', 'Seguro desea eliminar la cuenta ?', [
      {
        text: 'Acerptar',
        onPress: () => router.replace('/login'),
      },
      {
        text: 'Cancelar',
        style: 'destructive',
      },
    ]);
  };

  return (
    <View className="p-5" style={{ flex: 1, paddingTop: top }}>
      <ScrollView>
        <BackHeader title="Cuenta" />

        <View className="flex-row gap-x-4 pt-5">
          <Avatar seed={avatar()} />
          <View className="justify-center gap-y-1" style={{ flex: 1 }}>
            <Text className="font-semibold text-2xl text-ink" numberOfLines={1}>
              {user?.username ?? 'Guest'}
            </Text>
            <Text className="text-ink-faint" numberOfLines={1}>
              {email()}
            </Text>
          </View>
        </View>

        <View className="pt-10">
          <Text
            className="text-ink-soft text-sm font-medium pt-3 pb-2"
            style={{ letterSpacing: 0.2 }}
          >
            DATOS PERSONALES
          </Text>
          <View
            className={`flex-row justify-between ${Platform.OS === 'android' ? 'py-2 px-4' : 'p-4'} border border-gray-300 rounded-t-2xl gap-x-2 items-center`}
          >
            <Text className="text-ink-faint text-sm font-semibold">
              Usuario
            </Text>
            <TextInput
              editable={!user.guest}
              className="self-start font-bold"
              style={{ fontSize: 16 }}
              value={newUsername}
              onChangeText={(value) => {
                setNewUsername(value);
                setUser({ username: value, guest: user.guest });
              }}
            />
          </View>
          <View
            className={`flex-row justify-between ${Platform.OS === 'android' ? 'py-2 px-4' : 'p-4'} border-x border-gray-300 gap-x-2 items-center`}
          >
            <Text className="text-ink-faint text-sm font-semibold">Correo</Text>
            <TextInput
              style={{ fontSize: 16 }}
              editable={false}
              className="self-start min-w-max font-bold"
              value={email()}
            />
          </View>
          <View
            className={`flex-row justify-between ${Platform.OS === 'android' ? 'py-2 px-4' : 'p-4'} border border-gray-300 rounded-b-2xl gap-x-2 items-center`}
          >
            <Text className="text-ink-faint font-semibold text-sm">
              Dimension
            </Text>
            <TextInput
              style={{ fontSize: 16 }}
              editable={!user.guest}
              className="self-start min-w-max font-bold"
              value={dimension}
              onChangeText={(value) => {
                setDimension(value);
              }}
            />
          </View>
        </View>

        <View className="pt-5 pb-7">
          <Text
            className="text-ink-soft text-sm font-medium pt-3 pb-2"
            style={{ letterSpacing: 0.2 }}
          >
            SEGURIDAD
          </Text>
          <View className="flex-row justify-between p-5 border-x border-gray-300 gap-x-2 border-t rounded-t-2xl items-center">
            <Text className="text-base font-semibold">Cambiar contraseña</Text>
            <Ionicons name="chevron-forward" size={20} color="gray" />
          </View>
          <View className="flex-row justify-between p-5 border border-gray-300 rounded-b-2xl gap-x-2 items-center">
            <Text className="text-base font-semibold">
              Autenticación en dos pasos
            </Text>
            <Text className="text-sm font-semibold text-accent">Activada</Text>
          </View>
        </View>

        <BaseButton onPress={deleteAccount} variant="outline" color="tertiary">
          Eliminar cuenta
        </BaseButton>
      </ScrollView>
    </View>
  );
};

export default AccountScreen;
