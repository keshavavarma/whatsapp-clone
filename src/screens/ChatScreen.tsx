import React from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import bgImage from '../../assets/images/BG.png';
import messages from '../../assets/data/messages.json';
import Message from '../components/Message';
import InputBox from '../components/InputBox';

export default function ChatScreen() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.bg}>
      <ImageBackground source={bgImage} style={styles.bg}>
        <FlatList
          data={messages}
          renderItem={({item}) => <Message message={item} />}
          inverted
          style={styles.list}
        />
        <InputBox />
      </ImageBackground>
    </KeyboardAvoidingView>
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
