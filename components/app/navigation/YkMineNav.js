import React, { Component } from 'react'
import {
    View,
    Text,StyleSheet,
    TouchableOpacity
} from 'react-native'

// 我的路由页面
export default class YkMineNav extends Component {
    render() {
        return (
            <View style={styles.containerView}>
                <Text style={{fontSize:28}}>我是【我的】页面</Text>      
                {/* 弹出栈中最上面的元素 */}
                <TouchableOpacity onPress={()=>{this.props.navigation.popToTop()}}>
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
    containerView:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#CDB5CD'      
    },
    navText:{
        fontSize:26
    }
})