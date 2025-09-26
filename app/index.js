import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native';

export default function index() {
  const [input, setInput] = useState("");

  function imprrimirDatos() {
    //enviar a servidor
    console.log(input);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hola soy chis el gay</Text>
      <Link href='/about' style={{color: '#4024b3ff'}}>about</Link>

      <TextInput onChange={(e) => setInput(e.nativeEvent.text)} >
        <Text style={styles.text}></Text>
      </TextInput>
      
       <TouchableOpacity style={styles.button} onPress={imprrimirDatos}>
          <Text>Press Here</Text>
        </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  } 
});
