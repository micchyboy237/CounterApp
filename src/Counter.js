import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

import CounterActions, {CounterSelectors} from './CounterRedux';

const Counter = () => {
  const count = useSelector(state => CounterSelectors.getCount(state));
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, styles.decButton]}
        onPress={() => dispatch(CounterActions.decrement())}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
      <Text style={styles.count}>{count}</Text>
      <TouchableOpacity
        style={[styles.button, styles.incButton]}
        onPress={() => dispatch(CounterActions.increment())}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  incButton: {
    backgroundColor: 'green',
  },
  decButton: {
    backgroundColor: 'red',
  },
  buttonText: {
    fontSize: 40,
    lineHeight: 40,
    letterSpacing: 0,
    color: 'white',
  },
  count: {
    marginHorizontal: 20,
    fontSize: 18,
  },
});

export default Counter;
