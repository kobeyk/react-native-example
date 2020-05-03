import React, { Component } from 'react'

import { Image, View, Text ,StyleSheet,Dimensions} from 'react-native'

export default class YkImageNike extends Component {
    constructor(){
        super()
        this.state={
            dataArray:require('./../assets/datas/nikeShoes.json')
        }
    }

    _getShoesItems(){

        // 0、常量

        // 屏幕的宽度
        let screeW = Dimensions.get('window').width;
        // 屏幕的宽度
        let screeH = Dimensions.get('window').height;
        // 9宫格做法，分3列，每个图片的宽100，高120
        let cols = 3, boxW = 100, boxH = 140
        // 求水平间距
        let hMargin = (screeW-cols*boxW)/(cols+1)
        // 垂直间距随便设置以下
        let vMargin = 30



        //  1、定义组件数据
        let items = []
        let dataArray = this.state.dataArray
        for (let i = 0 ; i < dataArray.length;i++){
            let data = dataArray[i]
            items.push(
                <View key={i} style={
                    {
                        width:boxW,
                        height:boxH,
                        marginLeft:hMargin,
                        marginTop:vMargin,
                        alignItems:"center",
                        justifyContent:"center",
                        backgroundColor:"gray"
                    }
                }>
                    <Image source={{uri:data.icon}} style={{width:90,height:90}} />
                    <Text style={
                        {
                            marginTop:10,
                            alignItems:"center"
                        }
                    }>{data.name}</Text>
                </View>
            )
        }

        // 3、返回组件数据
        return items 
    }


    render() {
        return (
            <View style={styles.container}>
               {this._getShoesItems()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"row",
        flexWrap:'wrap'
    }
})
