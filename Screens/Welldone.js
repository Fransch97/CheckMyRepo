//native 
import React from "react";
import { StyleSheet, View, Text} from "react-native";
import {useFonts, Montserrat_300Light}  from '@expo-google-fonts/inter';

const Welldone = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>All done!</Text>
            <Text style={styles.title}>Repository sent.</Text>
            <Text 
                style={styles.bottomButton}
                onPress={() => {
                    navigation.navigate('Home')
                }}
            >
                cool
            </Text>
        </View>
    );
}

export default Welldone;

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