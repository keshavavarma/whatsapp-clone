import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

export default function Message({message}: any) {
  const isMyMessage = () => {
    return message.user.id === 'u1';
  };

  return (
    <View
      style={[
        styles.contianer,
        {
          backgroundColor: isMyMessage() ? '#DCF8C5' : 'white',
          alignSelf: isMyMessage() ? 'flex-end' : 'flex-start',
        },
      ]}>
      <Text>{message.text}</Text>
      <Text style={styles.time}>
        {Math.abs(dayjs(message.createdAt).diff(dayjs(), 'day')) <= 1
          ? dayjs(message.createdAt).fromNow(true)
          : dayjs(message.createdAt).format('DD/MM/YYYY')}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contianer: {
    margin: 5,
    padding: 10,
    borderRadius: 10,
    maxWidth: '80%',

    // shadows
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
  time: {
    color: 'gray',
    alignSelf: 'flex-end',
  },
  text: {},
});
