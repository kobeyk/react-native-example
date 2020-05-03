import React, { Component } from 'react'

import {
 View,TextInput,Text
} from 'react-native'

export default class YkText extends Component {
    constructor(){
        super()
        this.state={
            inputValue:''
        }
    }
    render() {
        return (
            <View>
                <TextInput style={{
                    width:300,
                    height:45,
                    borderColor:'gray',
                    borderWidth:1,
                    marginLeft:10,
                    marginTop:50,
                    marginRight:10,
                    paddingLeft:10
                }}
                clearButtonMode='always'
                placeholder='请输入用户名'
                placeholderTextColor='red'
                onChangeText={(text)=>this.setState({inputValue:text})}
                />
                <Text style={{marginTop:10,marginLeft:10}}>您输入的内容是：{this.state.inputValue}</Text>
            </View>
        )
    }
}
