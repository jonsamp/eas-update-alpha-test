import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import JJImage from './team.jonathan.png';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Image
        source={JJImage}
        style={{
          height: 200,
          width: 200,
          resizeMode: 'contain',
          marginBottom: 32,
        }}
      /> */}
      <Text style={{ fontSize: 60, fontWeight: 'bold', textAlign: 'center' }}>
        👋
      </Text>
      <Text style={{ fontSize: 60, fontWeight: 'bold', textAlign: 'center' }}>
        Hello internal distribution
      </Text>
      <StatusBar style='auto' />
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
