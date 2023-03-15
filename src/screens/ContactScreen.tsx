import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import chats from '../../assets/data/chats.json';
import ChatListItem from '../components/ChatListItem';

export default function ContactScreen() {
  return (
    <FlatList
      data={chats}
      renderItem={({item}) => <ChatListItem chat={item} />}
      keyExtractor={item => item.id}
      style={styles.bg}
    />
  );
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: 'white',
  },
});
