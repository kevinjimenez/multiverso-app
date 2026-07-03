import { Link, router } from 'expo-router';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Formik } from 'formik';
import { ScrollView } from 'react-native-gesture-handler';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

const LoginScreen = () => {
  const safeArea = useSafeAreaInsets();

  return (
    // <KeyboardAvoidingView
    //   style={{ flex: 1 }}
    //   behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    // >
    <ScrollView
      style={{ paddingTop: safeArea.top }}
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
    >
      {/*<KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >*/}
      <View className="bg-white px-8 pb-8" style={{ flex: 1 }}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
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

                <Pressable
                  disabled={!values.username || !values.password}
                  className={`py-4 rounded-xl active:opacity-80 ${
                    !values.username || !values.password
                      ? 'bg-accent/40'
                      : 'bg-accent'
                  }`}
                  onPress={() => handleSubmit()}
                >
                  <Text className="text-white text-center text-lg">Entrar</Text>
                </Pressable>
              </>
            )}
          </Formik>

          <View className="gap-y-4 mt-4">
            {/*<Pressable
              className="py-4 rounded-xl bg-accent shadow shadow-accent-600"
              onPress={() => {
                router.replace('/(tabs)/character');
              }}
            >
              <Text className="text-white text-center text-lg">Entrar</Text>
            </Pressable>*/}

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
        </KeyboardAvoidingView>
      </View>
      {/*</KeyboardAvoidingView>*/}
    </ScrollView>
    // </KeyboardAvoidingView>
  );
};

export default LoginScreen;
