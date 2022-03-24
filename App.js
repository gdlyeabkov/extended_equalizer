import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Slider from '@react-native-community/slider'

const Stack = createNativeStackNavigator()

const testActivity = 'MainActivity'

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={testActivity}>
        <Stack.Screen
          name="MainActivity"
          component={MainActivity}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export function MainActivity() {
  
  const [volume, setVolume] = useState(0)

  const getVolume = () => {
    let rawVolume = volume.toFixed(0)
    if (volume < 10) {
      rawVolume = `0${rawVolume}`
    }
    return rawVolume
  }

  return (
    <View
      style={styles.mainActivityContainer}
    >
      <View
        style={styles.mainActivityContainerEqualizer}
      >
        <View
          style={styles.mainActivityContainerEqualizerInfo}
        >
          <Text
            style={styles.mainActivityContainerEqualizerInfoVolumeLabel}
          >
            Громкость
          </Text>
          <Text
            style={styles.mainActivityContainerEqualizerInfoVolumeValue}
          >
            {
              getVolume()
            }
          </Text>
        </View>
      </View>
      <View
        style={{
          transform:[{rotate: "-90deg"}]
        }}
      >
        <Slider
          style={{width: 315, height: 40}}
          ref={(ref) => {
            
          }}
          onValueChange={(value) => {
            setVolume(value)
          }}
          minimumValue={0}
          maximumValue={100}
          minimumTrackTintColor="rgb(150, 150, 150)"
          maximumTrackTintColor="rgb(150, 150, 150)"
        />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  mainActivityContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },
  mainActivityContainerEqualizerInfo: {
    display: 'flex',
    flexDirection: 'row'
  },
  mainActivityContainerEqualizerInfoVolumeLabel: {
    marginLeft: 15
  },
  mainActivityContainerEqualizerInfoVolumeValue: {
    marginLeft: 15,
    color: 'rgb(255, 0, 0)'
  }
})
