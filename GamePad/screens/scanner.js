import React from 'react'
import { View, StatusBar, ScrollView, Dimensions } from 'react-native'
import QRCodeScanner from 'react-native-qrcode-scanner'
import Orientation from 'react-native-orientation-locker'

export default class scanner extends React.Component {


    state = {
        permissions: false,
    }

    onSuccess = async (e) => {
        this.props.navigation.navigate('gamepad', { url: e.data })
    }

    componentDidMount() {
        Orientation.lockToPortrait()
    }

    render() {
        return (
            <View style={{ backgroundColor: '#1c1c1c', heigth: '100%', width: '100%', flex:1 }}>
                <ScrollView >
                    <StatusBar hidden />
                         <View style={{ transform: [{ rotate: '90deg' }], marginTop: (Dimensions.get('screen').height-Dimensions.get('screen').width*.8)/2 }}>
                            <QRCodeScanner
                                reactivate={true}
                                onRead={this.onSuccess}
                                showMarker={true}
                                checkAndroid6Permissions={true}
                                cameraStyle={{ height:Dimensions.get('screen').width*.8, width: Dimensions.get('screen').width*.8, borderWidth: 5, borderColor: 'red', borderRadius: 10, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', marginRight: 'auto', marginLeft: 'auto' }}
                            />
                        </View>
                </ScrollView>
            </View>
        )
    }
}