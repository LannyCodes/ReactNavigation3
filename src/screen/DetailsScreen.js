/**
 *
 *
 * Created by LannyCodes on 2019/5/24
 */
import React from 'react';
import {Button, View, Text, Image, StatusBar} from 'react-native';

class DetailsScreen extends React.Component {
    // static navigationOptions = ({navigation}) => {
    //     return {
    //         title: navigation.getParam('otherParam', 'A Nested Details Screen'),
    //     };
    // };

    //本页面单独配置
    static navigationOptions = ({navigation, navigationOptions}) => {
        const {params} = navigation.state;

        return {
            // headerTitle instead of title展示图片而不是文字标题

            //返回的按钮图标
            // headerBackImage: <Image source={require('../image/icon_return.png')}
            //                         style={{width: 20, height: 20}}/>,

            headerTitle: <Image source={require('../image/tesla.jpg')}
                                style={{width: 30, height: 30}}/>,
            // title: params ? params.otherParam : 'A Nested Details Screen',
            /* These values are used instead of the shared configuration! */
            headerStyle: {
                backgroundColor: navigationOptions.headerTintColor,
            },
            headerTintColor: navigationOptions.headerStyle.backgroundColor,
        };
    };

    render() {
        /* 2. Get the param, provide a fallback value if not available */
        const {navigation} = this.props;
        const itemId = navigation.getParam('itemId', 'NO-ID');
        const otherParam = navigation.getParam('otherParam', 'some default value');

        return (
            <View style={{backgroundColor: "#ecf0f1", flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <StatusBar
                    barStyle="dark-content"
                    backgroundColor="#ecf0f1"
                />
                <Text>Details Screen</Text>
                <Text>itemId: {JSON.stringify(itemId)}</Text>
                <Text>otherParam: {JSON.stringify(otherParam)}</Text>
                <Button
                    title="Go to Details... again"
                    onPress={() =>
                        this.props.navigation.push('Detail', {
                            itemId: Math.floor(Math.random() * 100),
                        })}
                />
                <Button
                    title="Update the title"
                    onPress={() =>
                        this.props.navigation.setParams({otherParam: 'Updated!'})}
                />
                <Button
                    title="Go to Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />
                <Button
                    title="Go Counter"
                    onPress={() => this.props.navigation.push('Counter', {
                        itemId: Math.floor(Math.random() * 100),
                    })}
                />
            </View>
        );
    }
}


export default DetailsScreen;