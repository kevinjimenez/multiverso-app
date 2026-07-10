import BaseChip from '@/components/ui/BaseChip';
import { ScrollView } from 'react-native';
import { CHARACTERS_TAGS } from '../constants/characters-tags.constants';

interface Props {
  tag: string;
  onSelectTag: (value: string) => void;
}

const TagFilterScroll = ({ tag, onSelectTag }: Props) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{ flexGrow: 0 }}
      contentContainerStyle={{
        columnGap: 8,
        // alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 10,
      }}
    >
      {CHARACTERS_TAGS.map((item, index) => (
        <BaseChip
          key={index}
          containerClassName={`${tag === item.value ? 'bg-ink border-ink' : 'bg-white border-gray-200 active:bg-gray-100'}`}
          textClassName={`${tag === item.value ? 'text-white' : ''}`}
          onPress={() => onSelectTag(item.value)}
        >
          {item.label}
        </BaseChip>
      ))}
    </ScrollView>
  );
};

export default TagFilterScroll;
