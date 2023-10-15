import React, {useState} from 'react';
import {View, Switch, StyleSheet} from 'react-native';
import Welcome from './sreens/Welcome';

const App = () => {

  

  return (
    <View style={styles.container}>
      <Welcome/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;