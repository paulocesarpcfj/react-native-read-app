import React from 'react';
import { Platform, View, Text } from 'react-native';

const headerStyles = {
    fontSize: 20,
    padding: 15,
    paddingTop: (Platform.OS === 'ios') ? 25 : 15,
    textAlign: 'center',
    backgroundColor: '#F2F2F2',
};

export default () => (
    <View style={{ borderBottomWidth: 1, borderBottomColor: '#CCC' }}>
        <Text style={headerStyles}>
            Read
        </Text>
    </View>
);
