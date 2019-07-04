/**
 *
 *
 * Created by LannyCodes on 2019/5/24
 */

import React from 'react';
import {Button, View, Text} from 'react-native';

class ModalScreen extends React.Component {
    render() {
        return (
            <View style={{
                alpha: 0.5,
                transparent: true,
                backgroundColor: 'red',
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text style={{fontSize: 30}}>This is a modal!</Text>
                <Button
                    onPress={() => this.props.navigation.goBack()}
                    title="Dismiss"
                />
            </View>
        );
    }
}

export default ModalScreen;
