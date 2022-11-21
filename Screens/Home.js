//native 
import React, {Component} from "react";{}
import { StyleSheet, View, Text } from "react-native";
import {useFonts, Montserrat_300Light}  from '@expo-google-fonts/inter';

export default class Home extends Component {
    render(){
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
                User
            </Text>
            <Text
                style={styles.sections}
                onPress={()=>{this.props.navigation.navigate('Repository')}}
            >
                <Text style={{color:"black"}}>/</Text>
                Repo
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
        fontSize:20
    },
    githubTitle:{
        fontWeight: "400",
        fontSize:40,
        paddingBottom:15,
    
    },
    sections:{
        color:"grey",
        fontSize:40,
    }
  });