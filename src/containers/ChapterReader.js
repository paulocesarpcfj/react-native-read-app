import React from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text } from 'react-native';
import { fetchChapter } from '../actions/chapters';
import HTMLParser from '../components/HTMLParser';
import Spinner from '../components/Spinner';

const titleStyle = {
    paddingLeft: 20,
    paddingTop: 20,
    fontWeight: '500',
    fontSize: 18,
};

class ChapterReader extends React.Component {
    componentWillMount() {
        this.props.fetchChapter();
    }

    render() {
        return (
            <ScrollView>
                {this.props.isLoading &&
                    <Spinner />
                }

                <Text style={titleStyle}>{this.props.name}</Text>

                <HTMLParser
                    style={{ padding: 20 }}
                    value={this.props.text}
                />
            </ScrollView>
        );
    }
}

const mapStateToProps = ({ chapters }) => ({ ...chapters });

export default connect(mapStateToProps, { fetchChapter })(ChapterReader);
