import BaseButton from '@/components/ui/BaseButton';
import { Text, View } from 'react-native';

interface Props {
  message?: string;
  onRetry: () => void;
}

const ErrorView = ({
  message = 'Ocurrió un error al cargar los datos',
  onRetry,
}: Props) => {
  return (
    <View className="flex-1 justify-center items-center px-6">
      <Text className="mb-4 font-medium text-center">{message}</Text>
      <BaseButton onPress={onRetry}>Reintentar</BaseButton>
    </View>
  );
};

export default ErrorView;
