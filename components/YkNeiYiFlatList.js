import React, { Component } from 'react'

import {
    View,
    Text,
    TouchableOpacity,
    Image,
    FlatList,
    StyleSheet
} from 'react-native'

import YkSwiper from './YkSwiper'
import YkFooter from './YkFooter'

const ds = require('../assets/datas/neiyi.json')

export default class YkNeiYiFlatList extends Component {

    constructor() {
        super()
        this.state = {
            dataSource: ds
        }
    }

    _renderData(item, index) {
        return (
            <TouchableOpacity
             style = {styles.cellRow}
             onPress={()=>alert('您确定要购买这件吗,'+item.name+',价格：¥'+item.price)}
            >
                {/* 左部分 */}
                <Image source={{ uri: item.image }}
                    style={{ width: 100, height: 100 }}
                />

                {/* 右部分 */}
                <View style={{
                    flex:1,
                    // 主轴（横轴）方向上的对齐方式 ： 项目位于各行之前、之间、之后都留有空白的容器内
                    justifyContent:'space-around',
                    marginLeft:6
    
        
                }}>
                    <Text style={{fontSize:16}}>{item.name}</Text>
                    <Text style={{fontSize:14,color:'red'}}>¥{item.price}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <FlatList
                data={this.state.dataSource}
                renderItem={({ item, index }) => this._renderData(item, index)}
                keyExtractor={(item, index) => item + index}    
                ListHeaderComponent={()=>(<YkSwiper/>)}
                ListFooterComponent={(<YkFooter/>)}

            />
        )
    }
}

const styles = StyleSheet.create({
    cellRow:{
        // 显示在一行
        flexDirection:'row',
        // 设置下边框宽度
        borderBottomWidth:1,
        // 设置边框的颜色
        borderColor:'red',
        // 上下左右间距
        padding:6
    }
})
