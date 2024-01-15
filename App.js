import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';

// Import komponen Card jika Anda ingin menggunakannya
// import { Card } from 'react-native-paper';

// Import komponen AssetExample jika Anda ingin menggunakannya
// import AssetExample from './components/AssetExample';

export default function App() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={require('./assets/kirana1.jpeg')}
      />
      <Text style={styles.title}>Kirana Putri Mahardhika</Text>
      <Text style={styles.subTitle}>
        Saya adalah pelajar SMK Telkom Purwokerto jurusan RPL yang tertarik di
        bidang IT terutama pada bagian UI/UX Designer
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => Alert.alert('hallo')}>
        <Text style={styles.textButton}>Contact Me</Text>
      </TouchableOpacity>
      <Text style={styles.projectTitle}>My Recent Project</Text>
      <Image
        style={styles.projecfoto2}
        source={require('./assets/arisan.png')}
      />
    <Image
        style={styles.projecfoto2}
        source={require('./assets/arisan1.png')}
      />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#B3A492",
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: 'white',
    fontSize: 20, 
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 7
  },
  subTitle: {
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center', 
    paddingBottom: 10,
    textAlign: 'center',
    marginBottom: 10
  },
  avatar: {
    width: 156,
    height: 156,
    borderRadius: 300,
  },
   button: {
    backgroundColor: '#ffff',
    width: 125,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
      textButton: {
        fontWeight: 'bold',
        color: 'blue'
      },
  projectTitle: {
    color: 'white',
    fontSize: 25, 
    fontWeight: 'bold',
    marginTop: 20,
  },
   projectPic: {
    width: 300,
    height: 300,
    rectangle: 300,
    marginTop: 20,
    borderRadius: 20,
  },
   projecfoto2: {
    width: 300,
    height: 300,
    rectangle: 300,
    marginTop: 20,
   },
});
