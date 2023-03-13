import {StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import ChatListItem from './src/components/ChatListItem';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ChatListItem />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});
