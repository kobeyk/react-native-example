import React, { Component } from 'react'

import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions
} from 'react-native'

import Swiper from 'react-native-swiper'

const screenW = Dimensions.get('window').width
export default class YkSwiper extends Component {
    render() {
        return (
            <Swiper style={styles.wrapper} showsButtons={false}
            height={230}                   //组件高度
            loop={true}                    //如果设置为false，那么滑动到最后一张时，再次滑动将不会滑到第一张图片。
            autoplay={true}                //自动轮播
            autoplayTimeout={4}                //每隔4秒切换
            horizontal={true}              //水平方向，为false可设置为竖直方向
            paginationStyle={{
                bottom:10,left:null,right:10
            }} //小圆点的位置：距离底部10px
            showsPagination={true} // 是否分页
            dot={<View style={{           //未选中的圆点样式
                backgroundColor: 'rgba(0,0,0,.2)',
                width: 12,
                height: 12,
                borderRadius: 10,
                marginLeft: 10,
                marginRight: 9,
                marginTop: 9,
                marginBottom: 9,
            }}/>}
            activeDot={<View style={{    //选中的圆点样式
                backgroundColor: '#007aff',
                width: 12,
                height: 12,
                borderRadius: 10,
                marginLeft: 10,
                marginRight: 9,
                marginTop: 9,
                marginBottom: 9,
            }}/>}
            >
                <View style={styles.slide1}>
                    <Image source={{ uri: 'http://img58.ddimg.cn/9001580095667408.jpg' }}
                        style={{ width: screenW, height: 230 ,resizeMode:'stretch'}}
                    />
                    {/* <Text style={styles.text}>Hello Swiper</Text> */}
                </View>
                <View style={styles.slide2}>
                    <Image source={{ uri: 'http://img1.gtimg.com/chinanba/pics/hv1/54/109/2323/151080924.jpg' }}
                        style={{ width: screenW, height: 230 }}
                    />

                    {/* <Text style={styles.text}>Beautiful</Text> */}
                </View>
                <View style={styles.slide3}>
                    <Image source={{ uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588265804051&di=c905ba324403d9e288dc97f510d5f3bf&imgtype=0&src=http%3A%2F%2Fi3.img.969g.com%2Fnews%2Fimgx2013%2F05%2F23%2F225_133820_ac2e9.jpg' }}
                        style={{ width: screenW, height: 230 }}
                    />
                    {/* <Text style={styles.text}>And simple</Text> */}
                </View>
                <View style={styles.slide4}>
                    <Image source={{ uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588265932701&di=004e6c7ac5744a144181fadf66e26e6a&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Fbba1cd11728b4710cfcb9802c2cec3fdfd032313.jpg' }}
                        style={{ width: screenW, height: 230 }}
                    />
                    {/* <Text style={styles.text}>And simple</Text> */}
                </View>
            </Swiper>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {},
    slide:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide1: {
        // flex:1,
        backgroundColor: '#9DD6EB'
    },
    slide2: {
        backgroundColor: '#97CAE5'
    },
    slide3: {
        backgroundColor: '#92BBD9'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    }
})
