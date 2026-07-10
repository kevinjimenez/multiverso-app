import BaseInput from '@/components/ui/BaseInput';
import Ionicons from '@react-native-vector-icons/ionicons';
import { View } from 'react-native';

interface Props {
  value: string;
  placeholder?: string;
  onChangeText: (text: string) => void;
}

const CharacterSearchInput = ({ value, placeholder, onChangeText }: Props) => {
  return (
    <View className="py-4">
      <BaseInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        prefixIcon={<Ionicons name="search-outline" color="gray" size={15} />}
      />
    </View>
  );
};

export default CharacterSearchInput;
