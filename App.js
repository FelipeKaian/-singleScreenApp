import { NavigationContainer } from '@react-navigation/native';
import { Home } from './src/views/home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Raleway': require('./src/assets/Raleway.ttf'),
    'Raleway-Bold': require('./src/assets/Raleway-Bold.ttf'),
  });
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={Home}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
