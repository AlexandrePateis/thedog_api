import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Details from './Details';
import FurtherDetails from './FurtherDetails';

export default function StackNavigator() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        contentStyle: {
          backgroundColor: 'white',
        },
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="FurtherDetails" component={FurtherDetails} />
    </Stack.Navigator>
  );
}
