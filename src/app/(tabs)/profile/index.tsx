import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { router } from 'expo-router';

const ProfileScreen = () => {
  return (
    <View>
      <View className="p-3 bg-slate-300 h-full">
        <Pressable
          className="w-full p-3 bg-slate-600 rounded"
          onPress={() => router.replace('/')}
        >
          <Text className="text-center text-white">Salir</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ProfileScreen;
