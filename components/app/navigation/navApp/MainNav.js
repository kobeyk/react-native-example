import React, { Component } from 'react'

import {
    StyleSheet,
    Image
} from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs'

import Find from '../../../pages/Find'
import Mine from '../../../pages/Mine'
import Nearby from '../../../pages/Nearby'
import HomeNavigator from '../navApp/HomeNav'
const TAB_NAV = {
    Find: {
        screen: Find,
        navigationOptions: {
            tabBarLabel: '发现',
            tabBarIcon: ({ focused }) => {
                // 如果没有选中，给一个图标
                if (!focused) {
                    return (
                        <Image
                            source={require('../../../../assets/images/tabs/find_2.png')}
                            style={{
                                height: 30,
                                width: 30
                            }}
                        />
                    )
                } else {
                    return (
                        <Image
                            source={require('../../../../assets/images/tabs/find_1.png')}
                            style={{
                                height: 30,
                                width: 30
                            }}
                        />
                    )
                }
            }
        }
    },
    Home: {
        screen: HomeNavigator,
        navigationOptions: {
            tabBarLabel: '首页',
            tabBarIcon: ({ focused }) => {
                // 如果没有选中，给一个图标
                if (!focused) {
                    return (
                        <Image
                            source={require('../../../../assets/images/tabs/home_2.png')}
                            style={{
                                height: 30,
                                width: 30
                            }}
                        />
                    )
                } else {
                    return (
                        <Image
                            source={require('../../../../assets/images/tabs/home_1.png')}
                            style={{
                                height: 30,
                                width: 30
                            }}
                        />
                    )
                }
            }
        }
    },
    Mine:{
        screen:Mine,
        navigationOptions:{
            tabBarLabel:'我的',
            tabBarIcon:({focused})=>{
                if(!focused){
                    return(
                        <Image 
                         source={require('../../../../assets/images/tabs/mine_1.png')}
                         style={{width:30,height:30}}
                        />
                    )
                }else{
                    return(
                        <Image 
                         source={require('../../../../assets/images/tabs/mine_2.png')}
                         style={{width:30,height:30}}
                        />
                    )
                }
            }
        }
    }, 
    Nearby:{
        screen:Nearby,
        navigationOptions:{
            tabBarLabel:'附近',
            tabBarIcon:({focused})=>{
                if(!focused){
                    return(
                        <Image 
                         source={require('../../../../assets/images/tabs/nearby_1.png')}
                         style={{width:30,height:30}}
                        />
                    )
                }else{
                    return(
                        <Image 
                         source={require('../../../../assets/images/tabs/nearby_2.png')}
                         style={{width:30,height:30}}
                        />
                    )
                }
            }
        }
    }
}

export default class MainNav extends Component {

    _tabNavRender() {
        const { Find, Home ,Mine,Nearby } = TAB_NAV;
        const tabs = { Home ,Find,Nearby,Mine };
        if (!this.tabNavigator) {
            // 没有就创建
            this.tabNavigator =createAppContainer(createBottomTabNavigator(
                // other screens
                tabs,
                {
                    tabBarComponent: props => (
                        <BottomTabBar {...props} style={{ }} />
                    ),
                }
            ))
        }
        return this.tabNavigator;
    }

    render() {
        const TabNavigator = this._tabNavRender()
        return (<TabNavigator/>)
        
    }
}



const styles = StyleSheet.create({

})
