import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="screen1"
        options={{
          title: 'Screen 1',
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="compass" color={color} />,
        }}
      />
      <Tabs.Screen
        name="screen2"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="compass" color={color} />,
        }}
      />
    </Tabs>
  );
}
