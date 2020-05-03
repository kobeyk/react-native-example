import React, { Component } from 'react'
import {
    SectionList,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    View
} from 'react-native'

import YkSwiper from './YkSwiper'
import YkFooter from './YkFooter'

const sectionDatas = require('../assets/datas/nba.json')
export default class YkSectionList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sectionItems: sectionDatas.items
        };
    }

    _renderItem(rowItem, rowIndex, section) {
        return (
            <TouchableOpacity key={rowIndex}
                style={styles.rowItem}
                onPress={()=>alert(rowItem.name)}
            >
                {/* 左边图片 */}
                <Image source={{ uri: rowItem.avatar }} style={styles.img} />
                {/* 右边视图 */}
                <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 22, marginLeft: 15 }}>{rowItem.name}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    _renderSectionHeader(sectionTitle) {
        return (
            <View style={styles.sectionTitle}> 
                <Text style={{
                    fontWeight: 'bold', color: 'red',
                    fontSize: 30
                }}>{sectionTitle}</Text>
            </View>

        )
    }

    render() {
        console.log(this.state.sectionItems)
        return (
            <SectionList
                renderItem={({ item, index, section }) => this._renderItem(item, index, section)}
                renderSectionHeader={({ section: { title } }) => this._renderSectionHeader(title)}
                sections={this.state.sectionItems}
                keyExtractor={(item, index) => item + index}
                ListHeaderComponent={<YkSwiper/>}
                ListFooterComponent={<YkFooter/>}
            />
        )
    }
}

const styles = StyleSheet.create({
    sectionTitle:{
        justifyContent:'center',
        paddingLeft:10,
        backgroundColor:'#00CED1',
        height:40,
        marginTop:10
    },
    rowItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        borderBottomWidth:1,
        borderBottomColor:'red',
        height:170
    },
    img:{
         width: 150, 
         height: 150 ,
         marginRight:10,
         marginLeft:10
        }
})
