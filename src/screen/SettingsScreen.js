/**
 *
 *
 * Created by LannyCodes on 2019/5/25
 */

import React from 'react';
import {Button, View, Text, StatusBar,Platform} from 'react-native';
import BaseTabScreen from './BaseTabScreen';
import {SafeAreaView} from 'react-navigation';
const isAndroid = Platform.OS === 'android';
class SettingsScreen extends BaseTabScreen {

    componentDidMount() {
        super.componentDidMount();//这句不能少

        //关于StatusBar字体颜色的监听
        this._navListener = this.props.navigation.addListener('didFocus', () => {
            StatusBar.setBarStyle('dark-content');
            isAndroid && StatusBar.setBackgroundColor('#6a51ae');
        });
    }


    render() {
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: '#ecf0f1', justifyContent: 'center', alignItems: 'center'}}>
                {/*当你使用TabNavigator时，只需要在TabNavigator的第一个component（这里时
                HomeScreen）设置StatusBar,其他几个tab不用设置StatusBar,同时在所有tab页面中
                开启监听器监听StatusBar关于didFocus的配置，记得要在unmounted取消监听*/}
                {/*<StatusBar*/}
                {/*barStyle="dark-light"*/}
                {/*backgroundColor="#ecf0f1"*/}
                {/*/>*/}
                <Button
                    style={{

                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    title="去详情"
                    onPress={() => {
                        /* 1. Navigate to the Details route with params */
                        this.props.navigation.navigate('Detail', {
                            itemId: 86,
                            otherParam: 'anything you want here',
                        });
                    }}
                />
                <Text>Settings!</Text>
            </SafeAreaView>
        );
    }

    componentWillUnmount() {
        super.componentWillUnmount();//这句不能少

        this._navListener.remove();
    }
}

export default SettingsScreen;
