import {StyleSheet, TextInput, View} from 'react-native';
import {useState} from 'react';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function InputBox() {
  const [newMessage, setNewMessage] = useState('');

  const onSend = () => {
    console.warn(newMessage);
    setNewMessage('');
  };

  return (
    <View style={styles.container}>
      <AntDesign name="plus" size={20} color="royalblue" />
      <TextInput
        placeholder="type your message..."
        style={styles.input}
        value={newMessage}
        onChangeText={setNewMessage}
      />
      <MaterialIcons
        name="send"
        size={16}
        color="white"
        style={styles.send}
        onPress={onSend}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'whitesmoke',
    padding: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    paddingHorizontal: 10,
    borderRadius: 15,
    borderColor: 'lightgray',
    borderWidth: StyleSheet.hairlineWidth,
    marginHorizontal: 10,
    fontSize: 16,
  },
  send: {
    backgroundColor: 'royalblue',
    padding: 7,
    borderRadius: 15,
    overflow: 'hidden',
  },
});
