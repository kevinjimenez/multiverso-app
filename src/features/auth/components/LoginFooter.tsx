import BaseButton from '@/components/ui/BaseButton';
import { Text, View } from 'react-native';

interface Props {
  onPressGuest: () => void;
}

const LoginFooter = ({ onPressGuest }: Props) => {
  return (
    <View className="gap-y-4 mt-4">
      <BaseButton onPress={onPressGuest} variant="text-only">
        Continuar como invitado
      </BaseButton>

      <Text className="text-ink-faint text-center text-[0.8rem]">
        Al continuar aceptas los terminos del multiverso
      </Text>
    </View>
  );
};

export default LoginFooter;
