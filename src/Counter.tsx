import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {addition, substraction} from './store/actions';

const Counter = () => {
  const data = useSelector((state: {counter: number}) => state.counter);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Button
        title={'Add'}
        onPress={() => {
          dispatch(addition());
        }}></Button>
      <Text> {data}</Text>
      <Button
        title="Subtract"
        onPress={() => {
          dispatch(substraction());
        }}></Button>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
