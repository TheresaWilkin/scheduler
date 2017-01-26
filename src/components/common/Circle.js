import React from 'react';
import { View } from 'react-native';

const Circle = (props) => {
  return (
    <View style={[styles.circleStyle, props.style]} />
  );
};

const styles = {
  circleStyle: {
    borderRadius: 40,
    width: 25,
    height: 10,
    backgroundColor: 'black',
    alignSelf: 'center'
  }
};

export { Circle };
