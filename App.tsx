import {StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import ChatListItem from './src/components/ChatListItem';

const chat = {
  id: '1',
  user: {
    image:
      'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/lukas.jpeg',
    name: 'Lukas',
  },
  lastMessage: {
    text: 'Oke',
    createdAt: '07:30',
  },
};

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ChatListItem chat={chat} />
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
