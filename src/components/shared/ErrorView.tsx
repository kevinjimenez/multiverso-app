import BaseButton from '@/components/ui/BaseButton';
import Ionicons from '@react-native-vector-icons/ionicons';
import { Text, View } from 'react-native';

interface Props {
  message?: string;
  description?: string;
  onRetry: () => void;
}

const ErrorView = ({
  message = '!Upps algo salió mal',
  description,
  onRetry,
}: Props) => {
  return (
    <View className="flex-1 justify-center items-center px-6">
      <View className="bg-red-100 rounded-full size-[4.5rem] justify-center items-center">
        <Ionicons name="close" size={35} color="red" />
      </View>
      <Text className="my-4 font-bold text-center text-2xl">{message}</Text>
      {description && (
        <Text className="mb-4 px-10 font-normal text-center text-ink-soft">
          {description}
        </Text>
      )}
      <BaseButton className="px-8 py-3 font-normal" onPress={onRetry}>
        Reintentar
      </BaseButton>
    </View>
  );
};

export default ErrorView;
