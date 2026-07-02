import { View, Text, Button, Pressable } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

const LoginScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View className="bg-white px-8 pb-10" style={{ flex: 1 }}>
        <View
          className="flex-col items-center justify-center gap-y-3"
          style={{ flex: 1 }}
        >
          <Text className="font-semibold text-3xl uppercase">Multiverso</Text>
          <Text className="w-56 text-pretty text-slate-500">
            Explora cada personaje del multiverso de Rick and Morty
          </Text>
        </View>

        <Pressable
          className="py-4 rounded-xl bg-green-700"
          onPress={() => {
            router.replace('/(tabs)/character');
          }}
        >
          <Text className="text-white text-center">Entrar</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
