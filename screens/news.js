import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const News = () => {
  return (
    <>
      <View style={styles.main__container}>
        <Ionicons
          style={styles.arrow__back}
          name="chevron-back-outline"
        ></Ionicons>
        <Text style={styles.news__head}>NEWS PAGE</Text>
        <Ionicons style={styles.menus} name="menu-outline"></Ionicons>
      </View>
      <View
        style={{
          borderBottomColor: 'rgba(122, 122, 122, 0.3)',
          borderBottomWidth: 1,
          marginTop: 20,
          marginHorizontal: 20,
        }}
      />
      <View style={styles.highlights}>
        <Ionicons style={styles.coin} name="logo-bitcoin"></Ionicons>
        <Ionicons
          style={[styles.coin1, styles.shadowProp]}
          name="logo-bitcoin"
        ></Ionicons>
        <Ionicons style={styles.coin} name="logo-bitcoin"></Ionicons>
      </View>
    </>
  );
};
export default News;

const styles = StyleSheet.create({
  main__container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  news__head: {
    textAlign: 'center',
    marginTop: 27,
    fontSize: 20,
    fontWeight: '400',
    color: '#8D8D8D',
  },
  arrow__back: {
    marginTop: 22,
    marginRight: 50,
    color: 'white',
    fontSize: 18,
    padding: 7,
    backgroundColor: 'rgba(203, 20, 97, 0.6)',
    borderRadius: 11.2196,
  },
  menus: {
    marginTop: 22,
    marginLeft: 50,
    color: 'white',
    fontSize: 18,
    padding: 7,
    backgroundColor: 'rgba(203, 20, 97, 0.6)',
    borderRadius: 11.2196,
  },
  highlights: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  coin1: {
    fontSize: 40,
    borderRadius: 20,
    color: '#D596BB',
    padding: 35,
    backgroundColor: 'rgba(223, 113, 160, 0.1)',
  },
  coin: {
    fontSize: 40,
    borderRadius: 20,
    color: '#D596BB',
    padding: 35,
    backgroundColor: 'rgba(223, 113, 160, 0.1)',
  },
});
