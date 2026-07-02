import { Tabs } from 'expo-router';
import Ionicons from '@react-native-vector-icons/ionicons';

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="character/index"
        options={{
          title: 'Personajes',
          tabBarIcon: ({ color, size }) => <Ionicons name="glasses-outline" color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="episode/index"
        options={{
          title: 'Episodios',
          tabBarIcon: ({ color, size }) => <Ionicons name="film-outline" color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="location/index"
        options={{
          title: 'Lugares',
          tabBarIcon: ({ color, size }) => <Ionicons name="earth-outline" color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="profile/index"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color, size }) => <Ionicons name="person-outline" color={color} size={size} />,
        }}
      />
    </Tabs>
  );
}

export default TabsLayout;
