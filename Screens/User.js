//native 
import { StyleSheet, View, Text, TextInput } from "react-native";
import {useFonts, Montserrat_300Light} from "@expo-google-fonts/dev";

export default function App() {
    return (
        <View style={styles.container}>
            
            <Text>
                Repository
            </Text>
            
            <TextInput
                placeholder="Type youre repository name"
            >
            </TextInput>
        
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingHorizontal: 40,
      paddingVertical: 60
    },
  });