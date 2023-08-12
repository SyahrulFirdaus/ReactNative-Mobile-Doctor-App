import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { WARNA_CONTENT, WARNA_DISABLE, WARNA_PRIMARY, WARNA_PUTIH } from '../../utils'
import { IconChecklist, IconDoctor, IconFacebook, IconForgotEMail, IconForgotSMS, IconGoogle, IconHome, IconNonChecklist, IconPasswordRecovery, LeftArrow } from 'assets'


const ForgotRecoveryEmail = ({
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
                <IconPasswordRecovery style={{
                    marginTop: -20
                }} />
            </View>

            <View style={{
                height: 500,
                width: '100%',
                backgroundColor: WARNA_PRIMARY,
                marginTop: -10,
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
                        marginTop: 35
                    }}>Password Recovery</Text>
                    <Text style={{
                        paddingLeft: 30,
                        fontSize: 12,
                        marginTop: 3,
                        color: WARNA_CONTENT
                    }}>
                        We will send a code to the email you{"\n"}provided.
                    </Text>

                    <View style={{
                        marginTop: 20
                    }}>
                        <Text style={{
                            paddingLeft: 30
                        }}>Email Address</Text>
                        <View style={{
                            backgroundColor: WARNA_PUTIH,
                            width: 315,
                            height: 50,
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
                            justifyContent: 'center'
                        }}>
                            <View style={{
                                flexDirection: 'row'
                            }}>
                                <View style={{
                                    flexDirection: 'row',
                                    marginTop: -10
                                }}>
                                    <Text style={{
                                        color: WARNA_CONTENT,
                                        paddingLeft: 15,
                                        paddingTop: 10
                                    }}>Syahrulfirdaus781@gmail.com</Text>
                                </View>
                                <IconChecklist style={{
                                    marginLeft: 70
                                }} />
                            </View>


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
                            }}>Send Link Recovery</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>

    )
}

export default ForgotRecoveryEmail
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({})