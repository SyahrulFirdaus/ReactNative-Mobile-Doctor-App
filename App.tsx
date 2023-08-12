import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native'
import Router from './src/Router'
import { WARNA_PRIMARY } from './src/utils';

const App = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar hidden={false} backgroundColor="#d9d9d9" translucent={true} />
        <NavigationContainer>
          <Router />
        </NavigationContainer>
      </SafeAreaView>
    </>

  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
