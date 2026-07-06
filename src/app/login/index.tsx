import BaseButton from '@/components/ui/BaseButton';
import { router } from 'expo-router';
import { Formik } from 'formik';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  View,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const LoginScreen = () => {
  const safeArea = useSafeAreaInsets();

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
          <View
            className="flex-col items-center justify-center gap-y-3"
            style={{ flex: 1 }}
          >
            <Image
              source={require('../../../assets/images/RM-logo.png')}
              className="size-40"
              resizeMode="contain"
            />
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

          <Formik
            initialValues={{ username: '', password: '' }}
            onSubmit={(values) => {
              router.replace('/(tabs)/character');
            }}
          >
            {({ values, handleChange, handleBlur, handleSubmit }) => (
              <>
                <View className="gap-y-3 my-5">
                  <TextInput
                    placeholderTextColor="#A6AEB6"
                    placeholder="Username"
                    value={values.username}
                    onChangeText={handleChange('username')}
                    onBlur={handleBlur('username')}
                    className={`border rounded-xl p-4 focus:border-accent focus:bg-white focus:text-ink ${
                      values.username
                        ? 'border-accent bg-white text-ink'
                        : 'border-gray-300 bg-gray-100 text-gray-300'
                    }`}
                  />
                  <TextInput
                    placeholderTextColor="#A6AEB6"
                    placeholder="Password"
                    value={values.password}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    secureTextEntry
                    className={`border rounded-xl p-4 focus:border-accent focus:bg-white focus:text-ink ${
                      values.password
                        ? 'border-accent bg-white text-ink'
                        : 'border-gray-300 bg-gray-100 text-gray-300'
                    }`}
                  />
                </View>
                <BaseButton
                  onPress={goToHome}
                  disable={!values.username || !values.password}
                >
                  Entrar
                </BaseButton>
              </>
            )}
          </Formik>

          <View className="gap-y-4 mt-4">
            <BaseButton onPress={goToHome} variant="text-only">
              Continuar como invitado
            </BaseButton>

            <Text className="text-ink-faint text-center text-[0.8rem]">
              Al continuar aceptas los terminos del multiverso
            </Text>
          </View>
        </KeyboardAvoidingView>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
