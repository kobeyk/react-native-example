import React, { Component } from 'react'
import { View, Text,ScrollView,Dimensions } from 'react-native'

export default class YkScrollView extends Component {
    constructor() {
        super()
        this.state = {}
    }

    _renderView() {
       // 1、定义组件数组
       let compArray = []
       // 2、定义颜色数组
       let colorArray = ['red','green','purple','yellow','blue']
       for(let i = 0; i<colorArray.length;i++){
        compArray.push(
               <View key={i} style={{
                   width:Dimensions.get('window').width-20,
                   height:500,
                   backgroundColor:colorArray[i],
                   alignItems:'center',
                   justifyContent:'center'
               }}>
                   <Text style={{color:'white',fontSize:100}}>{i}</Text>
               </View>
           )
       }

       return compArray;
    }

    render() {
        return (
            <View style={{alignItems:'center'}}>
                <ScrollView 
                //  水平滚动
                horizontal={true}
                // 一次只翻一页
                pagingEnabled={true}
                scre
                
                >
                    {this._renderView()}
                </ScrollView>
            </View>
        )
    }
}
