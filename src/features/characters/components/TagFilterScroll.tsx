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
      className="py-5"
      contentContainerStyle={{ gap: 8 }}
    >
      {CHARACTERS_TAGS.map((item, index) => (
        <BaseChip
          key={index}
          containerClassName={`${tag === item.value ? 'bg-ink border-ink' : 'bg-white border-gray-200 active:bg-red-200'}`}
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
