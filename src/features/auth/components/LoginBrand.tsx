import { Image, Text, View } from 'react-native';

const LoginBrand = () => {
  return (
    <View
      className="flex-col items-center justify-center gap-y-3"
      style={{ flex: 1 }}
    >
      <Image
        source={require('../../../../assets/images/RM-logo.png')}
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
  );
};

export default LoginBrand;
