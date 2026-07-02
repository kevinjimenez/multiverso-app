import Ionicons from '@react-native-vector-icons/ionicons';
import { Tabs } from 'expo-router';

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'indigo',
        headerShown: false,
        // headerTitle: () => <View className='flex flex-row'>
        //   <View className='flex flex-col'>
        //     <Text>Multiverso</Text>
        //     <Text>Personajes</Text>
        //   </View>
        //   <Text>20 personajes</Text>
        // </View>
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
        name="episode/index"
        options={{
          title: 'Episodios',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="film-outline" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="location/index"
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
