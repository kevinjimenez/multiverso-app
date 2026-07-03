import Ionicons from '@react-native-vector-icons/ionicons';
import { router } from 'expo-router';
import { Pressable, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ProfileScreen = () => {
  const { top } = useSafeAreaInsets();
  const data = ['Cuenta', 'Notificaciones', 'Apariencia', 'Ayuda y soporte'];

  return (
    <View className="px-6 pb-20 bg-white" style={{ flex: 1, paddingTop: 120 }}>
      <View className="items-center">
        <View className="size-20 rounded-full bg-accent justify-center items-center shadow">
          <Text className="text-3xl font-semibold text-white">R</Text>
        </View>

        <View className="items-center gap-y-1 my-4">
          <Text className="font-semibold text-2xl text-ink">Rick Sanchez</Text>
          <Text className="text-ink-faint">rick@google.com</Text>
        </View>
      </View>

      <View style={{ flex: 1 }}>
        <Text className="text-ink-soft text-xs font-medium pt-3 pb-2">
          AJUSTES
        </Text>
        <View className="border rounded-xl border-surface-line ">
          {data.map((value, index) => (
            <View
              key={index}
              className={`p-4 flex-row justify-between items-center ${index !== data.length - 1 ? 'border-b border-surface-line' : ''}`}
            >
              <Text className="font-semibold text-ink">{value}</Text>

              <Pressable
                onPress={() => {
                  console.log(value);
                }}
              >
                <Ionicons
                  name="chevron-forward-outline"
                  size={20}
                  color="#A6AEB6"
                />
              </Pressable>
            </View>
          ))}
        </View>
      </View>

      <Pressable
        className="w-full p-4 border border-status-dead rounded-xl"
        onPress={() => router.replace('/')}
      >
        <Text className="text-center text-status-dead font-semibold">
          Cerrar sesión
        </Text>
      </Pressable>
    </View>
  );
};

export default ProfileScreen;
