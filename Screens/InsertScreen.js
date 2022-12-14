//native 
import React, {useState} from "react";
import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import {useFonts, Montserrat_300Light}  from '@expo-google-fonts/inter';

const InsertComp = ({ navigation, route }) => {
    const [value, setValue] = useState(null);
    const [placeholder, setPlaceholder] = useState(`Type your ${route.params.placeholder}`);

    return (
        <View style={styles.container}>
            
            <View style={styles.header}>
                
                <TouchableOpacity 
                    onPress={() => navigation.navigate('Home')}
                >
                    <Image 
                        source={require('../src/back.png')} 
                        style={{width: 25, height: 15}}
                    />
                </TouchableOpacity>

                <Text style={styles.title}> {route.params.title} </Text>
            
            </View>
            
            <TextInput style={styles.textInput} 
                placeholder={placeholder} 
                onChangeText={(text)=>{setValue(text)}}
            />

            <Text 
                style={styles.bottomButton} 
                onPress={() => { 
                    navigation.navigate({
                        name :'Home',
                        params:{ screen: `${route.params.screenEmit}`, value: value}
                    })
                }}
            >
                done
            </Text>
        
        </View>
    );
}

export default InsertComp;

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