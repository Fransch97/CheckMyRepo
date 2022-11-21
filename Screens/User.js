//native 
import { StyleSheet, View, Text } from "react-native";

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