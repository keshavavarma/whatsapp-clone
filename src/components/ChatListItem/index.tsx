import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';

type ChatType = {
  chat: {
    id: string;
    user: {
      image: string;
      name: string;
    };
    lastMessage: {
      text: string;
      createdAt: string;
    };
  };
};

const ChatListItem = ({chat}: ChatType) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: chat.user.image,
        }}
        style={styles.image}
      />
      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={styles.name} numberOfLines={1}>
            {chat.user.name}
          </Text>
          <Text style={styles.subTitle}>{chat.lastMessage.createdAt}</Text>
        </View>
        <Text style={styles.subTitle} numberOfLines={2}>
          {chat.lastMessage.text}
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 5,
    height: 70,
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  content: {
    flex: 1,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'lightgrey',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  name: {
    flex: 1,
    fontWeight: 'bold',
  },
  subTitle: {
    color: 'gray',
  },
});
export default ChatListItem;
