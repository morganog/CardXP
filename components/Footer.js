import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const footerStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f2f2f2',
    width: '100%',
    position: 'absolute',
    bottom: 0
  },
  text: {
    color: '#484C61',
  }
});

const CardXPFooter = () => {
  return (
    <View style={footerStyles.container}>
      <Text style={footerStyles.text}>
        © 2025 CardXP. All rights reserved.{' '}
      </Text>
    </View>
  );
}

export default CardXPFooter;