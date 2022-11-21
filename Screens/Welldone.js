//native 
import React, {Component} from "react";
import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import {useFonts, Montserrat_300Light}  from '@expo-google-fonts/inter';

export default class Repo extends Component{
    state ={
        repository: null,
        bottomButton: "Back",
    }
    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.title}>All done!</Text>
                <Text style={styles.title}>Repository dent.</Text>
                <Text 
                    style={styles.bottomButton}
                    onPress={() => {
                        this.props.navigation.navigate('Home')
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
      fontFamily: Montserrat_300Light,
      alignItems:"center",
      paddingVertical:140,
    },
    title:{
        fontWeight:"bold", 
        fontSize:40,
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