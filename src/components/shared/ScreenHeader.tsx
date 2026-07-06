import { Text, View } from 'react-native';

interface Props {
  title: string;
  count: number;
  classNameContainer?: string;
}

const ScreenHeader = ({ title, count, classNameContainer }: Props) => {
  return (
    <View
      className={`flex-row justify-between items-center ${classNameContainer}`}
    >
      <View className="flex-col gap-y-0.5">
        <Text
          className="uppercase text-[0.85rem] font-semibold text-accent"
          style={{ letterSpacing: 1 }}
        >
          Multiverso
        </Text>
        <Text className="text-4xl font-bold text-ink capitalize">{title}</Text>
      </View>
      <Text className="text-ink-muted font-medium text-sm">
        {count} {title}
      </Text>
    </View>
  );
};

export default ScreenHeader;
