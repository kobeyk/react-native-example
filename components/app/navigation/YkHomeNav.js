import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    TouchableOpacity
} from 'react-native'

// 所有的路由得放到容器中
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import YkFindNav from './YkFindNav'
import YkMineNav from './YkMineNav'
import YkOrderNav from './YkOrderNav'
const styles = StyleSheet.create({
    homeNav: {
        // 占满屏幕
        flex: 1,
        backgroundColor: 'cyan',
        justifyContent: 'center',
        alignItems: 'center'
    },
    navText: {
        fontSize: 26
    }
})

// 首页路由页
class YkHomeNav extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }
     

    // 设置头部导航相关信息
    static navigationOptions = {
        title: '首页',
        headerStyle: {
            backgroundColor: '#BFEFFF',
        },
        headerTintColor: 'black',
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20
        },
        headerLeft: () => (
            <Button title="设置" onPress={() => alert("设置")} />
        ),
        headerRight: () => (
            <Button
                onPress={() => alert("下一步")}
                title="下一步"
            />)
    }


    render() {
        return (
            <View style={styles.homeNav}>
                <Text style={{ fontSize: 26 }}>我是【首页】页面</Text>
                <Button title="发现"
                    onPress={() => this.props.navigation.navigate('Find')} />

                {/* 路由过去，传对象 */}
                <Button title="订单"
                    onPress={() => this.props.navigation.navigate('Order', {
                        goodsName: 'Iphone 11 128G',
                        goodsPrice: '价格：¥4500.00'
                    })} />
                <TouchableOpacity
                    // 压栈操作，自身跳到自身会不断往栈里面添加，back的时候亚几次就要点几次
                    onPress={() => this.props.navigation.push('Mine')}
                >
                    <Text style={styles.navText}>我的</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

// 导航栈，里面的元素即路由组件，通过路由名称:路由组件的方式，添加
const AppStackNav = createStackNavigator(
    {
        Home: YkHomeNav,
        Find: YkFindNav,
        Mine: YkMineNav,
        Order: YkOrderNav
    }
)

const AppContainer = createAppContainer(
    AppStackNav
)

export default AppContainer

