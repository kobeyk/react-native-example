import React, { Component } from 'react'

import {
    Text,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    Dimensions
} from 'react-native'

const screenW = Dimensions.get('window').width

export default class YkFlatList extends Component {
    constructor() {
        super()
        this.state = {
            dataSource: [
                "我是数据11111",
                "我是数据22222",
                "我是数据33333",
                "我是数据11111",
                "我是数据11111",
                "我是数据11111",
                "我是数据11111",
                "我是数据66666",
                "我是数据11111",
                "我是数据11111",
                "我是数据11111",
                "我是数据11111",
                "我是数据11111",
                "我是数据11111",
                "我是数据88888",
                "我是数据11111",
                "我是数据11111",
                "我是数据10000",
                "我是数据11111",
                "我是数据11111"
            ]
        }
    }

    _render(item, index) {
        return (
            <TouchableOpacity
                style={styles.item}
                onPress={()=>alert('点击了第'+(index+1)+'个元素对象')}
            >
                <Text>{item}</Text>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <FlatList
                data={this.state.dataSource}
                renderItem={({ item, index }) => this._render(item, index)}
                keyExtractor={(item, index) => item + index}
                style={
                    {
                        width: screenW,
                        // 行展示
                        flexDirection: 'row',
                        // 换行
                        flexWrap:'wrap',
                    }
                }
                numColumns={4}
            />
        )
    }
}

const styles = StyleSheet.create({
    item: {
        width: 100,
        height: 200,
        borderBottomWidth: 1,
        borderColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    }
})