import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { WARNA_CONTENT, WARNA_PRIMARY, WARNA_PUTIH } from '../../utils'
import { IconArrow, IconLoginSplash, LeftArrow } from 'assets'

const LoginSplash = ({ navigation }) => {
    return (
        <View style={{
            backgroundColor: '#f5f5f5',
            flex: 1
        }}>
            <LeftArrow style={{
                marginTop: 60,
                left: 30
            }} />
            <Text style={{
                marginTop: 40,
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

            <View style={{
                flexDirection: 'row',
                justifyContent: 'center'
            }}>
                <View style={{
                    backgroundColor: WARNA_PRIMARY,
                    width: 10,
                    height: 10,
                    borderRadius: 20
                }}></View>
                <View style={{
                    marginHorizontal: 2
                }}></View>
                <View style={{
                    backgroundColor: WARNA_CONTENT,
                    width: 10,
                    height: 10,
                    borderRadius: 20
                }}></View>
                <View style={{
                    marginHorizontal: 2
                }}></View>
                <View style={{
                    backgroundColor: WARNA_CONTENT,
                    width: 10,
                    height: 10,
                    borderRadius: 20
                }}></View>
            </View>

            {/* <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 40
            }}>
                <View style={{
                    width: 50,
                    height: 50,
                    backgroundColor: WARNA_PUTIH,
                    borderRadius: 20,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <View style={{
                        width: 20,
                        height: 20,
                        backgroundColor: WARNA_PRIMARY,
                        borderRadius: 100,

                    }}>
                    </View>
                </View>

                <View style={{
                    width: 50,
                    height: 50,
                    backgroundColor: WARNA_PUTIH,
                    borderRadius: 20,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <View style={{
                        width: 20,
                        height: 20,
                        backgroundColor: WARNA_PRIMARY,
                        borderRadius: 100,

                    }}>
                    </View>
                </View>

                <View style={{
                    width: 50,
                    height: 50,
                    backgroundColor: WARNA_PUTIH,
                    borderRadius: 20,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <View style={{
                        width: 20,
                        height: 20,
                        backgroundColor: WARNA_PRIMARY,
                        borderRadius: 100,

                    }}>
                    </View>
                </View>

                <View style={{
                    width: 50,
                    height: 50,
                    backgroundColor: WARNA_PUTIH,
                    borderRadius: 20,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <View style={{
                        width: 20,
                        height: 20,
                        backgroundColor: WARNA_PRIMARY,
                        borderRadius: 100,

                    }}>
                    </View>
                </View>
            </View> */}

            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
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
                        marginTop: 30
                    }}>
                        <Text style={{
                            paddingVertical: 5,
                            color: WARNA_PUTIH,
                            marginLeft: 20,
                            fontWeight: 'bold'
                        }}>Login</Text>
                        <IconArrow style={{
                            marginLeft: 15
                        }} />
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default LoginSplash

const styles = StyleSheet.create({})