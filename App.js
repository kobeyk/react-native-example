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
import YkNet from './components/YkNet'

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.mainViewStyle}> 
        <View>
         {/* <Text style={{fontSize:40}}>你好，朋友，
         欢迎打开我的第一个移动端App，祝你玩的愉快！</Text> */}
        </View>
        {/* <YkImage/> */}
        {/* <YkImageNike/> */}
        {/* <YkText/> */}
        {/* <YkTouchable/> */}
        {/* <YkFlexDemo/> */}
        {/* <YkScrollView/> */}
        {/* <YkRefresh/> */}
        {/* <YkFlatList/> */}
        {/* <YkSwiper/> */}
        {/* <YkBooksFlatList/>     */}  
        {/* <YkSectionList/>     */}
        <YkNet/>  
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

