import React from 'react'
import { View, Text, StatusBar, TouchableOpacity, Image } from 'react-native'
import FastImage from 'react-native-fast-image'
import { io } from 'socket.io-client'
const socket = io('http://192.168.0.2:3000')

export default class gamepad extends React.Component {

  state={
    socketconnect: false
  }

  componentDidMount() {
    setTimeout(() => this.setState({ socketconnect: true }), 3000)
    console.log(this.props.route.params.url)
  }

  render() {
    if (!this.state.socketconnect) {
      return (
        <View style={{ flex: 1, heigth: '100%', width: '100%', backgroundColor: 'black', justifyContent: 'center', alignItems: 'center' }}>
          <StatusBar hidden />
          <View style={{borderRadius:25, overflow:'hidden' }}>
          <FastImage
            style={{ width: 200, height: 200 }}
            source={require('../icons/LoadingAnimation.gif')}
            resizeMode={FastImage.resizeMode.contain}
          />
          </View>
        </View>
      )
    }
    else {
      return (
        <View style={{ backgroundColor: 'black' }}>
          <Image blurRadius={5} source={require('../icons/bckg.png')} resizeMode={'cover'} style={{ flex: 1, justifyContent: 'center', position: 'absolute', height: '100%', width: '100%' }} />
          <View style={{ width: '100%', height: '100%', justifyContent: 'center', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', padding: 10, }}>

            <StatusBar hidden />

            <View style={{ width: '50%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>

              <TouchableOpacity onPress={() => socket.emit('tempest', 'upkeypressed')} >
                <View style={{ borderRadius: 10, borderWidth: 1, borderColor: 'black', backgroundColor: 'rgba(255,255,255,.7)', padding: 5, height: 120, width: 120, alignItems: 'center', justifyContent: 'center' }}>
                  <Image source={require('../icons/upkey.png')} style={{ position: 'absolute', flex: 1, width: 115, height: 115, marginLeft: 'auto', marginRight: 'auto', marginTop: 'auto', marginBottom: 'auto' }} />
                </View>
              </TouchableOpacity>


              <View style={{ width: '100%', height: 120, justifyContent: 'space-between', flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => socket.emit('tempest', 'leftkeypressed')} >
                  <View style={{ borderRadius: 10, borderWidth: 1, borderColor: 'black', backgroundColor: 'rgba(255,255,255,.7)', padding: 5, height: 120, width: 120, alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={require('../icons/leftkey.png')} style={{ position: 'absolute', flex: 1, width: 115, height: 115, marginLeft: 'auto', marginRight: 'auto', marginTop: 'auto', marginBottom: 'auto' }} />
                  </View>
                </TouchableOpacity>


                <TouchableOpacity onPress={() => socket.emit('tempest', 'rightkeypressed')} >
                  <View style={{ borderRadius: 10, borderWidth: 1, borderColor: 'black', backgroundColor: 'rgba(255,255,255,.7)', padding: 5, height: 120, width: 120, alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={require('../icons/rightkey.png')} style={{ position: 'absolute', flex: 1, width: 115, height: 115, marginLeft: 'auto', marginRight: 'auto', marginTop: 'auto', marginBottom: 'auto' }} />
                  </View>
                </TouchableOpacity>
              </View>


              <TouchableOpacity onPress={() => socket.emit('tempest', 'downkeypressed')} >
                <View style={{ borderRadius: 10, borderWidth: 1, borderColor: 'black', backgroundColor: 'rgba(255,255,255,.7)', padding: 5, height: 120, width: 120, alignItems: 'center', justifyContent: 'center' }}>
                  <Image source={require('../icons/downkey.png')} style={{ position: 'absolute', flex: 1, width: 115, height: 115, marginLeft: 'auto', marginRight: 'auto', marginTop: 'auto', marginBottom: 'auto' }} />
                </View>
              </TouchableOpacity>

            </View>

            <View style={{ width: '40%', height: '800%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

              <TouchableOpacity onPress={() => socket.emit('tempest', 'Apressed')} >
                <View style={{ height: 120, width: 120, backgroundColor: 'green', borderRadius: 100, margin: 20, borderWidth: 1.5, borderColor: 'white', marginLeft: '50%', justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ color: 'rgba(0,0,0,.5)', fontSize: 60, fontFamily: 'zrnic', fontWeight:'900' }}>
                    A
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => socket.emit('tempest', 'Bpressed')} >
                <View style={{ height: 120, width: 120, backgroundColor: 'yellow', borderRadius: 100, margin: 20, borderWidth: 1.5, borderColor: 'white', marginRight: '50%', justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ color: 'rgba(0,0,0,.5)', fontSize: 60, fontFamily:'zrnic', fontWeight:'900' }}>
                    B
                  </Text>
                </View>
              </TouchableOpacity>

            </View>

          </View>
        </View>
      )
    }
  }
}