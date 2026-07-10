import LoginBrand from '@/features/auth/components/LoginBrand';
import LoginFooter from '@/features/auth/components/LoginFooter';
import LoginForm from '@/features/auth/components/LoginForm';
import { LoginFormValues } from '@/features/auth/schemas/login.schema';
import { useUserStore } from '@/features/auth/store/useUser';
import { router } from 'expo-router';
import { KeyboardAvoidingView, Platform, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const LoginScreen = () => {
  const safeArea = useSafeAreaInsets();
  const { setUser } = useUserStore();

  const handleLogin = ({ username }: LoginFormValues) => {
    setUser({ username });
    router.replace('/(tabs)/character');
  };

  const goToHome = () => {
    router.replace('/(tabs)/character');
  };

  return (
    <ScrollView
      style={{ paddingTop: safeArea.top }}
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
    >
      <View className="bg-white px-8 pb-8" style={{ flex: 1 }}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <LoginBrand />

          <LoginForm onSubmit={handleLogin} />

          <LoginFooter onPressGuest={goToHome} />
        </KeyboardAvoidingView>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
