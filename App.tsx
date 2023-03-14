import {StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import ChatListScreen from './src/screens/ChatListScreen';
import ChatScreen from './src/screens/ChatScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <ChatListScreen /> */}
      <ChatScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
  },
});
