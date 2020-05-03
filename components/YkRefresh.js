import React, { Component } from 'react'
import {
    View,
    ScrollView,
    StyleSheet,
    RefreshControl,
    Dimensions,
    Text
} from 'react-native'

const screenW = Dimensions.get('window').width

export default class YkRefresh extends Component {
    constructor(){
        super()
        this.state={
            rowDataArray : Array.from(new Array(30)).map(
                (value,index)=>({
                    title:'初始化数据 - '+index
                })
            ),
            //  是否显示loading
            isRefreshing:false,
            loadingCount:0
        }
    }

    _onRefresh=()=>{
        //设置刷新状态
        this.setState({
            isRefreshing:true
        })
        // 模拟服务器请求数据
        setTimeout(() => {
            // 每次拉取五条数据
            let newDatas = Array.from(new Array(5)).map(
                (value,index)=>({
                    title:'我是拉下来的数据'+ (this.state.loadingCount+index)
                })           
            ).concat(this.state.rowDataArray);
            // 更新状态
            this.setState({
                rowDataArray:newDatas,
                isRefreshing:false,
                loadingCount:this.state.loadingCount+5
            })
        }, 1500);
    }

    render() {
        const rowDatas = this.state.rowDataArray.map(
            (value,index)=>(
                <Row data={value} key={index}/>
            )
        )
        return (
            <ScrollView
            refreshControl={
                <RefreshControl refreshing={this.state.isRefreshing}
                onRefresh = {this._onRefresh} 
                title='客观稍等，您要的数据马上来....'
                titleColor={'red'}
                colors={['red','green']}
                />
            }
            >
              {rowDatas}
            </ScrollView>
        )
    }
}

class Row extends Component{
    static defaultProps = {
        data:{}
    }
    render(){
        return(
            <View style={styles.mainView}>
                <Text>{this.props.data.title}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainView:{
        width:screenW,
        height:40,
        borderColor:'red',
        borderBottomWidth:1,
        justifyContent:'center'
    }
})