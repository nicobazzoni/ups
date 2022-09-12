import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';

import { NavigationContainer } from '@react-navigation/native';

import RootNavigator from './navigator/RootNavigator';

import CustomersScreen from './screens/CustomersScreen';


export default function App() {
  return (
    // @ts-ignore - Tailwind provider is missing type definition 
    
    <TailwindProvider utilities={utilities}>
      <NavigationContainer>
        <RootNavigator/>
      </NavigationContainer>
   
    </TailwindProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
