import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
export default class YkFooter extends Component {
    render() {
        return (
            <View style={styles.footer}>
                <Text style={{fontSize:20,color:'blue'}}>
                    版权所有：Appleyk@2020-2030
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    footer:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:10
    }
})
