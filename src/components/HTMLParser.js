import React from 'react';
import { StyleSheet, View } from 'react-native';
import parserHelp from '../services/parserHelp';

const baseStyles = StyleSheet.create({
    b: { fontWeight: '500', fontSize: 16 },
    i: { fontStyle: 'italic', fontSize: 16 },
});

class HTMLParser extends React.Component {
    constructor(props) {
        super(props);

        this.state = { elementType: null };
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.value !== nextProps.value) {
            return this.renderHTML(nextProps.value);
        }
    }

    renderHTML(value) {
        if (!value) {
            return this.setState({ elementType: null });
        }

        return parserHelp(value, { ...baseStyles }, (error, elementType) => {
            if (error) console.error.bind(console);

            this.setState({ elementType });
        });
    }

    render() {
        if (this.state.elementType) {
            return <View children={this.state.elementType} style={this.props.style} />;
        }

        return <View style={this.props.style} />;
    }
}

export default HTMLParser;
