//native 
import React, {Component} from "react";
import { StyleSheet, View, Text } from "react-native";
import {useFonts, Montserrat_300Light}  from '@expo-google-fonts/inter';
import { DeviceEventEmitter } from "react-native";

export default class Home extends Component {
    state ={
        username: null,
        repository: null,
        bottomButton: "check"
    }

    render(){
        
        DeviceEventEmitter.addListener('event.username', (eventdata)=>{
            console.log(eventdata)
            this.setState({username:eventdata})
            console.log(this.state.username)
        });
        
        DeviceEventEmitter.addListener('event.repository', (eventdata)=>{
            console.log(eventdata)
            this.setState({repository:eventdata})
            console.log(this.state.repository)
        });

        return (
            <View style={styles.container}>

                <Text style={styles.firstTitle}>
                    Set the repository address
                </Text>

                <Text style={styles.githubTitle}>
                    github.com
                </Text>

                <Text 
                    style={styles.sections}
                    onPress={()=>{this.props.navigation.navigate('User')}}
                >
                    <Text style={{color:"black"}}>/</Text>
                    user
                </Text>

                <Text
                    style={styles.sections}
                    onPress={()=>{this.props.navigation.navigate('Repo')}}
                >
                    <Text style={{color:"black"}}>/</Text>
                    repo
                </Text>

                <Text 
                    style={styles.bottomButton}
                    onPress={()=>{
                        console.log(this.state.repository); 
                        console.log(this.state.username);}}
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
      fontFamily: Montserrat_300Light
    },
    firstTitle:{
        paddingTop: 40,
        paddingBottom: 20,
        fontWeight: "bold",
        fontSize:20,
    },
    githubTitle:{
        fontWeight: "400",
        fontSize:40,
        paddingBottom:15,
    
    },
    sections:{
        color:"grey",
        fontSize:40,
    },
    bottomButton: {
        textTransform: "uppercase",
        position:"absolute",
        bottom:"5%",
        right:"10%",
        fontWeight: "bold",
        fontSize: 30,
    },
  });