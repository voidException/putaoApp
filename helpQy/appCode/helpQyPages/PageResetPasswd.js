/* 修改密码*/


import{
    StyleSheet,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    NavigatorIOS,
    Navigator,
    RefreshControl,
    View,
    ListView,
    PixelRatio,
    Platform,
    Dimensions,
    TextInput,
    Picker,
    Switch,
    Slider,Alert,AsyncStorage
} from 'react-native';

import React,{ Component } from 'react';
import UploadFile from '../utils/uploadFile';
import {Urlresetpass} from '../utils/url';
import Loading from '../loading/loading';
let ratio = PixelRatio.get();
let lineHeight = Platform.OS === 'ios' ? 14 : 16;
let statusBarHeight = Platform.OS === 'ios' ? 16 : 0;
let width=Dimensions.get('window').width;
let height=Dimensions.get('window').height;

export default class PageResetPassword extends Component{
    constructor(props){
        super(props);
        this.state={
            visible:false,
            notSay:1,
            token:'',
            originPass:'',
            newPass:'',
            againPass:''
        };
    }
    componentDidMount(){
    //在这里异步获取token，赋值给token
        AsyncStorage.getItem("token",(err,result)=>{
            if(result!=null){
                this.setState({
                    token:result
                });
            }
        })
    }

    doCommit(){
        let formData = new FormData();
        formData.append("token",this.state.token);
        formData.append("notSay",this.state.notSay);
        formData.append("originPass", this.state.originPass);
        formData.append("newPass",this.state.newPass);
        formData.append("againPass",this.state.againPass);
        let option={
            url:Urlresetpass,
            body:formData
        };
        this.setState({
            visible:true
        });
        let response=UploadFile(option);
        response.then(resp=>{
            this.setState({
                visible:false
            });
            //console.log(resp);
            if (resp.retcode===2000) {
                AsyncStorage.clear().catch(err=>{
                    //修改密码后，必须使用户重新登录，否则token不变，会导致后续操作验证失败
                })
                Alert.alert(
                    '恭喜你',
                    '修改密码成功',
                    [
                        { text:'好的',onPress:() => this.goBack()}

                    ]
                );


            }else{
                Alert.alert(
                    '出问题了',
                    resp.msg,
                    [
                        {
                            text: '好的'
                        }
                    ]
                );
            }
        }).catch(err=>{
            this.setState({
                visible:false
            });
        });
    }
    getOrginPass(event){
        this.setState({
            originPass:event.nativeEvent.text
        });
    }
    getNewPass(event){
        this.setState({
            newPass:event.nativeEvent.text
        });
    }
    getAgainPass(event){
        this.setState({
            againPass:event.nativeEvent.text
        });
    }
    goBack(){
        this.props.navigation.goBack()
    }
    render(){

        return(
            <View style={styles.container}>

                <View style={styles.commonInputWrapper}>
                    <Text style={styles.authoText}>原始密码:</Text>
                    <TextInput
                        style={styles.authCode}
                        placeholderTextColor={'#CCCCCC'}
                        underlineColorAndroid={'rgba(0,0,0,0)'}
                        keyboardType={'default'}
                        placeholder={'请输入当前密码'}
                        onChange={this.getOrginPass.bind(this)}/>
                </View>
                <View style={styles.commonInputWrapper}>
                    <Text style={styles.authoText}>新的密码:</Text>
                    <TextInput
                        style={styles.authCode}
                        placeholderTextColor={'#CCCCCC'}
                        underlineColorAndroid={'rgba(0,0,0,0)'}
                        keyboardType={'default'}
                        placeholder={'新的密码'}
                        onChange={this.getNewPass.bind(this)}/>
                </View>
                <View style={styles.commonInputWrapper}>
                    <Text style={styles.authoText}>重复新密码:</Text>
                    <TextInput
                        style={styles.authCode}
                        placeholderTextColor={'#CCCCCC'}
                        underlineColorAndroid={'rgba(0,0,0,0)'}
                        keyboardType={'default'}
                        placeholder={'重复新密码'}
                        onChange={this.getAgainPass.bind(this)}/>
                </View>
                <View  style={styles.loginwrap} >
                    <TouchableOpacity style={styles.loginTouch}>
                        <Text style={{color:'#FFFFFF'}}>提交</Text>
                    </TouchableOpacity>
                </View>
                <Loading  visible={this.state.visible}/>
            </View>
        );
    }

}

let  styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F4F4F4',
    },
    header:{
        flexDirection:'row',
        height: 50,
        paddingLeft:4,
        width:width,
        borderBottomWidth:1/ratio,
        borderBottomColor:'#F9F9F9',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:'#43AC43'
    },
    headerDesp:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        paddingLeft:15,
        height:20
    },
    commonStyle:{
        borderBottomWidth:1/ratio,
        borderBottomColor:'#CCCCCC',
        backgroundColor:'#FFFFFF',
        marginTop:2
    },
    affirmStyle:{
        height:120,
        width:width,
        paddingLeft:10,
        fontSize:14,
    },
    commonInputWrapper:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#FFFFFF',
        marginTop:1,
        paddingLeft:20,
        height:44
    },
    authoText:{
        fontSize:14,
        color:'#333333'
    },
    authCode:{
        width:width-60,
        height:44,
        fontSize:14,
        paddingLeft:10,
        color:'#666666',
        textAlign:'left',
        textAlignVertical:'center'
    },
    loginwrap:{                                             //  按钮总的view
        flexDirection:'row',
        marginTop:20,
        alignItems:'center',
        justifyContent:'center',
        width:width,
        height:46,
    },
    loginTouch:{                                                //touch的class
        width:width*0.9,
        height:34,
        backgroundColor:'#1296db',
        borderRadius:15,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    login:{
        fontSize:16,
        width:width,
        textAlign:'center',
    },

});















































