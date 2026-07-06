import { Text, View } from 'react-native';

interface Info {
  label: string | undefined;
  value: string | number | undefined;
}

interface Props {
  data: Info[];
  classNameContainer?: string;
  classNameLabel?: string;
  classNameValue?: string;
}

const InfoTable = ({
  data,
  classNameContainer,
  classNameLabel,
  classNameValue,
}: Props) => {
  return (
    <View className={`${classNameContainer}`}>
      {data.map((item, index) => (
        <View
          key={`${index}-${item.label}`}
          className={`justify-between flex-row px-4 py-3 border-t items-center border-gray-300 ${index === 0 ? 'rounded-t-xl border-x' : index === data.length - 1 ? 'rounded-b-xl border-x border-b' : 'border-x'}`}
        >
          <Text className={`text-ink-faint font-bold ${classNameLabel}`}>
            {item.label}
          </Text>
          <Text className={`text-lg font-bold ${classNameValue}`}>
            {item.value}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default InfoTable;
