import React from 'react';
import {Pressable} from 'react-native';
import {Icon} from '@rneui/themed';
import {StyleSheet} from 'react-native';

const IconButton = ({icon, color, onPress}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => pressed && styles.pressed}>
      <Icon name={icon} size={24} color={color} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
