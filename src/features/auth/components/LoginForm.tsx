import BaseButton from '@/components/ui/BaseButton';
import BaseInput from '@/components/ui/BaseInput';
import { Formik, FormikErrors } from 'formik';
import { Text, View } from 'react-native';
import { z } from 'zod';

interface Props {
  onSubmit: (values: { username: string; password: string }) => void;
}

const loginSchema = z.object({
  username: z.string().min(1, 'El usuario es requerido'),
  password: z.string().min(1, 'La contraseña es requerida'),
});

type FormValues = z.infer<typeof loginSchema>;

const validate = (values: FormValues) => {
  const result = loginSchema.safeParse(values);
  if (result.success) return {};

  const fieldErrors = result.error.flatten().fieldErrors;
  const errors: FormikErrors<FormValues> = {
    username: fieldErrors.username?.[0],
    password: fieldErrors.password?.[0],
  };

  return errors;
};

const LoginForm = ({ onSubmit }: Props) => {
  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      validate={validate}
      onSubmit={onSubmit}
    >
      {({
        values,
        handleChange,
        handleBlur,
        handleSubmit,
        touched,
        errors,
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
          <BaseButton
            onPress={() => handleSubmit()}
            // disable={!values.username || !values.password}
          >
            Entrar
          </BaseButton>
        </>
      )}
    </Formik>
  );
};

export default LoginForm;
