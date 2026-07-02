import { View, Text, Button, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'

const LoginScreen = () => {
  return (
    <SafeAreaView>
      <View className='bg-red-100'>
        <Text>LoginScreen</Text>
        <Pressable
          className="p-3 rounded-sm bg-slate-300 active:opacity-90"
          onPress={() => { router.replace('/(tabs)/character') }}
        >
          <Text className='text-white text-center'>Login</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

export default LoginScreen
