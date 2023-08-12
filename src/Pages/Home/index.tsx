import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { WARNA_CONTENT, WARNA_PRIMARY, WARNA_PUTIH } from '../../utils'
import { IconArrow, IconLoginSplash } from 'assets'

const Home = ({ navigation }) => {
  return (
    <View style={{
      backgroundColor: '#f5f5f5',
      flex: 1
    }}>
      <Text style={{
        marginTop: 150,
        fontWeight: '700',
        left: 30,
        color: '#FBD85D',
        fontSize: 13
      }}>Don't trade your health for money.</Text>
      <Text style={{
        color: WARNA_PRIMARY,
        fontWeight: 'bold',
        left: 30,
        fontSize: 22
      }}>Easy and Secure</Text>
      <Text style={{
        left: 30,
        color: WARNA_CONTENT,
        fontSize: 12
      }}>Your health should be your priority {"\n"}
        otherwise it will become a hindrance {"\n"}
        in your way.</Text>

      <View style={{
        alignItems: 'center',
        marginTop: 40
      }}>
        <IconLoginSplash />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("Details")}>
        <View style={{
          alignItems: 'center'
        }}>
          <View style={{
            backgroundColor: WARNA_PRIMARY,
            width: 110,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            marginTop: 10
          }}>
            <Text style={{
              paddingVertical: 5,
              color: WARNA_PUTIH,
              marginLeft: 20,
              fontWeight: 'bold'
            }}>Get Started</Text>
            <IconArrow style={{
              marginLeft: 15
            }} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})