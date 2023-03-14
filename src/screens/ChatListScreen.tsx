import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import chats from '../../assets/data/chats.json';
import ChatListItem from '../components/ChatListItem';

export default function ChatListScreen() {
  return (
    <FlatList
      data={chats}
      renderItem={({item}) => <ChatListItem chat={item} />}
      keyExtractor={item => item.id}
    />
  );
}

const styles = StyleSheet.create({});
