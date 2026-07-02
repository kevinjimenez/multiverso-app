import { View, Text, Button, Pressable } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

const LoginScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View className="bg-red-100" style={{ flex: 1 }}>
        <Text>LoginScreen</Text>
        <Pressable
          className="p-3 rounded-sm bg-slate-300 active:opacity-90"
          onPress={() => {
            router.replace('/(tabs)/character');
          }}
        >
          <Text className="text-white text-center">Login</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
