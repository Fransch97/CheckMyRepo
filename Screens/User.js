//native 
import React, {Component} from "react";
import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import {useFonts, Montserrat_300Light}  from '@expo-google-fonts/inter';
import { DeviceEventEmitter } from "react-native";

export default class Repo extends Component{
    state ={
        username: null,
        bottomButton: "Done",
    }
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.header}
                >
                    <TouchableOpacity  
                        onPress={() => this.props.navigation.navigate('Home')}
                    >
                        <Image 
                            source={require('../src/back.png')} 
                            style={{width: 25, height: 15}}
                        />
                    </TouchableOpacity>
                    <Text style={styles.title}
                    >
                        user
                    </Text>
                </View>
                
                <TextInput
                    style={styles.textInput}
                    placeholder="Type youre repository name"
                    onChangeText={(text)=>{
                        this.setState({username:text}); 
                        console.log(this.state.username);
                    }}
                >
                </TextInput>
    
                <Text 
                    style={styles.bottomButton}
                    onPress={() => {
                        DeviceEventEmitter.emit('event.username',  this.state.username);
                        this.props.navigation.navigate('Home')}
                    }
                >
                    {this.state.bottomButton}
                </Text>
            
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingHorizontal: 40,
      paddingVertical: 60,
      fontFamily: Montserrat_300Light
    },
    header:{
        display:"flex",
        paddingTop: 10,
        paddingBottom: 40,
        flexDirection:'row',
        alignItems:'center'
    },
    title:{
        textTransform: 'uppercase', 
        fontWeight:"bold", 
        fontSize:25,
        paddingLeft:40
    },
    textInput:{
        fontSize:15,
        borderBottomColor:"black",
        borderBottomWidth: 2,
        paddingVertical: 5
    },
    bottomButton: {
        textTransform: 'uppercase', 
        position:"absolute",
        bottom:"5%",
        right:"10%",
        fontWeight: "bold",
        fontSize: 30,
    },
});