import Avatar from '@/components/shared/Avatar';
import { Text, View } from 'react-native';

interface Props {
  username: string;
}

const ProfileHeader = ({ username }: Props) => {
  return (
    <View className="items-center pt-24">
      <Avatar />

      <View className="items-center gap-y-1 my-4">
        <Text className="font-semibold text-2xl text-ink">{username}</Text>
        <Text className="text-ink-faint">{username}@google.com</Text>
      </View>
    </View>
  );
};

export default ProfileHeader;
