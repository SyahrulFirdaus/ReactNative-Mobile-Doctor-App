import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { WARNA_CONTENT, WARNA_DISABLE, WARNA_PRIMARY, WARNA_PUTIH } from '../../utils'
import { IconChecklist, IconDoctor, IconFacebook, IconGoogle, IconHome, IconNonChecklist, LeftArrow } from 'assets'

const Login = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={{
        backgroundColor: '#d9d9d9'
      }}>
        <LeftArrow style={{
          marginTop: 60,
          left: 30
        }} />
        <View style={{ alignItems: 'center' }}>
          <IconDoctor style={{
            marginTop: 1
          }} />
        </View>
        <View style={{
          backgroundColor: '#f5f5f5',
          marginTop: -5,
          borderTopRightRadius: 27,
          borderTopLeftRadius: 27
        }}>
          <Text style={{
            paddingLeft: 30,
            fontWeight: '900',
            fontSize: 20,
            marginTop: 25
          }}>Welcome back!</Text>
          <Text style={{
            paddingLeft: 30,
            fontSize: 12,
            marginTop: 3,
            color: WARNA_CONTENT
          }}>Hello sir. Login to continue</Text>

          {/* Login options */}
          <View style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 10
          }}>
            <View style={{
              backgroundColor: WARNA_PUTIH,
              paddingVertical: 10,
              borderRadius: 20,
              width: 140,
              flexDirection: 'row',
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.20,
              shadowRadius: 1.41,

              elevation: 2,
            }}>
              <IconGoogle style={{ marginLeft: 20 }} />
              <Text style={{
                textAlign: 'center',
                paddingLeft: 12,
                fontSize: 15,
                paddingTop: 1,
                color: WARNA_CONTENT,
                letterSpacing: 1
              }}>Google</Text>
            </View>

            <View style={{
              marginHorizontal: 5,
            }}></View>

            <View style={{
              backgroundColor: WARNA_PRIMARY,
              paddingVertical: 10,
              borderRadius: 20,
              width: 140,
              flexDirection: 'row',
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.20,
              shadowRadius: 1.41,

              elevation: 2,
            }}>
              <IconFacebook style={{ marginLeft: 20 }} />

              <Text style={{
                textAlign: 'center',
                paddingLeft: 12,
                fontSize: 15,
                paddingTop: 1,
                color: WARNA_PUTIH,
              }}>Facebook</Text>
            </View>
          </View>

          <Text style={{
            textAlign: 'center',
            color: WARNA_CONTENT
          }}>Or can login with</Text>

          <View>
            <Text style={{
              paddingLeft: 30,
            }}>Email Address</Text>
            <View style={{
              backgroundColor: WARNA_PUTIH,
              width: 315,
              height: 48,
              marginLeft: 23,
              borderRadius: 20,
              marginTop: 5,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.20,
              shadowRadius: 1.41,

              elevation: 2,
            }}>
              <Text style={{
                paddingLeft: 12,
                paddingTop: 13,
                color: WARNA_CONTENT
              }}>Syahrulfirdaus781@gmail.com</Text>
              <View style={{
                alignItems: 'flex-end',
                justifyContent: 'flex-end',
                marginBottom: 33,
              }}>
                <IconChecklist style={{
                  marginBottom: 13,
                  marginRight: 13
                }} />
              </View>

            </View>

            <Text style={{
              paddingLeft: 30,
              marginTop: 10
            }}>Password</Text>
            <View style={{
              backgroundColor: WARNA_PUTIH,
              width: 315,
              height: 48,
              marginLeft: 23,
              borderRadius: 20,
              marginTop: 5,
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.20,
              shadowRadius: 1.41,

              elevation: 2,
            }}>
              <IconNonChecklist style={{
                marginBottom: 13,
                marginRight: 13
              }} />

            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Forgot')}>
              <Text style={{
                textAlign: 'right',
                fontSize: 12,
                marginRight: 29,
                marginTop: 5,
                color: WARNA_PRIMARY
              }}>Forgot Password?</Text>
            </TouchableOpacity>

            <View style={{
              backgroundColor: WARNA_PRIMARY,
              width: 315,
              height: 48,
              marginLeft: 23,
              borderRadius: 20,
              marginTop: 20,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Text style={{
                color: WARNA_PUTIH,
                fontWeight: '900'
              }}>Login Account</Text>
            </View>

            <Text style={{
              fontSize: 11,
              color: WARNA_PRIMARY,
              textAlign: 'center',
              marginTop: 20
            }}>Don't have an account yet?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={{
                fontWeight: 'bold',
                fontSize: 11,
                color: WARNA_PRIMARY,
                textAlign: 'center'
              }}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default Login

const styles = StyleSheet.create({})