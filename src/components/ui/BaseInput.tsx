import { ReactNode } from 'react';
import { TextInput, TextInputProps, View } from 'react-native';
import { twMerge } from 'tailwind-merge';

interface Props extends TextInputProps {
  className?: string;
  prefixIcon?: ReactNode;
  suffixIcon?: ReactNode;
}

const BaseInput = ({
  value,
  className,
  suffixIcon,
  prefixIcon,
  ...props
}: Props) => {
  return (
    <View className="justify-center">
      {prefixIcon && <View className="absolute left-4 z-10">{prefixIcon}</View>}

      <TextInput
        placeholderTextColor="#A6AEB6"
        value={value}
        className={twMerge(
          'border rounded-xl p-4 focus:border-accent focus:bg-white focus:text-ink',
          prefixIcon && 'pl-11',
          suffixIcon && 'pr-11',
          value
            ? 'border-accent bg-white text-ink'
            : 'border-gray-300 bg-gray-100 text-gray-300',
          className,
        )}
        {...props}
      />

      {suffixIcon && (
        <View className="absolute right-4 z-10">{suffixIcon}</View>
      )}
    </View>
  );
};

export default BaseInput;
