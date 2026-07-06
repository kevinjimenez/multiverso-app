import { ReactNode } from 'react';
import { Pressable, PressableProps, Text, View } from 'react-native';

interface Props extends PressableProps {
  prefix?: ReactNode;
  children?: ReactNode;
  suffix?: ReactNode;
}

const BaseListItem = ({ onPress, prefix, suffix, children }: Props) => {
  return (
    <Pressable
      className="justify-between flex-row items-center border border-gray-300 my-1 px-3.5 py-2 rounded-xl"
      onPress={onPress}
    >
      <View className="flex-row gap-4 flex-1">
        {prefix}
        {children}
      </View>

      {suffix}
    </Pressable>
  );
};

export default BaseListItem;
