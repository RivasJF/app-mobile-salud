import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function index() {
  return (
    <View style={styles.container}>
      <Button
        title="Soy Chis"
        onPress={() => console.log('¡Hola, soy Chis!')}
      />
      <Link href='/about' style={{color: '#4024b3ff'}}>about</Link>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
