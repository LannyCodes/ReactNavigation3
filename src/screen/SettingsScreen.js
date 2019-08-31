/**
 *
 *
 * Created by LannyCodes on 2019/5/25
 */

import React from 'react';
import {Button, View, Text, StatusBar, Platform, Animated, Easing} from 'react-native';
import BaseTabScreen from './BaseTabScreen';
import {SafeAreaView} from 'react-navigation';
import PercentageCircle from '../widget/PercentageCircle'

const isAndroid = Platform.OS === 'android';

class SettingsScreen extends BaseTabScreen {

  constructor(props) {
    super(props);
    this.state = {
      aniDeg: new Animated.Value(0),
      progress: 0,
    }
  }

  componentDidMount() {
    super.componentDidMount();//这句不能少

    //关于StatusBar字体颜色的监听
    this._navListener = this.props.navigation.addListener('didFocus', () => {
      StatusBar.setBarStyle('dark-content');
      isAndroid && StatusBar.setBackgroundColor('#6a51ae');
    });

    this.doSomething().then(
      function (firstResult) {
        console.log("first result", firstResult);
        return 88;
      }
    ).then(
      function (secondResult) {
        console.log("second result", secondResult);
      }
    )
    ;

    this.startAni();
    this.startPro();

  }


  doSomething() {
    return new PromiseL(function (resolve) {
      var value = 412;
      resolve(value);
    });
  }


  startPro() {
    setInterval(() => {
      this.setState({progress: this.state.progress + 5})
    }, 500)
  }

  startAni() {
    this.state.aniDeg.setValue(0);
    Animated.timing(this.state.aniDeg, {
      toValue: 360,
      duration: 1000,
      easing: Easing.linear
    }).start(() => {
      this.startAni();
    })
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
        {/* <Button
          style={{

            alignItems: 'center',
            justifyContent: 'center'
          }}
          title="去详情"
          onPress={() => {
            this.props.navigation.navigate('Detail', {
              itemId: 86,
              otherParam: 'anything you want here',
            });
          }}
        />
        <Text>Settings!</Text>*/}
        <PercentageCircle
          radius={133 / 2}
          percent={this.state.progress}
          color={'blue'}
          bgcolor="#D1F2FC"
          innerColor={'#f6f6f6'}
          // eslint-disable-next-line react/no-children-prop
          children={(
            <View style={{
              flexDirection: 'row',
              justifyContent: 'flex-start'
            }}>
              <Text
                style={{
                  color: '#18BAF0',
                  fontSize: 48,
                  lineHeight: 60,
                }}
              >
                {this.state.progress}
                {/* <Text style={styles.percentageUnit}>%</Text>Text放进Text中，为了把百分号位置应与数字下对齐 */}
              </Text>
            </View>
          )}
          unit={(
            <View style={{
              height: 35,
              lineHeight: 35,
              display: 'flex',
              flexDirection: 'column-reverse',
            }}>
              <Text style={{
                color: '#18BAF0',
                fontSize: 15,
              }}>%</Text>
            </View>
          )}
        />

      </SafeAreaView>
    );
  }

  componentWillUnmount() {
    super.componentWillUnmount();//这句不能少

    this._navListener.remove();
  }
}

function PromiseL(fn) {
  console.log('----fn----');
  console.log(fn);
  var state = 'pending';
  var value;
  var deferred = null;

  function resolve(newValue) {
    value = newValue;
    state = 'resolved';

    if (deferred) {
      handle(deferred);
    }
  }

  function handle(handler) {
    if (state === 'pending') {
      deferred = handler;
      return;
    }

    if (!handler.onResolved) {
      handler.resolve(value);
      return;
    }

    var ret = handler.onResolved(value);
    handler.resolve(ret);
  }

  this.then = function (onResolved) {
    console.log('----onResolved----');
    console.log(onResolved);
    return new PromiseL(function (resolve) {
      console.log('----resolve----');
      console.log(resolve);
      handle({
        onResolved: onResolved,
        resolve: resolve
      });
    });
  };

  fn(resolve);
}

export default SettingsScreen;
