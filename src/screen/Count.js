/**
 *
 *
 * Created by LannyCodes on 2019/5/25
 */

import * as React from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';
import {Provider, connect} from 'react-redux';


class Count extends React.Component {
    render() {
        return <Text>Count: {this.props.value}</Text>;
    }
}

let CountContainer = connect(state => ({value: state.count}))(Count);

export default CountContainer;