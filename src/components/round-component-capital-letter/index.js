import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const RoundCapitalLetter = props => {
  const colors = ['red', 'blue', 'yellow', 'green'];

  const {text, size, textColor, textSize, colorsList} = props;

  const styled = {
    height: size,
    width: size,
    backgroundColor: colorsList
      ? colorsList[Math.floor(Math.random() * colorsList.length)]
      : colors[Math.floor(Math.random() * colors.length)],
  };

  const textStyle = {
    color: textColor ? textColor : 'white',
    fontSize: textSize ? textSize : 12,
  };

  return (
    <View style={[styles.mainContainer, styled]}>
      <Text style={textStyle}>{text.slice(0, 1).toUpperCase()}</Text>
    </View>
  );
};

export default RoundCapitalLetter;

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
});
