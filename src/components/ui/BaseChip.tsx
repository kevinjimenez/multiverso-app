import { Pressable, PressableProps, Text } from 'react-native';
import { twMerge } from 'tailwind-merge';

interface Props extends PressableProps {
  containerClassName?: string;
  textClassName?: string;
  children: string;
}

const BaseChip = ({
  containerClassName,
  textClassName,
  onPress,
  children,
}: Props) => {
  return (
    <Pressable
      className={twMerge(
        'h-8 justify-center px-4 py-1 rounded-2xl border',
        containerClassName,
      )}
      onPress={onPress}
    >
      <Text className={twMerge('text-sm font-medium', textClassName)}>
        {children}
      </Text>
    </Pressable>
  );
};

export default BaseChip;
