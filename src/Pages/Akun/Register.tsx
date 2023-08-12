import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { WARNA_CONTENT, WARNA_DISABLE, WARNA_PRIMARY, WARNA_PUTIH } from '../../utils'
import { IconChecklist, IconDoctor, IconFacebook, IconGoogle, IconHome, IconLogoRegister, IconNonChecklist, LeftArrow } from 'assets'


const Register = ({
    navigation
}) => {
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
                    <IconLogoRegister style={{
                        marginTop: -40
                    }} />

                </View>
                <View style={{
                    backgroundColor: '#f5f5f5',
                    marginTop: -20,
                    borderTopRightRadius: 27,
                    borderTopLeftRadius: 27
                }}>
                    <Text style={{
                        paddingLeft: 30,
                        fontWeight: '900',
                        fontSize: 20,
                        marginTop: 25
                    }}>Hello</Text>
                    <Text style={{
                        paddingLeft: 30,
                        fontSize: 12,
                        marginTop: 3,
                        color: WARNA_CONTENT
                    }}>Hello sir/madam. Please create your account.</Text>

                    <View>
                        <Text style={{
                            paddingLeft: 30,
                            marginTop: 10,
                        }}>Your Name</Text>
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
                                paddingLeft: 15,
                                paddingTop: 14,
                                color: WARNA_CONTENT
                            }}>Syahrul Firdaus</Text>
                            <View style={{
                                alignItems: 'flex-end',
                                justifyContent: 'flex-end',
                            }}>
                                <IconChecklist style={{
                                    marginTop: -20,
                                    marginRight: 13
                                }} />
                            </View>

                        </View>

                        <Text style={{
                            paddingLeft: 30,
                            marginTop: 10,
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
                                paddingLeft: 15,
                                paddingTop: 14,
                                color: WARNA_CONTENT
                            }}>Syahrulfirdaus781@gmail.com</Text>
                            <View style={{
                                alignItems: 'flex-end',
                                justifyContent: 'flex-end',
                            }}>
                                <IconChecklist style={{
                                    marginTop: -20,
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
                            }}>Create an Account</Text>
                        </View>

                        <Text style={{
                            fontSize: 12,
                            color: WARNA_PRIMARY,
                            textAlign: 'center',
                            marginTop: 40
                        }}>You have an account yet? please </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text style={{
                                fontWeight: 'bold',
                                fontSize: 11,
                                color: WARNA_PRIMARY,
                                textAlign: 'center'
                            }}>
                                Sign In
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default Register
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({})