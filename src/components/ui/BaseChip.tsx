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
  ...props
}: Props) => {
  return (
    <Pressable
      className={twMerge(
        'h-8 justify-center px-4 py-1 rounded-2xl border',
        containerClassName,
      )}
      onPress={onPress}
      {...props}
    >
      <Text className={twMerge('text-sm font-medium', textClassName)}>
        {children}
      </Text>
    </Pressable>
  );
};

export default BaseChip;
