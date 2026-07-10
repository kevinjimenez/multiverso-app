import BaseButton from '@/components/ui/BaseButton';
import BaseInput from '@/components/ui/BaseInput';
import { Formik } from 'formik';
import { Text, View } from 'react-native';
import { LoginFormValues, validateLogin } from '../schemas/login.schema';

interface Props {
  onSubmit: (values: LoginFormValues) => void;
}

const LoginForm = ({ onSubmit }: Props) => {
  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      validate={validateLogin}
      onSubmit={onSubmit}
    >
      {({
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <>
          <View className="gap-y-3 my-5">
            <View>
              <BaseInput
                placeholder="Username"
                value={values.username}
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
              />
              {touched.username && errors.username && (
                <Text className="text-red-500 text-xs mt-1">
                  {errors.username}
                </Text>
              )}
            </View>
            <View>
              <BaseInput
                placeholder="Password"
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                secureTextEntry
              />
              {touched.password && errors.password && (
                <Text className="text-red-500 text-xs mt-1">
                  {errors.password}
                </Text>
              )}
            </View>
          </View>
          <BaseButton onPress={() => handleSubmit()}>Entrar</BaseButton>
        </>
      )}
    </Formik>
  );
};

export default LoginForm;
