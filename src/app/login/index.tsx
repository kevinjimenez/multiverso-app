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
    setUser({ username, guest: false });
    router.replace('/(tabs)/character');
  };

  const goToHome = () => {
    router.replace('/(tabs)/character');
  };

  return (
    <KeyboardAvoidingView
      className="bg-white px-8"
      style={{
        flex: 1,
        paddingTop: safeArea.top,
      }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View className="pb-8" style={{ flex: 1 }}>
          <LoginBrand />

          <LoginForm onSubmit={handleLogin} />

          <LoginFooter onPressGuest={goToHome} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
