/**
 *使用NavigationService这种方式进行导航,效果类似于navigation props这种方式，比
 *navigation props更灵活，不用每个地方都携带Prop.navigation.navigate
 * 不过项目中很少用到
 *
 * Created by LannyCodes on 2019/5/25
 */


import {NavigationActions} from 'react-navigation';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
    _navigator = navigatorRef;
}

function navigate(routeName, params) {
    _navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params,
        })
    );
}

// add other navigation functions that you need and export them

export default {
    navigate,
    setTopLevelNavigator,
};