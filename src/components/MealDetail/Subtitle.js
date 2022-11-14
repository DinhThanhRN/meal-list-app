import {Icon} from '@rneui/themed';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Subtitle = ({children}) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
  subtitleContainer: {
    marginHorizontal: 10,
    marginVertical: 6,
    padding: 6,
    borderBottomColor: '#e2b497',
    borderBottomWidth: 2,
  },
  subtitle: {
    color: '#e2b497',
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
  },
});
