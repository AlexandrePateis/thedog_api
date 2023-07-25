import { StyleSheet, Switch, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SWRConfig } from 'swr';

import { fetcher } from './src/api/api';
import StackNavigator from './src/screens/StackNavigator';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <SWRConfig
          value={{
            fetcher,
          }}
        >
          <StackNavigator></StackNavigator>
        </SWRConfig>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});
