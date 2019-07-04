/**
 *
 *
 * Created by LannyCodes on 2019/5/25
 */

import * as React from 'react'
    ;
import {Button, Text, View, StyleSheet} from 'react-native';
import {Provider, connect} from 'react-redux';
import CountContainer from './Count';

class StaticCounter extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'jfiejofe'//navigation.getParam('count'),
    });

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.paragraph}>
                    {this.props.navigation.getParam('count')}
                </Text>
            </View>
        );
    }
}

export default connect(state => ({ count: state.count}))(StaticCounter);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});