import {StyleSheet, SafeAreaView, View} from 'react-native';
import React from 'react';
import Navigator from './src/navigation';
import ChatListScreen from './src/screens/ChatListScreen';
import ChatScreen from './src/screens/ChatScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Navigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
  },
  text: {
    fontSize: 24,
  },
});
