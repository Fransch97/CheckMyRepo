//native 
import React, {useState, useEffect} from "react";
import {ActivityIndicator, StyleSheet, View, Text } from "react-native";
import {useFonts, Montserrat_300Light}  from '@expo-google-fonts/inter';

import axios from "axios";
import BASE_URL from './../api';

const API = axios.create({
    baseURL: BASE_URL,
})



const Home = ({navigation, route}) => {
    const [user, setUser] = useState("user");
    const [repo, setRepo] = useState("repo");
    const [username, setUsername] = useState(null);
    const [repository, setRepository] = useState(route.repository);
    const [allCredentials, setAllCredentials] = useState(false);
    const [wrongCredentials, setWrongCredentials] = useState(false);
    const [noInternet, setNoInternet] = useState(false);
    const [bottomButton, setBottomButton] = useState("check");
    const [loader, setLoader] = useState(false);
    
    function reset(){
        setWrongCredentials(false);
        setNoInternet(false);
        setAllCredentials(false);
        setUser("user");
        setRepo("repo");
    }

    function navigateTo(url){
        navigation.navigate(url);
        reset();
    }

    function check(){
        if (repository && username && !allCredentials){
            setAllCredentials(true);
            setWrongCredentials(false); 
            setBottomButton("send");
            setUser("rightUser");
            setRepo("rightRepo");
        } else if (repository && username && allCredentials){
            setLoader(true);
            sendCredentials(username, repository);
        }else{
            setWrongCredentials(true);
            setUser("badUser");
            setRepo("orBadRepo");
        }
    }

    function setCredentials(screen, value){
        if(route.params.screen === "username"){
            const val = "" + route.params.value;
            setUsername(val);
            console.log(route.params.value);
        }else if(route.params.screen === "repository"){
            const val = "" + route.params.value;
            setRepository(val);
            console.log("sfoksof");
        }
    }

    function sendCredentials(username, repo){
        API.post('',
           `
           {
               repoUrl: https://github.com/${username.trim()}/${repo.trim()},
               sender: "Francesco Ercoli"
           }`
       )
       .then(r=>{
            setLoader(false);
            reset();
            navigation.navigate('Welldone');
        })
       .catch(e=>{
            setLoader(false);
            setNoInternet(true);
            setUser("rightUser");
            setRepo("rightRepo");
       })
   }

    useEffect(() => {
        if (route.params?.screen) {
            const response = setCredentials(
                route.params.screen, 
                route.params.value
            )
            console.log(response);
        }
      }, [route.params?.screen]);


    return (
        <View 
            style={[
                styles.container, 
                {
                    backgroundColor: 
                    wrongCredentials || noInternet ? "#ff7f7f" :
                    allCredentials ? "#90ee90" :
                    "white"
                }
            ]}
        >

            <Text style={styles.firstTitle}>
                Set the repository address
            </Text>

            <Text style={styles.githubTitle}>
                github.com
            </Text>

            <Text 
                style={styles.sections}
                onPress={()=>{navigateTo('User')}}
            >
                <Text style={{color:"black"}}>/</Text>
                {user}
            </Text>

            <Text
                style={styles.sections}
                onPress={()=>{navigateTo('Repo')}}
            >
                <Text style={{color:"black"}}>/</Text>
                {repo}
            </Text>

            {
                noInternet ?
                    <Text style={styles.credentialsText}>
                        Check your 
                        <Text style={{fontWeight:"bold"}}> internet connection </Text>
                    </Text>
                :wrongCredentials?
                    <Text style={styles.credentialsText}>
                        Check your 
                        <Text style={{fontWeight:"bold"}}> username </Text> 
                        or your 
                        <Text style={{fontWeight:"bold"}}> repository </Text> 
                        name
                    </Text>
                :""
            }
            {
                loader?
                <ActivityIndicator size="40%" color="black" />
                : ""
            }
            <Text 
                style={styles.bottomButton}
                onPress={()=>{check();}}
            >
                    {bottomButton}
            </Text>

        </View>
    );
}

export default Home;

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