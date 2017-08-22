/**
 * Created by aihaitao on 7/7/2017.
 */

import{
    StyleSheet,
    View,
    PixelRatio,
    Platform,
    Dimensions,
    WebView,
    Text,
    TouchableOpacity,
} from 'react-native';

import React,{ Component } from 'react';
let ratio = PixelRatio.get();
let lineHeight = Platform.OS === 'ios' ? 14 : 16;
let statusBarHeight = Platform.OS === 'ios' ? 16 : 0;
let width=Dimensions.get('window').width;
let height=Dimensions.get('window').height;
export  default  class ChildrenOverView extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        console.log(this.props);
    }
    goBack(){
        this.props.navigation.goBack()
    }
    render(){
        return(
            <View style={styles.container}>
                <WebView source={{uri:'http://101.200.33.138/mobilehtml/ChildrenOverView.html'}}/>
            </View>
        );
    }
}

let styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F9FFFC',
    }
});