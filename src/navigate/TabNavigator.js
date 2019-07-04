/**
 * Created by LannyCodes on 2019/5/25
 */

import React from 'react';
import {createBottomTabNavigator} from 'react-navigation';
import HomeScreen from '../screen/HomeScreen';
import SettingsScreen from '../screen/SettingsScreen';
import TabBarItem from '../widget/TabBarItem';

const TabNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                tabBarLabel: '首页',
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarItem
                        badgeCount={2}
                        focused={focused}
                        selectedImage={require('../image/icon_home_select.png')}
                        normalImage={require('../image/icon_home.png')}
                    />
                )
            },
        },
        Settings: {
            screen: SettingsScreen,
            navigationOptions: {
                tabBarLabel: '设置',
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarItem
                        badgeCount={3}
                        focused={focused}
                        selectedImage={require('../image/icon_community_select.png')}
                        normalImage={require('../image/icon_community.png')}
                    />
                )
            },
        },
    }, {


        // defaultNavigationOptions: ({navigation}) => ({
        //     tabBarIcon: ({focused, tintColor}) =>
        //         getTabBarIcon(navigation, focused, tintColor),
        // }),
        tabBarPosition: 'bottom', // 设置tabBar的位置

        swipeEnabled: false, //是否允许在标签之间进行滑动
        animationEnabled: false, //是否在更改标签时显示动画。
        backBehavior: 'none', // 按 back 键是否跳转到第一个 Tab， none 为不跳转
        lazy: true, //懒加载
        // tabBarComponent: () => null,
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
    });

//在这里把默认所有页面都配置navigationOptions去掉
TabNavigator.navigationOptions = {
    // Hide the header from TabNavigator stack
    header: null,
};


export default TabNavigator;