import { StyleSheet, Text, View } from 'react-native';

const CardXPFooter = () => {
  return (
    <View style={footerStyles.container}>
      <Text style={footerStyles.footerText}>
        © 2025 CardXP. All rights reserved.{' '}
      </Text>
    </View>
  );
}

const footerStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f2f2f2',
    width: '100%',
    position: 'absolute',
    bottom: 0
  },
  footerText: {
    color: '#484C61',
  }
});

export default CardXPFooter;