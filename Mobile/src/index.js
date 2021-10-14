import React from 'react'
import { View, Text, StatusBar, TouchableOpacity } from 'react-native'
import { io } from 'socket.io-client'

const SERVER_ADDRESS = 'http://192.168.0.2:3000'

const socket = io(SERVER_ADDRESS)

socket.on('connect', () => {

    console.log('connect')
})



export default class App extends React.Component {

    componentDidMount() {
    }

    render() {
        return (
            <View style={{ backgroundColor: 'white', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <StatusBar hidden />
                <TouchableOpacity onPress={() => socket.emit('tempest', 'tempest family')} style={{ backgroundColor: 'rgba(0, 0, 69, .4)', height: 50, width: '98%', borderRadius: 8, marginLeft: 'auto', marginRight: 'auto', justifyContent: 'center', alignItems: 'center' }}>
                    <View >
                        <Text>
                            SEND MESSAGE
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}