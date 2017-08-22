/**
 * 暂时为修改密码、清除缓存、上传公司log等
 *
 */
import{
    StyleSheet,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    NavigatorIOS,
    RefreshControl,
    View,
    ListView,
    PixelRatio,
    Platform,
    Dimensions,
    TextInput,
    Picker,
    Switch,
    Slider,
    Alert,
    NativeAppEventEmitter,
    AsyncStorage
} from 'react-native';

import React,{ Component } from 'react';
let ratio = PixelRatio.get();
let lineHeight = Platform.OS === 'ios' ? 14 : 16;
let statusBarHeight = Platform.OS === 'ios' ? 16 : 0;
let width=Dimensions.get('window').width;
let height=Dimensions.get('window').height;
export  default  class PageSetting extends Component{
    constructor(props){
        super(props);
    }

    goCompleteProfile(){

    }

    goBack(){
    }
    goResetPassword(){
        this.props.navigation.navigate('PageResetPasswd')
    }
    clearCache(){ //暂时没有想好有什么缓存的。
        AsyncStorage.clear().catch(err=>{
            console.log(err);
        });
        Alert.alert(
            '清理成功',
            '',
            [
                { text:'好的',}

            ]
        );
    }
    logOut(){
        AsyncStorage.clear().catch(err=>{
            console.log(err);
        });
        NativeAppEventEmitter.emit('logoutEmitter', {//这里面应该把用户的头像传过去
            usernickname:null,
            userPhoto:'http://onejf30n8.bkt.clouddn.com/zhishunuserPhoto@3x%20.png',
        });
        Alert.alert(
            '退出成功',
            '',
            [
                { text:'好的',onPress:() => this.goBack()}

            ]
        );

    }
    render(){
        return(
            <View style={styles.container}>

                <View style={styles.commonStyle}>
                    <Text onPress={this.goCompleteProfile.bind(this)}>上传头像</Text>
                    <Image source={require('./img/hui_discount_item_rule_arrow.png')} resizeMode={'cover'} style={styles.wrapperImage}/>
                </View>
                <View style={styles.commonStyle}>
                    <Text onPress={this.goResetPassword.bind(this)}>修改密码</Text>
                    <Image source={require('./img/hui_discount_item_rule_arrow.png')} resizeMode={'cover'} style={styles.wrapperImage}/>

                </View>
                <View style={styles.commonStyle}>
                    <Text  onPress={this.clearCache.bind(this)}>清理缓存</Text>
                    <Image source={require('./img/hui_discount_item_rule_arrow.png')} resizeMode={'cover'} style={styles.wrapperImage}/>
                </View>
                <View style={styles.chongzhiWrapper}>
                    <View style={styles.chongzhi}>
                        <Text onPress={this.logOut.bind(this)} style={styles.chongzhiTxt}>退出登录</Text>
                    </View>
                </View>

            </View>
        );
    }
}


let styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F9FFFC',
    },
    head: {
        flexDirection:'row',
        height: 50,
        width:width,
        borderBottomWidth:1/ratio,
        borderBottomColor:'#F9F9F9',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:'#43AC43',
        paddingLeft:5,
        paddingRight:5
    },
    returnButton:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center'
    },
    backImg:{
        height:24,
        width:24
    },
    commonStyle:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        height:40,
        backgroundColor:'#ffffff',
        borderBottomWidth:1/ratio,
        borderBottomColor:'#F4F4F4',
        paddingLeft:10
    },
    wrapperImage:{
        width:15,
        height:15,
        marginRight:10
    },
    chongzhiWrapper:{
        position:'absolute',
        left:0,
        bottom:0,
        marginTop:50,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        width:width,
    },
    chongzhi:{
        borderRadius:5,
        width:width,
        backgroundColor:'#cecece',
        height:40,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    chongzhiTxt:{
        color:'#d95847',
        fontSize:15
    }
});