/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  StyleSheet
} from 'react-native';

// import YkImage from './components/YkImage'
// import YkImageNike from './components/YkImageNike'
// import YkText from './components/YkText'
// import YkTouchable from './components/YkTouchable'
// import YkFlexDemo from './components/YkFlexDemo'
// import YkScrollView from './components/YkScrollView'
// import YkRefresh from './components/YkRefresh'
// import YkFlatList from './components/YkFlatList'
// import YkSwiper from './components/YkSwiper'
// import YkBooksFlatList from './components/YkBooksFlatList'
// import YkSectionList from './components/YkSectionList'
// import YkNet from './components/YkNet'
import YkHome from './components/app/goods/YkHome'

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.mainViewStyle}> 
        <View>
         {/* <Text style={{fontSize:40}}>你好，朋友，
         欢迎打开我的第一个移动端App，祝你玩的愉快！</Text> */}
        </View>
        {/* 1、Image组件的简单应用 */}
        {/* <YkImage/> */}
        {/* 2、mage组件结合九宫格布局实现鞋子的信息展示 */}
        {/* <YkImageNike/> */}
        {/* 3、TextInput输入框组件的运用 */}
        {/* <YkText/> */}
        {/* 4、TouchableOpacity组件和Button组件的应用 */}
        {/* <YkTouchable/> */}
         {/* 5、以鞋子的添加和删除为例，动态实现九宫格布局 */}
        {/* <YkFlexDemo/> */}
        {/* 6、滑动视图组件的运用，如水平滑动 */}
        {/* <YkScrollView/> */}
        {/* 7、下拉列表刷新功能的运用 */}
        {/* <YkRefresh/> */}
        {/* 8、高性能列表组件的运用 */}
        {/* <YkFlatList/> */}
        {/* 9、第三方轮播图组件的的导入及使用 */}
        {/* <YkSwiper/> */}
        {/* 10、实现图书售卖信息的高性能的列表展示，数据来自当当网 */}
        {/* <YkBooksFlatList/>     */}  
        {/* 11、实现列表的分组，以NBA球队和球员为案例 */}
        {/* <YkSectionList/>     */}
        {/* 12、利用自身的fetch组件，实现网络数据的get请求 */}
        {/* <YkNet/>   */}
        {/* 13、利用axios，获取网络数据，并构建简单的商品信息展示应用 */}
        <YkHome/>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  mainViewStyle:{
    flex:1,
    backgroundColor:'white'
  }
})

export default App;

