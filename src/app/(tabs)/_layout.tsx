import Ionicons from '@react-native-vector-icons/ionicons';
import { Tabs } from 'expo-router';

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#11B0A3',
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="character"
        options={{
          title: 'Personajes',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="glasses-outline" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="episode"
        options={{
          title: 'Episodios',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="film-outline" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="location"
        options={{
          title: 'Lugares',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="earth-outline" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile/index"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
