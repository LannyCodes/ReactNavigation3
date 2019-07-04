/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import {Provider} from 'react-redux';
import StackNavigator from './src/navigate/StackNavigator';
import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import NavigationService from './src/navigate/NavigationService';
import store from './src/redux/store';

const AppContainer = createAppContainer(StackNavigator);


export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppContainer ref={(navigatorRef) => {
                    NavigationService.setTopLevelNavigator(navigatorRef);
                }}/>
            </Provider>
        );
    }
}

