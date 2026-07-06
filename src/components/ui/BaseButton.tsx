import { Pressable, PressableProps, Text } from 'react-native';

interface Props extends PressableProps {
  children: string;
  disable?: boolean;
  color?: 'primary' | 'tertiary';
  variant?: 'contained' | 'text-only' | 'outline';
  className?: string;
}

const BaseButton = ({
  children,
  onPress,
  color = 'primary',
  variant,
  className,
  disable = false,
}: Props) => {
  const btnColor = {
    primary: 'bg-primary',
    tertiary: 'bg-tertiary',
  }[color];

  const btnDisableColor = {
    primary: 'bg-primary/40',
    tertiary: 'bg-tertiary/40',
  }[color];

  const textColor = {
    primary: 'text-primary',
    tertiary: 'text-tertiary',
  }[color];

  const borderColor = {
    primary: 'border-primary',
    tertiary: 'border-tertiary',
  }[color];

  if (variant === 'text-only') {
    return (
      <Pressable onPress={onPress}>
        <Text
          className={`${textColor} text-center text-[0.95rem] font-semibold`}
        >
          {children}
        </Text>
      </Pressable>
    );
  }

  if (variant === 'outline') {
    return (
      <Pressable
        className={`group w-full p-4 border ${borderColor} rounded-xl active:${btnColor}`}
        onPress={onPress}
      >
        <Text
          className={`text-center ${textColor} font-semibold group-active:text-white`}
        >
          {children}
        </Text>
      </Pressable>
    );
  }

  return (
    <Pressable
      className={`py-4 rounded-xl active:opacity-80 ${disable ? btnDisableColor : btnColor} ${className}`}
      onPress={onPress}
      disabled={disable}
    >
      <Text className="text-white text-center text-lg font-bold">
        {children}
      </Text>
    </Pressable>
  );
};

export default BaseButton;
