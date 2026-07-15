import BackHeader from '@/components/shared/BackHeader';
import Ionicons from '@react-native-vector-icons/ionicons';
import { useState } from 'react';
import { Pressable, ScrollView, Switch, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const NotificationSccreen = () => {
  const { top } = useSafeAreaInsets();
  const [changePass, setChangePass] = useState(true);
  const [add, setAdd] = useState(true);
  const [resume, setResume] = useState(false);

  const handleChangePass = () => {
    // setChangePass(value)
  };

  const handleAdd = () => {
    // setAdd(value)
  };

  const handleResume = () => {
    // setResume(value)
  };

  return (
    <View className="bg-white p-5" style={{ flex: 1, paddingTop: top }}>
      <ScrollView>
        <BackHeader title="Notificaciones" />

        <View className="pt-5">
          <Text
            className="text-ink-soft text-sm font-medium pt-3 pb-2"
            style={{ letterSpacing: 0.2 }}
          >
            GENERAL
          </Text>
          <View className="flex-row justify-between p-5 border-x border-gray-300 gap-x-2 border-t rounded-t-2xl items-center">
            <View className="flex-col">
              <Text className="text-base font-semibold">
                Cambiar contraseña
              </Text>
              <Text className="text-sm text-ink-muted">
                Alertas en tu dispositivo
              </Text>
            </View>
            <Pressable onPress={handleChangePass}>
              <Switch
                value={changePass}
                onValueChange={(value) => setChangePass(value)}
              />
            </Pressable>
          </View>
          <View className="flex-row justify-between p-5 border border-gray-300 rounded-b-2xl gap-x-2 items-center">
            <View className="flex-col">
              <Text className="text-base font-semibold">Nuevos personajes</Text>
              <Text className="text-sm text-ink-muted">
                Cuando se añaden al multiverso
              </Text>
            </View>
            <Pressable onPress={handleAdd}>
              <Switch value={add} onValueChange={(value) => setAdd(value)} />
            </Pressable>
          </View>
        </View>

        <View className="pt-5">
          <Text
            className="text-ink-soft text-sm font-medium pt-3 pb-2"
            style={{ letterSpacing: 0.2 }}
          >
            CORREO
          </Text>
          <View className="flex-row justify-between p-5 border border-gray-300 gap-x-2  rounded-2xl items-center">
            <View className="flex-col">
              <Text className="text-base font-semibold">Resumen semanal</Text>
              <Text className="text-sm text-ink-muted">
                Lo más visto de la semana
              </Text>
            </View>
            <Pressable onPress={handleResume}>
              <Switch
                value={resume}
                onValueChange={(value) => setResume(value)}
              />
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default NotificationSccreen;
