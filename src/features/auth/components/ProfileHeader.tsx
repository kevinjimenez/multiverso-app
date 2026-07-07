import Avatar from '@/components/shared/Avatar';
import { Text, View } from 'react-native';

const ProfileHeader = () => {
  return (
    <View className="items-center pt-24">
      <Avatar />

      <View className="items-center gap-y-1 my-4">
        <Text className="font-semibold text-2xl text-ink">Rick Sanchez</Text>
        <Text className="text-ink-faint">rick@google.com</Text>
      </View>
    </View>
  );
};

export default ProfileHeader;
