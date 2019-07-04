/**
 *
 *
 * Created by LannyCodes on 2019/5/25
 */

import * as React from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';
import {Provider, connect} from 'react-redux';
import CountContainer from './Count';

class Counter extends React.Component {
    static navigationOptions = {
        title: 'fjeijfie'//这里title无法使用component


    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.paragraph}>{this.props.count}</Text>
                <Button
                    title="Increment"
                    onPress={() => this.props.dispatch({type: 'INCREMENT'})}
                />
                <Button
                    title="Decrement"
                    onPress={() => this.props.dispatch({type: 'DECREMENT'})}
                />

                <Button
                    title="Go to static count screen"
                    onPress={() =>
                        this.props.navigation.navigate('StaticCounter', {
                            count: this.props.count,
                        })
                    }
                />
            </View>
        );
    }
}

export default connect(state => ({count: state.count}))(Counter);

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