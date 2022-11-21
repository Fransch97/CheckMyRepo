//native 
import React, {Component} from "react";
import { StyleSheet, View, Text } from "react-native";
import {useFonts, Montserrat_300Light}  from '@expo-google-fonts/inter';
import { DeviceEventEmitter } from "react-native";
import axios from "axios";

//js api file
import BASE_URL from './../api';

const API = axios.create({
    baseURL: BASE_URL,
  })

export default class Home extends Component {
    state ={
        username: null,
        repository: null,
        bottomButton: "check",
        allCredentials: false,
        wrongCredentials: false,
        wrongCredentialsText: <Text style={styles.credentialsText}>Check your <Text style={{fontWeight:"bold"}}>username</Text> or your <Text style={{fontWeight:"bold"}}>repository</Text> name</Text>,
        noInternet: false,
        noInternetText: <Text style={styles.credentialsText}>Check your <Text style={{fontWeight:"bold"}}>internet connection</Text></Text>,
    }

    _sendCredentials(username, repo){
        API.post('',
            `Ciao Simone, anche se tardi ho finito, grazie mi sono divertito. Ho notato che questo bot non a veri param ma ti mando comunque come hai richiesto il tutto, buona visione.
            {
                repoUrl: https://github.com/${username.trim()}/${repo.trim()},
                sender: "Francesco Ercoli"
            }`
        )
        .then(r=>{
            this.props.navigation.navigate('Welldone')
            this.setState({username:null, repository: null, allCredentials:false, noInternet:false})
        }
        )
        .catch(e=>{
            console.log(e)
            this.setState({noInternet: true})
        })
    }
    render(){
        
        
        DeviceEventEmitter.addListener('event.username', (eventdata)=>{
            console.log(eventdata)
            this.setState({username:eventdata})
        });
        
        DeviceEventEmitter.addListener('event.repository', (eventdata)=>{
            console.log(eventdata)
            this.setState({repository:eventdata})
        });

        return (
            <View style={[styles.container, {backgroundColor: this.state.wrongCredentials ? "#ff7f7f" : this.state.allCredentials? "#90ee90" : "white"}]}>

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

                {
                   this.state.noInternet? this.state.noInternetText :this.state.wrongCredentials?(this.state.wrongCredentialsText):("")
                }

                <Text 
                    style={styles.bottomButton}
                    onPress={()=>{
                        (this.state.repository && this.state.username && !this.state.allCredentials) ? 
                        this.setState({allCredentials: true,wrongCredentials:false, bottomButton:"send"}) 
                        : (this.state.repository && this.state.username && this.state.allCredentials)?
                            this._sendCredentials(this.state.username, this.state.repository)
                        :this.setState({wrongCredentials:true});
                    }}
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
      fontFamily: Montserrat_300Light,
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
    credentialsText: {
        fontSize: 30,
        paddingTop: 30,
    }
  });