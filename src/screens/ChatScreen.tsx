import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import chats from '../../assets/data/chats.json';
import ChatListItem from '../components/ChatListItem';

export default function ChatScreen() {
  return (
    <FlatList
      data={chats}
      renderItem={({item}) => <ChatListItem chat={item} />}
    />
  );
}

const styles = StyleSheet.create({});
