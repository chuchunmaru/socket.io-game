import React from 'react'
import { View, StatusBar } from 'react-native'
import QRCodeScanner from 'react-native-qrcode-scanner'

export default class scanner extends React.Component {

    onSuccess = (e) => {
        this.props.navigation.navigate('gamepad', { url: e.data })
    }

    render() {
        return (
            <View style={{ backgroundColor: 'black', heigth: '100%', flex: 1 }}>
                <StatusBar hidden />
                <QRCodeScanner
                    reactivate={true}
                    onRead={this.onSuccess}
                    showMarker={true}
                    checkAndroid6Permissions={true}
                    cameraStyle={{ height: '100%', width: '100%' }}
                    style={{ position: 'absolute' }}
                />
            </View>
        )
    }
}