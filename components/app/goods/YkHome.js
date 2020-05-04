import React, { Component } from 'react'
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Image,
    StyleSheet,
} from 'react-native'

import axios from 'axios'
import YkBanner from './YkBanner'

export default class YkHome extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // 商品调用的总数据源
            dataSource: [],
            // 从数据源中筛选出头部的轮播图信息
            homeBanners: [],
            // 从数据源中筛选出中间部分的商品信息，如商品的图标、名称和价格等
            products: []
        };
    }


    componentDidMount() {
        // 利用axios请求网络数据
        axios.get('http://demo.itlike.com/web/xlmc/api/homeApi')
            .then((response) => {
                console.log(response)
                if (response && response.status === 200) {

                    let res = response.data.data.list
                    let dataSource = res
                    let homeBanners = res[0].icon_list
                    let products = res[12].product_list

                    this.setState({
                        dataSource: dataSource,
                        homeBanners: homeBanners,
                        products: products
                    })
                }
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                // always do somethings
            })
    }

    _renderItems(rowData, rowIndex) {
        console.log('products,', rowData)
        return (
            <TouchableOpacity key={rowIndex}
                style={styles.products}
            >
                {/* 左边，Image ，展示商品的图标*/}
                <Image source={{ uri: rowData.small_image }}
                    style={{ width: 120, height: 120 }}

                />
                {/* 右边，View，放商品的描述和价格 */}
                <View style={{
                    flex:1,
                    justifyContent:'space-around',
                    alignItems:'center'
                }}>
                    <Text style={{fontWeight:'bold',fontSize:18}}>{rowData.product_name}</Text>
                    <Text style={{color:'red',fontSize:16}}>¥{rowData.price}</Text>
                </View>

            </TouchableOpacity>
        )
    }

    render() {
        return (
            <FlatList
                // 传值，将获取到的轮播图的数据对象传给YkBanner组件
                ListHeaderComponent={(<YkBanner
                    swiperImages={this.state.homeBanners} />)}
                ListEmptyComponent={() => <Text>正在加载中......</Text>}
                data={this.state.products}
                renderItem={({ item, index }) => this._renderItems(item, index)}
                keyExtractor={(item, index) => item + index}
            />
        )
    }
}

const styles = StyleSheet.create({
    products: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth:1,
        borderBottomColor:'red'
    }
})
