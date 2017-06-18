import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import HTMLParser from '../src/components/HTMLParser';

it('renders correctly', () => {
    const htmlParser = renderer.create(
        <HTMLParser value="<p><i>test it</i> and it <b>too</b></p>" />
    ).toJSON();
    expect(htmlParser).toMatchSnapshot();
});
