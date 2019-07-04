/**
 * Created by LannyCodes on 2019/5/24
 */

import {createStackNavigator,} from 'react-navigation'; // Version can be specified in package.json

import CounterContainer from '../screen/Counter';
import StaticCounterContainer from '../screen/StaticCounter';
import DetailsScreen from '../screen/DetailsScreen';
import ModalScreen from '../screen/ModalScreen';
import TabNavigator from './TabNavigator';
import DrawerNavigator from './DrawerNavigator';


const MainStack = createStackNavigator(
    {

        //导出tabNavigator
        TabNavi: TabNavigator,
        // DrawerNavi:DrawerNavigator,//不会用
        // Home: HomeScreen,
        Detail: DetailsScreen,
        Counter: CounterContainer,
        StaticCounter: StaticCounterContainer,
    },
    {
        initialRouteName: 'TabNavi',
        // initialRouteName: 'Home',
        /* The header config from HomeScreen is now here */
        defaultNavigationOptions: {//全部页面的顶部导航栏的配置
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#FFFFFF',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
        // navigationOptions: {
        //     tabBarLabel: 'Home!',
        // },
    });

const RootStack = createStackNavigator(
    {
        Main: {
            screen: MainStack,
        },
        MyModal: {
            screen: ModalScreen,
        },
    },
    {
        mode: 'modal',
        headerMode: 'none',
    }
);

export default RootStack;