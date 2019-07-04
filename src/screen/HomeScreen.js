/**
 *
 *
 * Created by LannyCodes on 2019/5/24
 */
import {SafeAreaView} from 'react-navigation';
import React from 'react';
import {Button, View, Text, StatusBar, Platform} from 'react-native';
import BaseTabScreen from './BaseTabScreen';

const isAndroid = Platform.OS === 'android';
// any js module
import NavigationService from '../navigate/NavigationService';


class HomeScreen extends BaseTabScreen {
    static navigationOptions = ({navigation}) => {
        const params = navigation.state.params || {};
        return {
            title: 'Home',
            headerRight: (
                <Button
                    onPress={() => navigation.getParam('increaseCount')}
                    title="+1"
                    color="#fff"
                />
            ),
            headerLeft: (
                <Button
                    onPress={() => navigation.navigate('MyModal')}
                    title="Info"
                    color="#fff"
                />
            ),
        }

    };

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
    }


    _increaseCount = () => {
        this.setState({count: this.state.count + 1});
    };

    componentDidMount() {
        super.componentDidMount();//这句不能少
        this.props.navigation.setParams({increaseCount: this._increaseCount});

        //关于StatusBar字体颜色的监听
        this._navListener = this.props.navigation.addListener('didFocus', () => {
            StatusBar.setBarStyle('light-content');
            isAndroid && StatusBar.setBackgroundColor('#6a51ae');
        });
    }

    render() {
        return (
            <SafeAreaView style={{
                flex: 1,
                backgroundColor: '#6a51ae',
                alignItems: 'center',
                justifyContent: 'center'
            }}
            >
                {/*当你使用TabNavigator时，只需要在TabNavigator的第一个component（这里时
                HomeScreen）设置StatusBar,其他几个tab不用设置StatusBar,同时在所有tab页面中
                开启监听器监听StatusBar关于didFocus的配置，记得要在unmounted取消监听*/}
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="#6a51ae"
                />
                <Text>Home Screen</Text>
                <Button
                    style={{

                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    title="Go to Details"
                    onPress={() => {
                        /* 1. Navigate to the Details route with params */
                        this.props.navigation.navigate('Detail', {
                            itemId: 86,
                            otherParam: 'anything you want here',
                        });
                        //2.使用NavigationService这种方式进行导航
                        // NavigationService.navigate('Detail', {itemId: 86, otherParam: 'anything you want here',});

                    }}
                />
                <Button
                    style={{

                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    title="Open Drawer"
                    onPress={() => {
                        /* 1. Navigate to the Details route with params */
                        this.props.navigation.openDrawer('DrawerNavi');
                    }}
                />
                <Text>Home Screen</Text>
            </SafeAreaView>
        );
    }

    componentWillUnmount() {
        super.componentWillUnmount();//这句不能少

        this._navListener.remove();
    }
}

export default HomeScreen;
