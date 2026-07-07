import BaseButton from '@/components/ui/BaseButton';
import BaseInput from '@/components/ui/BaseInput';
import { Formik } from 'formik';
import { View } from 'react-native';

interface Props {
  onPress: () => void;
}

const LoginForm = ({ onPress }: Props) => {
  return (
    <Formik initialValues={{ username: '', password: '' }} onSubmit={onPress}>
      {({ values, handleChange, handleBlur }) => (
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
            onPress={onPress}
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
