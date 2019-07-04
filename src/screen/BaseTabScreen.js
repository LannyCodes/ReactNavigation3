/**
 * Created by LannyCodes on 2019/5/25
 */
import React, {Component} from 'react';
import {
    StatusBar,
    BackHandler,
    ToastAndroid,
    Platform,
} from 'react-native';


/**
 * 这个类主要是为了处理底部tab页android物理返回键时提示"再按一次退出"，所有tab页都继承此
 */
export default class BaseTabScreen extends Component {


    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);



    }

    handleBackPress = () => {
        //必须是在首页时才监听物理返回键
        if (this.props.navigation.isFocused()) {
            if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
                //最近2秒内按过back键，可以退出应用。
                BackHandler.exitApp();
                return;
            }
            this.lastBackPressed = Date.now();
            ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
            return true;
        }

    };

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);



    }

}