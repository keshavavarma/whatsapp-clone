import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import bgImage from '../../assets/images/BG.png';
import messages from '../../assets/data/messages.json';
import Message from '../components/Message';
import InputBox from '../components/InputBox';

export default function ChatScreen() {
  const route = useRoute();
  const navigation = useNavigation();

  interface Params {
    id?: string;
    name?: string;
  }

  const params: Params = route.params as object;

  useEffect(() => {
    navigation.setOptions({title: params.name});
  }, [params.name]);

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
