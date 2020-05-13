import React, { Component } from 'react'

import {
    View, Text, Button,StyleSheet
} from 'react-native'
export default class Home extends Component {

    static navigationOptions={
        title:'首页',
        headerStyle:{
            backgroundColor:'white'
        },
        headerTintColor:'black',
        headerTintStyle:{

        },
        headerLeft:() => (
          <Button title="返回" 
           onPress={()=>alert("返回")}
          />
        ),
        headerRight:()=>(
            <Button title="摇一摇"
            onPress={()=>alert("摇一摇")}/>
        )
    }

    render() {
        return (
            <View style={{
                flex:1,
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:'cyan'
            }}>
                <Text style={{fontSize:38}}>首页</Text>
                <Button title="跳转，我的" onPress={()=>this.props.navigation.navigate("Mine")} />
            </View>
        )
    }
}

const styles = StyleSheet.create(
    {
        
    }
)
