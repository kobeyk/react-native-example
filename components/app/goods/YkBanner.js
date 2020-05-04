import React, { Component } from 'react'
import {
    View,
    Image,
    StyleSheet,
    Text,
    Dimensions
} from 'react-native'
import Swiper from 'react-native-swiper'

const screenW = Dimensions.get('window').width

// 轮播图、横幅、头部
export default class YkBanner extends Component {

    // 注意，props一定要大写==> Props
    static defaultProps = {
        // 轮播图项目，外部传进来,然后根据传进来的属性对象，进行组件渲染
        swiperImages:null
    }

    _renderSwiperItem=()=>{

        console.log('进来了',this.props.swiperItems)
        // 1、先判断有没有数据，如果null，即还是初始状态的话，给个默认的Image
        if(this.props.swiperImages === null ||  this.props.swiperImages.icon_list === null){
            return(
                <View>
                    <Image source={{uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588614383609&di=da74c0b6e3a7647ce543f3cc0d937cd3&imgtype=0&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20180801%2F23%2F1533137122-vOrfsEHhpK.jpeg'}}
                    style={styles.swiperImage} />
                </View>
            )
        }

        // 2、定义轮播图组件数组，下面用
        let itemArray = []

        // 3、遍历，假设父组件传进来的props的值就是轮播图数据列表
        this.props.swiperImages.map((item,index)=>{
           this._putSwiperItem(itemArray,item,index)
        })

        return itemArray;

    }

    _putSwiperItem(itemArray,item,index){
        itemArray.push(
                <View key = {index}>
                    <Image source={{uri:item.icon_url}}
                      style={styles.swiperImage}
                    />
                </View>
        )
    }

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
                {this._renderSwiperItem()}
            </Swiper>
        )
    }
}

const styles = StyleSheet.create({
    wrapper:{

    },
    swiperImage:{
        width:screenW,
        height:230,
        // 图片拉伸，防止宽高设置不合理造成的图片内容显示不全
        resizeMode:'stretch'
    }
})
