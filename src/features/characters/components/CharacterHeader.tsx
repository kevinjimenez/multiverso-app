import Ionicons from '@react-native-vector-icons/ionicons';
import { Pressable, PressableProps, View } from 'react-native';
import CharacterPoster from './CharacterPoster';

interface Props extends PressableProps {
  image: string;
}

const CharacterHeader = ({ image, onPress }: Props) => {
  return (
    <>
      <View
        style={{
          position: 'absolute',
          zIndex: 99,
          elevation: 9,
          top: 15,
          left: 15,
        }}
      >
        <Pressable
          onPress={onPress}
          className="bg-white rounded-full size-10 items-center justify-center shadow"
          style={{ elevation: 9 }}
        >
          <Ionicons name="chevron-back-outline" size={22} color={'black'} />
        </Pressable>
      </View>
      <CharacterPoster image={image} />
    </>
  );
};

export default CharacterHeader;
