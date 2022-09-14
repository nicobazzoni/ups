import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';

import { NavigationContainer } from '@react-navigation/native';

import RootNavigator from './navigator/RootNavigator';

import CustomersScreen from './screens/CustomersScreen';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:5001/api/morbid-waterbuffalo',
  cache: new InMemoryCache(),
})

export default function App() {
  return (
    // @ts-ignore - Tailwind provider is missing type definition 
    
    <TailwindProvider utilities={utilities}>
      <ApolloProvider client={client}>
      <NavigationContainer>
        <RootNavigator/>
      </NavigationContainer>
      </ApolloProvider>
   
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
