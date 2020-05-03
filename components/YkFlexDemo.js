import React, { Component } from 'react'
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    Image,
    Switch
} from 'react-native'

const { width, height } = Dimensions.get('window')

// 引入本地数据
const shoesArray = require('./../assets/datas/nikeShoes.json')

export default class YkFlexDemo extends Component {

    constructor() {
        super()
        this.state = {
            shoesArray: [],
            onVal:false,
            btnDisable:true
        }

    }

    _addShoes() {
        // 1、定义相关常量
        let cols = 3, shoesBoxW = 100, shoesBoxH = 120;

        // 2、获取下标
        let index = this.state.shoesArray.length;

        if (shoesArray.length === (index)) {
            alert('鞋柜已满，无法再添加！')
            return
        }

        // 3、求出当前要创建的盒子所在的行和列
        let row = Math.floor(index / cols);
        let col = Math.floor(index % cols);

        // 4、盒子的左边距和上边距
        let xSpace = (0.9 * width - cols * shoesBoxW) / (cols + 1);
        let ySpace = (0.8 * height - cols * shoesBoxH) / (cols + 1);

        let left = (xSpace + shoesBoxW) * col + xSpace;
        let top = (ySpace + shoesBoxH) * row + ySpace;

        // 5、创建鞋子组件
        let shoesView = (
            <View
                key={index}
                style={{
                    width: shoesBoxW,
                    height: shoesBoxH,
                    position: 'absolute',
                    left,
                    top,
                    alignItems: 'center'
                }}
            >
                <TouchableOpacity style={{alignItems:'center'}} onPress={()=>alert(shoesArray[index].name)}>
                    <Image source={{ uri: shoesArray[index].icon }}
                        style={{ width: shoesBoxW, height: shoesBoxH }}
                    />
                    <Text>{shoesArray[index].name}</Text>
                </TouchableOpacity>

            </View>
        );

        // 6、追加鞋子
        let tmpArray = this.state.shoesArray;
        tmpArray.push(shoesView);
        this.setState({
            shoesArray: tmpArray
        });
    }

    _removeShoes() {
        let index = this.state.shoesArray.length
        if (0 === index) {
            alert('鞋柜已无鞋子可移除！')
        }
        // 6、移除鞋子
        let tmpArray = this.state.shoesArray;
        tmpArray.pop();
        this.setState({
            shoesArray: tmpArray,
        });
    }

    _onSwitch=()=>{
        this.setState({onVal:!this.state.onVal})
        this.setState({btnDisable:this.state.onVal})
    }

    render() {

        return (
            <View style={styles.container}>
                {/* 上半部分 == 按钮 */}
                <View style={styles.topView}>
                    <TouchableOpacity style={[styles.clickBtn]}
                        onPress={() => this._addShoes()}
                    >
                        <Text style={styles.clickBtnText}>添加鞋子</Text>
                    </TouchableOpacity>
                    <TouchableOpacity disabled={this.state.btnDisable} style={[styles.clickBtn, { backgroundColor: 'red', marginLeft: 30 }]}
                        onPress={() => this._removeShoes()}
                    >
                        <Text style={styles.clickBtnText}>删除鞋子</Text>
                    </TouchableOpacity>
                    <Switch value={this.state.onVal} onValueChange={this._onSwitch}
                        style={{marginLeft:5}
                    }
                    />
                </View>

                {/* 下半部分 == 商品展示 */}
                <View style={styles.bottomView}>
                    {this.state.shoesArray}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {

    },
    topView: {
        flexDirection: 'row',
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomView: {
        width: 0.9 * width,
        height: 0.8 * height,
        backgroundColor: 'white',
        marginTop: 15,
        // 左右等分
        marginLeft: (0.1 / 2) * width,
        position: 'relative'
    },
    clickBtn: {
        width: 130,
        height: 30,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    clickBtnText: {
        fontSize: 18, color: '#fff'
    }
})
