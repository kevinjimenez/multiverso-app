import { Link, router } from 'expo-router';
import { Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const LoginScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View className="bg-white px-8 pb-8" style={{ flex: 1 }}>
        <View
          className="flex-col items-center justify-center gap-y-3"
          style={{ flex: 1 }}
        >
          <Text
            className="font-semibold text-3xl uppercase"
            style={{ letterSpacing: 5 }}
          >
            Multiverso
          </Text>
          <Text className="w-56 text-pretty text-center text-ink-muted">
            Explora cada personaje del multiverso de Rick and Morty
          </Text>
        </View>

        <View className="gap-y-4">
          <Pressable
            className="py-4 rounded-xl bg-accent shadow shadow-accent-600"
            onPress={() => {
              router.replace('/(tabs)/character');
            }}
          >
            <Text className="text-white text-center text-lg">Entrar</Text>
          </Pressable>

          <Pressable
            onPress={() => {
              router.replace('/(tabs)/character');
            }}
          >
            <Text className="text-accent text-center text-[0.95rem] font-semibold">
              Continuar como invitado
            </Text>
          </Pressable>

          <Text className="text-ink-faint text-center text-[0.8rem]">
            Al continuar aceptas los terminos del multiverso
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
