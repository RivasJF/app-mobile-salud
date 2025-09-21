import { Link } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'

export default function about(){
  return (
    <View style={styles.container}>
      <Text>about</Text>
      <Link href='/' style={{color: '#4024b3ff'}}>home</Link>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})