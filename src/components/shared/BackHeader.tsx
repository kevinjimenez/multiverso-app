import Ionicons from '@react-native-vector-icons/ionicons';
import { router } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

interface Props {
  title?: string;
}

const BackHeader = ({ title }: Props) => {
  return (
    <View className="flex-row items-center gap-x-3">
      <Pressable
        className="bg-gray-100 p-1.5 rounded-full"
        onPress={() => {
          router.back();
        }}
      >
        <Ionicons name="chevron-back" size={25} />
      </Pressable>
      {title && <Text className="font-semibold text-2xl">{title}</Text>}
    </View>
  );
};

export default BackHeader;
