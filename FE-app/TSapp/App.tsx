import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Canvas } from "@react-three/fiber"

import CustomGlobe from './components/customGlobe';
import Landing from './components/landing';

export default function App() {
  return (
    <>
      <View>
        <Landing/>
      </View>
      <Canvas>
        <CustomGlobe/>
      </Canvas>
    </>
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
