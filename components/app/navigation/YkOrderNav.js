import React, { Component } from 'react'

import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

// 订单路由页
export default class YkOrderNav extends Component {
    render() {
        const {navigation} = this.props
        return (
            <View style={styles.containerView}>
                <Text style={{fontSize:28}}>我是【订单】页面</Text>
        <Text style={{fontSize:28}}>商品：{JSON.stringify(navigation.getParam('goodsName'))}</Text>
        {/* 整体获取 */}
        <Text style={{fontSize:28}}>订单详情：{JSON.stringify(navigation.state.params)}</Text>
                <TouchableOpacity onPress={()=>{this.props.navigation.goBack()}}>
                    <Text style={styles.navText}>返回上一级</Text>                 
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Home')}}>
                    <Text style={styles.navText}>返回首页</Text>                 
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#B4EEB4'
    },
    navText:{
        fontSize:26
    }
})
