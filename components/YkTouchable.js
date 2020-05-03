import React, { Component } from 'react';

import { 
View,Text,Button,TouchableOpacity, StyleSheet
 } from 'react-native'

class YkTouchable extends Component {
  
    constructor(){
        super()
        this.state={
            userName:'Appleyk'
        }
    }

    _login(){
        alert('欢迎'+this.state.userName+'回家！')
    }
    _register(){
        alert('注册成功，'+this.state.userName)
    }

    render() {
        return (
            <View style={{justifyContent:'center',alignItems:'center'}}>
                {/* color,在ios上是文本色，在安卓上是背景色 */}
                <Button onPress={()=>this._login()} color='red' title="登陆" />
                <TouchableOpacity style={styles.login}
                // 按下去触发
                // onPress={()=>this._register()}
                // 按住触发
                // onPressIn={()=>this._register()}
                // 按住松开触发
                onPressOut={()=>this._register()}
                // 长按触发
                // onLongPress={()=>this._register()}
                // 透明度，最大1，默认0.2
                activeOpacity={0.5}

                >
                    <Text style={{fontSize:20}}>注册</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    login:{
        width:120,
        height:30,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        backgroundColor:'gray',
        marginTop:20
    }
})

export default YkTouchable;