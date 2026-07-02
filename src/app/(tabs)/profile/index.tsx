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
        <View className="size-20 rounded-full bg-green-500 justify-center items-center shadow">
          <Text className="text-3xl font-semibold text-white">R</Text>
        </View>

        <View className="items-center gap-y-1 my-4">
          <Text className="font-semibold text-2xl">Rick Sanchez</Text>
          <Text className="text-slate-400">rick@google.com</Text>
        </View>
      </View>

      <View style={{ flex: 1 }}>
        <Text className="text-slate-500 text-xs font-medium py-3">AJUSTES</Text>
        <View className="border rounded-xl border-slate-300">
          {data.map((value, index) => (
            <View
              key={index}
              className={`p-4 flex-row justify-between items-center ${index !== data.length - 1 ? 'border-b border-slate-300' : ''}`}
            >
              <Text className="font-semibold">{value}</Text>

              <Pressable
                onPress={() => {
                  console.log(value);
                }}
              >
                <Ionicons
                  name="chevron-forward-outline"
                  size={20}
                  color={'gray'}
                />
              </Pressable>
            </View>
          ))}
        </View>
      </View>

      <Pressable
        className="w-full p-4 border border-red-300 hover:bg-red-300 rounded-xl"
        onPress={() => router.replace('/')}
      >
        <Text className="text-center text-red-500 font-semibold">
          Cerrar sesión
        </Text>
      </Pressable>
    </View>
  );
};

export default ProfileScreen;
