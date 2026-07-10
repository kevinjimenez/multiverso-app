import { ActivityIndicator, Text, View } from 'react-native';

interface Props {
  message?: string;
}

const LoadingView = ({ message = 'Espere por favor' }: Props) => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="mb-4 font-medium">{message}</Text>
      <ActivityIndicator className="text-primary" size={30} />
    </View>
  );
};

export default LoadingView;
