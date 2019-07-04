/**
 * Created by LannyCodes on 2018/10/28
 */
import React, {Component} from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
// import Message from './MessagePoint'
// import {connect} from 'react-redux';
// import PropTypes from 'prop-types';

class TabBarItem extends Component {
    // static propTypes = {
    //     messageCount: PropTypes.number,
    //     showMessage: PropTypes.bool,
    // };
    //
    // static defaultProps = {
    //     messageCount: 0,
    //     showMessage: false
    // };


    render() {
        // log('获取到消息个数', this.props.msgCount)
        let selectedImage = this.props.selectedImage ? this.props.selectedImage : this.props.normalImage
        const {badgeCount} = this.props;
        return (
            <View>
                <Image
                    resizeMode={'contain'}
                    source={this.props.focused
                        ? selectedImage
                        : this.props.normalImage}
                    style={styles.image}
                />
                {badgeCount > 0 && (
                    <View
                        style={{
                            // /If you're using react-native < 0.57 overflow outside of the parent
                            // will not work on Android, see https://git.io/fhLJ8
                            position: 'absolute',
                            right: -6,
                            top: -3,
                            backgroundColor: 'red',
                            borderRadius: 6,
                            width: 12,
                            height: 12,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <Text style={{color: 'white', fontSize: 10, fontWeight: 'bold'}}>
                            {badgeCount}
                        </Text>
                    </View>
                )}
                {/*<Message*/}
                {/*isShow={this.props.showMessage}*/}
                {/*contentStyle={{position: 'absolute', marginLeft: 15, marginTop: -5}}*/}
                {/*mesCount={this.props.msgCount}*/}
                {/*/>*/}
            </View>
        );
    }

}

const styles = StyleSheet.create({
    image: {
        width: 26,
        height: 24
    }
});

export default TabBarItem;