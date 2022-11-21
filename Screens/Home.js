//native 
import { StyleSheet, View, Text } from "react-native";

export default function App() {
    return (
      <View style={styles.container}>
        <Text>
            Set the repository address
        </Text>
        <Text>
            github.com
        </Text>
        <Text>
            /User
        </Text>
        <Text>
            /Repo
        </Text>
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