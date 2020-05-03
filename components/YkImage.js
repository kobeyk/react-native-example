import React, { Component } from 'react'

import { Image, View, Text, ImageBackground } from 'react-native'

export default class YkImage extends Component {
    render() {
        return (
            <View>
                {/* 加载本地图片 */}
                <Image source={require('./../assets/images/1.jpg')}
                    style={{ width: 200, height: 200 }} />
                {/* 加载网络图片 */}
                <Image source={{ uri: 'https://profile.csdnimg.cn/3/3/3/1_appleyk' }}
                    style={{ width: 200, height: 200 }} />
                <ImageBackground source={require('./../assets/images/3.png')}
                    style={{ width: 500, height: 500 }}
                >
                    <Text style={{ color: 'red', fontSize: 50 }}>宝宝，你好可爱哦</Text>
                </ImageBackground>
            </View>
        )
    }
}
