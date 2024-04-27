import { View,Text, SafeAreaView, StyleSheet } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}><Text> Welcome the Gazibos</Text></View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
 
});
