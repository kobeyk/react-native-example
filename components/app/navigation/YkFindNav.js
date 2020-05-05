import React, { Component } from 'react'

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native'


// 发现路由页面
export default class YkFindNav extends Component {
    render() {
        return (
            <View style={styles.containerView}>
                <Text style={{fontSize:28}}>我是【发现】页面</Text>    
                {/* 跳转到自己所在的页面时，采用压栈的方式 */}
                <TouchableOpacity onPress={()=>{this.props.navigation.push('Find')}}>
                    <Text style={styles.navText}>发现</Text>                 
                </TouchableOpacity> 
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
    containerView:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#9AC0CD'      
    },
    navText:{
        fontSize:26
    }
})