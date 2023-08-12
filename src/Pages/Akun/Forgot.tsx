import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { WARNA_CONTENT, WARNA_DISABLE, WARNA_PRIMARY, WARNA_PUTIH } from '../../utils'
import { IconChecklist, IconDoctor, IconFacebook, IconForgotEMail, IconForgotSMS, IconGoogle, IconHome, IconLogoForgot, IconNonChecklist, LeftArrow } from 'assets'


const Forgot = ({
    navigation
}) => {
    return (

        <View style={{
            backgroundColor: '#d9d9d9',
            flex: 1
        }}>
            <LeftArrow style={{
                marginTop: 60,
                left: 30
            }} />
            <View style={{ alignItems: 'center' }}>
                <IconLogoForgot style={{
                    marginTop: -25
                }} />
            </View>

            <View style={{
                height: 500,
                width: '100%',
                backgroundColor: WARNA_PRIMARY,
                marginTop: -20,
                borderTopRightRadius: 40,
                borderTopLeftRadius: 40
            }}>
                <View style={{
                    backgroundColor: '#f5f5f5',
                    marginTop: -15,
                    borderRadius: 27,
                    height: 465
                }}>
                    <Text style={{
                        paddingLeft: 30,
                        fontWeight: '900',
                        fontSize: 20,
                        marginTop: 25
                    }}>Forgot Password</Text>
                    <Text style={{
                        paddingLeft: 30,
                        fontSize: 12,
                        marginTop: 3,
                        color: WARNA_CONTENT
                    }}>
                        Please select the option to provide {"\n"}the code to be sent.
                    </Text>

                    <View style={{
                        marginTop: 20
                    }}>
                        <TouchableOpacity onPress={() => navigation.navigate('ForgotRecoveryEmail')}>
                            <View style={{
                                backgroundColor: WARNA_PUTIH,
                                width: 315,
                                height: 88,
                                marginLeft: 23,
                                borderRadius: 30,
                                marginTop: 5,
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 12,
                                },
                                shadowOpacity: 0.58,
                                shadowRadius: 16.00,

                                elevation: 24,
                            }}>
                                <View style={{
                                    justifyContent: 'flex-end',
                                    alignItems: 'flex-end',
                                    marginTop: 10,
                                    marginRight: 20
                                }}>
                                    <IconChecklist />
                                </View>
                                <View style={{
                                    flexDirection: 'row',
                                    marginTop: -10
                                }}>

                                    <View style={{
                                        width: 38,
                                        height: 38,
                                        backgroundColor: '#e0e2f3',
                                        borderRadius: 100,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        marginLeft: 20,
                                        marginTop: 3
                                    }}>
                                        <IconForgotEMail />
                                    </View>

                                    <Text style={{
                                        fontWeight: '900',
                                        paddingLeft: 15,
                                        paddingTop: 3
                                    }}>Reset via Email</Text>
                                </View>
                                <Text style={{
                                    color: WARNA_CONTENT,
                                    fontSize: 11,
                                    paddingLeft: 72,
                                    marginTop: -14
                                }}>The system will send a code via your email.</Text>

                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('RecoverySMS')}>
                            <View style={{
                                backgroundColor: WARNA_PUTIH,
                                width: 315,
                                height: 88,
                                marginLeft: 23,
                                borderRadius: 30,
                                marginTop: 20,
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 1,
                                },
                                shadowOpacity: 0.22,
                                shadowRadius: 2.22,

                                elevation: 3,
                            }}>
                                <View style={{
                                    flexDirection: 'row',
                                    marginTop: 20
                                }}>
                                    <View style={{
                                        width: 38,
                                        height: 38,
                                        backgroundColor: '#e0e2f3',
                                        borderRadius: 100,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        marginLeft: 20,
                                        marginTop: 3
                                    }}>
                                        <IconForgotSMS />
                                    </View>

                                    <Text style={{
                                        fontWeight: '900',
                                        paddingLeft: 15,
                                        paddingTop: 3
                                    }}>Reset via SMS</Text>
                                </View>
                                <Text style={{
                                    color: WARNA_CONTENT,
                                    fontSize: 11,
                                    paddingLeft: 72,
                                    marginTop: -14
                                }}>The system will send a code via your SMS.</Text>
                            </View>
                        </TouchableOpacity>

                        <View style={{
                            flexDirection: 'row',
                            marginLeft: 24,
                            marginTop: 15
                        }}>
                            <IconChecklist />
                            <Text style={{
                                color: WARNA_PRIMARY,
                                fontSize: 11,
                                paddingLeft: 7
                            }}>
                                You must understand the rules that have been applied and{"\n"}must live them.
                            </Text>
                        </View>

                        <View style={{
                            backgroundColor: WARNA_PRIMARY,
                            width: 315,
                            height: 48,
                            marginLeft: 23,
                            borderRadius: 20,
                            marginTop: 50,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Text style={{
                                color: WARNA_PUTIH,
                                fontWeight: '900'
                            }}>Select Options</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View >

    )
}

export default Forgot
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({})