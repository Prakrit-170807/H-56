import * as React from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native'
import { Audio } from "expo-av"

export default class SONG extends React.Component {
    Cheer = async () => {
        await Audio.Sound.createAsync(
            {
                uri: "https://freesound.org/data/previews/512/512929_7928407-lq.mp3"
            }
            ,
            {
                shouldPlay: true
            }
        )
    }
    Rock = async () => {
        await Audio.Sound.createAsync(
            {
                uri: "https://freesound.org/data/previews/69/69999_872132-lq.mp3"
            }
            ,
            {
                shouldPlay: true
            }
        )
    }
    Hyper = async () => {
        await Audio.Sound.createAsync(
            {
                uri: "https://freesound.org/data/previews/69/69999_872132-lq.mp3"
            }
            ,
            {
                shouldPlay: true
            }
        )
    }
    Bass = async () => {
        await Audio.Sound.createAsync(
            {
                uri: "https://freesound.org/data/previews/524/524313_6714882-lq"
            }
            ,
            {
                shouldPlay: true
            }
        )
    }
    render() {
        return (
            <View>
                <TouchableOpacity onPress={this.Cheer} style={{ marginTop: 50, width: 390, height: 70, borderWidth: 2, borderRadius: 100, borderColor: "#bfd7ea", backgroundColor: "#bfd7ea", justifyContent: "center", }}>
                    <Text style={{ marginLeft: 20, textAlign: "Left", fontSize: 30 }}>
                        ▶   Cheerfull
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        Audio.setIsEnabledAsync(false)
                    }}
                    style={{ marginTop: -70, marginLeft: 320, width: 70, height: 70, borderWidth: 2, borderRadius: 100, borderColor: "#bfd7ea", backgroundColor: "#bfd7ea", justifyContent: "center", alignContent: "center", shadowColor: 'rgba(0,0,0, .2)', shadowOffset: { height: 0, width: -5 }, shadowOpacity: 1, shadowRadius: 1, }}>
                    <Text style={{ marginLeft: 12, textAlign: "Left", fontSize: 30, Color: "red" }}> ■ </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.Rock} style={{ marginTop: 50, width: 390, height: 70, borderWidth: 2, borderRadius: 100, borderColor: "#087e8b", backgroundColor: "#087e8b", justifyContent: "center" }}>
                    <Text style={{ marginLeft: 20, textAlign: "Left", fontSize: 30 }}>
                        ▶   Rock
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        Audio.setIsEnabledAsync(false)
                    }}
                    style={{ marginTop: -70, marginLeft: 320, width: 70, height: 70, borderWidth: 2, borderRadius: 100, borderColor: "#087e8b", backgroundColor: "#087e8b", justifyContent: "center", alignContent: "center", shadowColor: 'rgba(0,0,0, .2)', shadowOffset: { height: 0, width: -5 }, shadowOpacity: 1, shadowRadius: 1, }}>
                    <Text style={{ marginLeft: 12, textAlign: "Left", fontSize: 30, Color: "red" }}> ■ </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.Hyper} style={{ marginTop: 50, width: 390, height: 70, borderWidth: 2, borderRadius: 100, borderColor: "#ff5a5f", backgroundColor: "#ff5a5f", justifyContent: "center" }}>
                    <Text style={{ marginLeft: 20, textAlign: "Left", fontSize: 30 }}>
                        ▶   Hyper
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        Audio.setIsEnabledAsync(false)
                    }}
                    style={{ marginTop: -70, marginLeft: 320, width: 70, height: 70, borderWidth: 2, borderRadius: 100, borderColor: "#ff5a5f", backgroundColor: "#ff5a5f", justifyContent: "center", alignContent: "center", shadowColor: 'rgba(0,0,0, .2)', shadowOffset: { height: 0, width: -5 }, shadowOpacity: 1, shadowRadius: 1, }}>
                    <Text style={{ marginLeft: 12, textAlign: "Left", fontSize: 30, Color: "red" }}> ■ </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.Bass} style={{ marginTop: 50, marginBottom: 290, width: 390, height: 70, borderWidth: 2, borderRadius: 100, borderColor: "#F4D58D", backgroundColor: "#F4D58D", justifyContent: "center" }}>
                    <Text style={{ marginLeft: 20, textAlign: "Left", fontSize: 30 }}>
                        ▶   Bass
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        Audio.setIsEnabledAsync(false)
                    }}
                    style={{ marginTop: -360, marginLeft: 320, width: 70, height: 70, borderWidth: 2, borderRadius: 100, borderColor: "#F4D58D", backgroundColor: "#F4D58D", justifyContent: "center", alignContent: "center", shadowColor: 'rgba(0,0,0, .2)', shadowOffset: { height: 0, width: -5 }, shadowOpacity: 1, shadowRadius: 1, }}>
                    <Text style={{ marginLeft: 12, textAlign: "Left", fontSize: 30, Color: "red" }}> ■ </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={
                    () => {
                        Audio.setIsEnabledAsync(true)
                    }} style={{ marginTop: 50, marginBottom: 290, width: 380, height: 70, borderWidth: 2, borderRadius: 100, borderColor: "#FFFFFF", backgroundColor: "#0b3954", justifyContent: "center", alignSelf: "center", shadowColor: 'rgba(255,255,255, .9)', shadowOffset: { height: 0, width: 0 }, shadowOpacity: 3, shadowRadius: 3, }}>
                    <Text style={{ marginLeft: 12, textAlign: "center", fontSize: 30, color: "white", shadowColor: 'rgba(255,255,255, .9)', shadowOffset: { height: 0, width: 0 }, shadowOpacity: 3, shadowRadius: 3, }}>Reset Aural Feedback</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ marginBottom: 7000 }}>
                </TouchableOpacity>


            </View>
        )
    }
}