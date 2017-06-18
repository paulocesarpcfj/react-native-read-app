import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Spinner from '../src/components/Spinner';

it('renders correctly', () => {
    const spinner = renderer.create(
        <Spinner />
    ).toJSON();
    expect(spinner).toMatchSnapshot();
});
