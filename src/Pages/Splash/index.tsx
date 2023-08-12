import React, { useEffect } from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import { WARNA_PRIMARY, WARNA_PUTIH } from '../../utils';
import { LogoSplash } from 'assets';

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainApp');
    }, 4000)
  }, [navigation]);

  return (
    <View
      style={{
        backgroundColor: WARNA_PRIMARY,
        flex: 1,
        justifyContent: 'center', alignItems: 'center'
      }}
    >
      <LogoSplash />
      <Text style={{
        color: WARNA_PUTIH,
        fontWeight: '900',
        fontSize: 25,
        letterSpacing: 8,
        marginTop: 5
      }}>HOMER</Text>
      <Text style={{
        color: WARNA_PUTIH,
        fontSize: 11,
        marginTop: 1,
        textAlign: 'center',
        marginHorizontal: 50
      }}>
        If health is the greatest wealth, doctors are like bankers who control your wealth for you.
      </Text>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  label: {
    fontWeight: 'bold',
    fontSize: 40,
    color: '#ffffff',
    textAlign: 'center'
  },
  Text: {
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: -10,
    color: '#ffffff',
    textAlign: 'center'
  }

})