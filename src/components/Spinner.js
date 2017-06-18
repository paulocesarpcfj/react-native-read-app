import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const spinnerStyle = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
};

export default () => (
    <View style={spinnerStyle}>
        <ActivityIndicator size="large" style={{ paddingVertical: '50%' }} />
    </View>
);
