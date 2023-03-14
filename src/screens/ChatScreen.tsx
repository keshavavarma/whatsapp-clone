import React from 'react';
import {StyleSheet, Text, FlatList, ImageBackground} from 'react-native';
import bgImage from '../../assets/images/BG.png';
import messages from '../../assets/data/messages.json';
import Message from '../components/Message';

export default function ChatScreen() {
  return (
    <ImageBackground source={bgImage} style={styles.bg}>
      <FlatList
        data={messages}
        renderItem={({item}) => <Message message={item} />}
        inverted
        style={styles.list}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
  list: {
    padding: 10,
  },
});
