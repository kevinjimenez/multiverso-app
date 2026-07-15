import BackHeader from '@/components/shared/BackHeader';
import { useState } from 'react';
import { Pressable, ScrollView, Switch, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const AppearanceScreen = () => {
  const { top } = useSafeAreaInsets();

  const [darkMode, setDarkMode] = useState(false);
  const [viewCompact, setViewCompact] = useState(false);

  const handleDarkMode = () => {
    // setChangePass(value)
  };

  const handleViewCompact = () => {
    // setAdd(value)
  };

  return (
    <View className="bg-white p-5" style={{ flex: 1, paddingTop: top }}>
      <ScrollView>
        <BackHeader title="Apariencia" />

        <View className="pt-5">
          <Text
            className="text-ink-soft text-sm font-medium pt-3 pb-2"
            style={{ letterSpacing: 0.2 }}
          >
            TEMA
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
            <Pressable onPress={handleDarkMode}>
              <Switch
                value={darkMode}
                onValueChange={(value) => setDarkMode(value)}
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
            <Pressable onPress={handleViewCompact}>
              <Switch
                value={viewCompact}
                onValueChange={(value) => setViewCompact(value)}
              />
            </Pressable>
          </View>
        </View>

        <View className="pt-5">
          <Text
            className="text-ink-soft text-sm font-medium pt-3 pb-2"
            style={{ letterSpacing: 0.2 }}
          >
            COLOR DE ACENTO
          </Text>
          <Text className="text-ink-soft text-sm font-light">
            Puedes cambiar el color de acento desde el panel de ajustes del
            diseño
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default AppearanceScreen;
