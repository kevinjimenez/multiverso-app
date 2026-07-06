import { ReactNode } from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props {
  children: ReactNode;
}

const ScreenMainContainer = ({ children }: Props) => {
  const { top } = useSafeAreaInsets();

  return (
    <View
      className="bg-white"
      style={{ flex: 1, paddingTop: top, paddingHorizontal: 15 }}
    >
      {children}
    </View>
  );
};

export default ScreenMainContainer;
