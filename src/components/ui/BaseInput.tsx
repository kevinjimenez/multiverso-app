import { TextInput, TextInputProps } from 'react-native';
import { twMerge } from 'tailwind-merge';

interface Props extends TextInputProps {
  className?: string;
}

const BaseInput = ({ value, className, ...props }: Props) => {
  return (
    <TextInput
      placeholderTextColor="#A6AEB6"
      value={value}
      className={twMerge(
        'border rounded-xl p-4 focus:border-accent focus:bg-white focus:text-ink',
        value
          ? 'border-accent bg-white text-ink'
          : 'border-gray-300 bg-gray-100 text-gray-300',
        className,
      )}
      {...props}
    />
  );
};

export default BaseInput;
