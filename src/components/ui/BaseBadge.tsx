import { ReactNode } from 'react';
import { View } from 'react-native';
import { twMerge } from 'tailwind-merge';

interface Props {
  children: ReactNode;
  classNameContainer?: string;
}

const BaseBadge = ({ classNameContainer, children }: Props) => {
  return (
    <View
      className={twMerge(
        'flex-row items-center gap-x-2 bg-gray-200 rounded-xl px-2 py-1',
        classNameContainer,
      )}
    >
      {children}
    </View>
  );
};

export default BaseBadge;
