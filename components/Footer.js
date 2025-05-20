import * as React from 'react';
import { Text, View } from 'react-native';

export default function CardXPFooter() {
  return (
    <View style={{ alignItems: 'center', padding: 16, backgroundColor: '#f2f2f2', width: '100%', position: 'absolute', bottom: 0 }}>
      <Text style={{ color: '#484C61' }}>
        © 2025 CardXP. All rights reserved.{' '}
      </Text>
    </View>
  );
}