import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import scanner from '../screens/scanner'
import gamepad from '../screens/gamepad'

const Stack = createStackNavigator()
export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={'scanner'}>
          <Stack.Screen name={'scanner'} component={scanner} />
          <Stack.Screen name={'gamepad'} component={gamepad} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}