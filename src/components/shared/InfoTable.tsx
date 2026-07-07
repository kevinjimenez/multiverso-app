import { ReactNode } from 'react';
import { Pressable, PressableProps, Text, View } from 'react-native';
import { twMerge } from 'tailwind-merge';

interface Info extends PressableProps {
  label?: string;
  value?: string | number;
  children?: ReactNode;
}

interface Props {
  data: Info[];
  classNameContainer?: string;
  classNameLabel?: string;
  classNameValue?: string;
  classNameItem?: string;
}

const InfoTable = ({
  data,
  classNameContainer,
  classNameLabel,
  classNameValue,
  classNameItem,
}: Props) => {
  return (
    <View className={twMerge(classNameContainer)}>
      {data.map((item, index) => (
        <Pressable
          key={`${index}-${item?.label}`}
          className={twMerge(
            'justify-between flex-row px-4 py-3 border-t items-center border-gray-300',
            index === 0
              ? 'rounded-t-xl border-x'
              : index === data.length - 1
                ? 'rounded-b-xl border-x border-b'
                : 'border-x',
            item?.onPress && 'active:bg-gray-100/50',
            classNameItem,
          )}
          onPress={item?.onPress}
        >
          {item?.label && (
            <Text className={twMerge('text-ink-faint font-bold', classNameLabel)}>
              {item.label}
            </Text>
          )}

          {item?.children && item.children}

          {item?.value && (
            <Text className={twMerge('text-lg font-bold', classNameValue)}>
              {item.value}
            </Text>
          )}
        </Pressable>
      ))}
    </View>
  );
};

export default InfoTable;
