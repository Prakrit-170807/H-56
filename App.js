import * as React from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native'
import { Audio } from "expo-av"
import SONG from "./SOUND"


export default class App extends React.Component {
  render() {
    return (
      <View style={{ backgroundColor: "#0b3954" }}>
        <Text style={{ textAlign: "center", marginTop: 50, fontSize: 40, color: "white", shadowColor: 'rgba(255,255,255, .9)', shadowOffset: { height: 0, width: 0 }, shadowOpacity: 3, shadowRadius: 3, }}>Aural Blender </Text>
        <SONG />
      </View>
    )
  }
}