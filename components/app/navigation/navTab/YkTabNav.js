import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native'

// 所有的路由得放到容器中
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import YkSectionList from './../../../YkSectionList'
import YkImageNike from './../../../YkImageNike'
import YkBooksFlatList from './../../../YkBooksFlatList'
import YkHome from './../../goods/YkHome'

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
class YkTabNav extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    // 设置头部导航相关信息
    static navigationOptions = {
        title: '首页'
    }


    render() {
        return (
            <View style={styles.homeNav}>
                <Text style={{ fontSize: 26 }}>我是【首页】页面</Text>
            </View>
        );
    }
}

// 导航栈，里面的元素即路由组件，通过路由名称:路由组件的方式，添加
const AppStackTabNav = createBottomTabNavigator(
    {
        Home: YkTabNav,
        Books: YkBooksFlatList,
        Nike: YkImageNike,
        Goods: YkHome,
        NBA: YkSectionList
    }, {
    //首次加载时初始制表符路径的routeName。
    initialRouteName: 'NBA',
    //routeNames数组，用于定义选项卡的顺序。
    order: ['Home', 'Nike', 'NBA', 'Books', 'Goods'],

    //tabBar 相关配置具有以下属性的对象：
    tabBarOptions: {
        //活动选项卡的标签和图标颜色。
        activeTintColor: 'blue',
        //活动选项卡的背景颜色。
        activeBackgroundColor: '#63B8FF',
        //非活动选项卡的标签和图标颜色。
        inactiveTintColor: '#8B1A1A',
        //非活动选项卡的背景颜色。
        inactiveBackgroundColor: '#EEA2AD',
        //标签栏的样式对象。
        style: {
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10
        },
        //选项卡标签的样式对象。
        labelStyle: {
            fontSize: 20
        },
        //选项卡的样式对象。
        tabStyle: {
        },

    }
}
)


export default createAppContainer(AppStackTabNav)

