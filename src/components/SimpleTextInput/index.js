import React from 'react';
import {TextInput} from 'react-native';

export const SimpleTextInput = ({style, value, placeholder}) => {
  return (
    <TextInput
      placeholder={placeholder}
      style={[style, {padding: 5}]}
      value={value}
    />
  );
};

export default SimpleTextInput;
