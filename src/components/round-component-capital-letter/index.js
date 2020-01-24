import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export const RoundCapitalLetter = props => {
  const colors = ['red', 'blue', 'yellow', 'green'];

  const {
    text,
    size,
    textColor,
    textSize,
    colorsList,
    letterColor,
    imageSrc,
    imageSize,
  } = props;

  const styled = {
    height: size,
    width: size,
    backgroundColor: colorsList
      ? colorsList[Math.floor(Math.random() * colorsList.length)]
      : colors[Math.floor(Math.random() * colors.length)],
  };

  const associatedColor = {
    height: size,
    width: size,
    backgroundColor: ltColor(text),
  };

  const textStyle = {
    color: textColor ? textColor : 'white',
    fontSize: textSize ? textSize : 12,
  };

  if (imageSrc) {
    return <Image style={{height: imageSize, width: imageSize}} source={imageSrc} />;
  } else {
    return (
      <View
        style={[styles.mainContainer, letterColor ? associatedColor : styled]}>
        <Text style={textStyle}>{text.slice(0, 1).toUpperCase()}</Text>
      </View>
    );
  }
};

export default RoundCapitalLetter;

const ltColor = text => {
  const y = text.slice(0, 1).toUpperCase();
  switch (y) {
    case 'A': {
      return '#ff7272';
    }
    case 'B': {
      return '#688aff';
    }
    case 'C': {
      return '#ffcb7f';
    }
    case 'D': {
      return '#0054e1';
    }
    case 'E': {
      return '#6ddfd0';
    }
    case 'F': {
      return '#0f829c';
    }
    case 'G': {
      return '#fcefef';
    }
    default: {
      return '#0f829c';
    }
  }
};

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
});
