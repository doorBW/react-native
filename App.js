import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.redBox}>
          <View style={styles.whiteBox}/>
          <View style={styles.yellowBox}/>
          <View style={styles.whiteBox}/>
        </View>
        <View style={styles.blackBox}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  redBox: {
    backgroundColor: 'red',
    flex: 6,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  blackBox: {
    backgroundColor: 'black',
    flex: 1
  },
  whiteBox: {
    backgroundColor: 'white',
    height: 100,
    width: 100
  },
  yellowBox: {
    backgroundColor: 'yellow',
    height: 100,
    width: 100
  }
});
