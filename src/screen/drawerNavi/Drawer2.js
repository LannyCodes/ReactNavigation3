/**
 * Created by LannyCodes on 2019/5/25
 */
import {SafeAreaView} from 'react-navigation';
import React from 'react';
import {
    Button, View, Text,
    StatusBar, Platform, Image, StyleSheet
} from 'react-native';

const isAndroid = Platform.OS === 'android';

class Drawer2 extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Notifications',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('../../image/tesla.jpg')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };

    render() {
        return (
            <Button
                onPress={() => this.props.navigation.goBack()}
                title="Go back home"
            />
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },
});
export default Drawer2;