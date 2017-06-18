import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from './reducers';
import ChapterReader from './containers/ChapterReader';
import Header from './components/Header';

export default () => {
    const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
    const store = createStoreWithMiddleware(reducers);

    return (
        <Provider store={store}>
            <View style={{ flex: 1 }}>
                <Header />
                <ChapterReader />
            </View>
        </Provider>
    );
};
