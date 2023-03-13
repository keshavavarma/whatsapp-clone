import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';

const ChatListItem = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/lukas.jpeg',
        }}
        style={styles.image}
      />
      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={styles.name} numberOfLines={1}>
            Lukas
          </Text>
          <Text style={styles.subTitle}>8:30</Text>
        </View>
        <Text style={styles.subTitle} numberOfLines={2}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          assumenda et laudantium, magnam culpa dolor dignissimos ab illum
          delectus a repellat repudiandae tenetur rem, sequi architecto sunt
          ducimus, voluptate rerum!
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
