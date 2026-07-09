import BaseButton from '@/components/ui/BaseButton';
import BaseInput from '@/components/ui/BaseInput';
import { Formik } from 'formik';
import { View } from 'react-native';

interface Props {
  onSubmit: (values: { username: string; password: string }) => void;
}

const LoginForm = ({ onSubmit }: Props) => {
  return (
    <Formik initialValues={{ username: '', password: '' }} onSubmit={onSubmit}>
      {({ values, handleChange, handleBlur, handleSubmit }) => (
        <>
          <View className="gap-y-3 my-5">
            <BaseInput
              placeholder="Username"
              value={values.username}
              onChangeText={handleChange('username')}
              onBlur={handleBlur('username')}
            />
            <BaseInput
              placeholder="Password"
              value={values.password}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              secureTextEntry
            />
          </View>
          <BaseButton
            onPress={() => handleSubmit()}
            disable={!values.username || !values.password}
          >
            Entrar
          </BaseButton>
        </>
      )}
    </Formik>
  );
};

export default LoginForm;
