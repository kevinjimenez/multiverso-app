import Avatar from '@/components/shared/Avatar';
import { Text, View } from 'react-native';
import { useUserStore } from '../store/useUser';

const ProfileHeader = () => {
  const { user, avatar, email } = useUserStore();

  return (
    <View className="items-center pt-24">
      <Avatar seed={avatar()} />

      <View className="items-center gap-y-1 my-4">
        <Text className="font-semibold text-2xl text-ink">
          {user?.username ?? 'Guest'}
        </Text>
        <Text className="text-ink-faint">{email()}</Text>
      </View>
    </View>
  );
};

export default ProfileHeader;
