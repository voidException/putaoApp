/**
 * 登录页面，企业互助
 */

import{
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    TouchableHighlight,
    TouchableOpacity,
    NativeAppEventEmitter,
    AsyncStorage,
    View,
    TextInput,
    Dimensions,
    Alert,
    PixelRatio,


} from 'react-native';
import React,{ Component, } from 'react';
import Loading from '../loading/loading';
import { URLLogin } from '../utils/url';
import fetchTool from '../utils/fetchTool';
import UserPhoto from  '../components/userPhoto';
let Platform = require('react-native').Platform;
let {width,height}=Dimensions.get('window');
let ratio = PixelRatio.get();

export default class PageLogin extends Component{
    constructor(props){
        super(props);
        this.state={
            avatarSource:{},
            off:2,
            visible:false,
            userEmail:null,
            userPassword:null,
            showLoading:false
        };
    }
    componentDidMount(){
        console.log(this.props)
    }
    componentWillMount(){

        // NativeAppEventEmitter.addListener('loadingStart', () => {
        //
        //     this.setState({showLoading: true});
        // });
        //
        // NativeAppEventEmitter.addListener('loginSuccess', (emitData) => {
        //     this.setState({
        //         showLoading:false
        //     });
        //     //根据emitData的值判断是否应该存储,应该检查本次登录是否成功
        //     //console.log(emitData);
        //     if (emitData.type==1) {
        //         const storageFun =async ()=>{
        //             let removeCodeIDResult=await AsyncStorage.multiRemove(['userid','userpassword','useremail','token'],(error)=>{
        //                 //console.log(error);
        //             });
        //             //值必须是字符串
        //             let saveDateResult=await AsyncStorage.multiSet([['userid',emitData.userid],['userpassword',emitData.userpassword],['useremail',emitData.useremail],['token',emitData.token]],(errors)=>{
        //
        //             });
        //
        //             return saveDateResult;
        //         }
        //         storageFun().then((result)=>{
        //             //console.log(result);
        //         }).catch(err=>{
        //             console.log(err);
        //             console.log('存储登录信息出错')
        //         })
        //     };
        //
        // });
    }

    verify(){ //检验邮箱密码是不是符合要求
        //输入完密码，点击return时，校验邮箱和密码是否合法
        //设置3个布尔变量，校验通过为true，否则false
        let email=this.state.userEmail;
        let password=this.state.userPassword;

        let regx=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        let regP=/^[0-9|a-z|A-Z]\w{5,17}$/; //6-18w位数字和字母组成的密码
        //let testEm='@567890qwertyui';
        //console.log(regP.test(testEm));
        let Vemail=false;
        let Vpass=false;

        if(email!==null && email.length<31 && email.length>9 && regx.test(email)){
            Vemail=true;
        }
        if (password!==null && password.length>5 && password.length<19 && regP.test(password)) {
            Vpass=true;
        };

        if (Vpass && Vemail ) {
            return true;
        }else{
            return false;
        }
    }
    goLogin(){
       if(!this.verify()){
           return
       }
        //显示转圈圈
        this.setState({
            visible:true
        });

        let userAccount={
            userEmail:this.state.userEmail,
            userPassword:this.state.userPassword,
        };

        let options={
            url:URLLogin,
            body: JSON.stringify(userAccount)
        };

        let  response=fetchTool(options);
        response.then(resp=>{

            if (resp.retcode===2000) {
                NativeAppEventEmitter.emit('loginEmitter', {//这里面应该把用户的头像传过去
                    usernickname:resp.data.usernickname,
                    userPhoto:resp.data.userphoto,
                });
                // //存储数据
                // AsyncStorage.setItem("token",resp.data.backupfour,(err)=>{
                //  //console.log(err)
                // });
                AsyncStorage.multiSet([
                        ['usertoken',resp.data.backupfour],
                        ['useruuid',resp.data.useruuid],
                        ['usernickname',resp.data.usernickname],
                        ['userPhoto',resp.data.userphoto],

                    ],(errors)=>{

                });

                Alert.alert(
                    '恭喜你',
                    '登录成功',
                    [
                        { text:'好的',onPress:() => this.goBack()}

                    ]
                );
            }else{
                Alert.alert(
                    'oops!',
                    '出错了',
                    [
                        { text:'好的',onPress:() =>console.log('注册出错了')}

                    ]
                );
            }
            //停止转圈圈
            this.setState({
                visible:false
            });
        }).catch(err=>{
            //停止转圈圈
            this.setState({
                visible:false
            });

        });
    }
    goZhuCe(){
        this.props.navigation.navigate('PageR\egister');
    }
    goFindPasswordPage(){ //找回密码
        this.props.navigation.navigate('PageFindPasswd');
    }
    handleEmailChange(event){
        this.setState({
            userEmail:event.nativeEvent.text
        });
    }
    handlePassChange(event){
        this.setState({
            userPassword:event.nativeEvent.text
        });
    }
    goBack(){
        this.props.navigation.goBack()
    }
    render(){
        //把这里的根View 换成ScrollView应该可以在弹出键盘的时候上移
        return(

            <View style={styles.container}>
                <View style={styles.userPhoto}>
                    <UserPhoto />
                </View>
                <Image    source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}    resizeMode={'contain'}  />

                <View style={styles.email}>
                    <View style={styles.labelWrap}>
                        <Image source={require('./img/mailbox.png')} style={{width:30,height:30}}/>
                    </View>
                    <View style={styles.inputWrap}>
                        <TextInput
                            style={styles.passwordinput}
                            placeholder='输入您注册的邮箱'
                            keyboardType='email-address'
                            maxLength={30}
                            ref='refemail'
                            autoCapitalize='none'
                            clearButtonMode='always'
                            clearTextOnFocus={false}
                            keyboardAppearance='dark'
                            autoCorrect={false}
                            onChange={this.handleEmailChange.bind(this)}
                            />
                    </View>
                </View>
                <View style={styles.password}>
                    <View style={styles.labelWrap}>
                        <Image source={require('./img/password.png')}  style={{width:30,height:30}}/>
                    </View>
                    <View style={styles.inputWrap}>
                        <TextInput
                            style={styles.passwordinput}
                            ref='refpass'
                            maxLength={18}
                            placeholder={'6到18数字和字符密码'}
                            autoCapitalize='none'
                            clearButtonMode='always'
                            autoCorrect={false}
                            onChange={this.handlePassChange.bind(this)}
                            />
                    </View>
                </View>

                <View  style={styles.loginwrap} >
                    <TouchableOpacity style={styles.loginTouch} onPress={this.goLogin.bind(this)}>
                        <Text style={{color:'#FFFFFF'}}>登录</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.bottom}>
                    <Text  onPress={this.goZhuCe.bind(this)} style={{color:'#1296db'}}>还没注册？</Text>
                    <Text  style={{color:'#1296db'}}>|  </Text>
                    <Text onPress={this.goFindPasswordPage.bind(this)} style={{color:'#1296db'}}>忘记密码？</Text>
                </View>
                <Loading visible={this.state.visible} />
            </View>

        );
    }
}

let styles=StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        backgroundColor:'#FFFFFF'
    },
    userPhoto:{
        justifyContent:'flex-start',
        alignItems:'center',
        marginTop:20
    },

    uploadAvatar:{
        width:100,
        height:100
    },
    bottom:{
        flex:1,
        flexDirection:'row',
        alignItems:'flex-end',
        justifyContent:'space-around',
        marginBottom:20,
    },
    email:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#FFFFFF',
        height:60,
        width:width*0.9,
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
    },
    emailText:{
        fontSize: 16,
        marginLeft: 50,
        borderWidth: 1,
        borderColor: 'transparent',
        color:'#666666'
    },
    emailinput:{
        width:width-60,
        height:44,
        fontSize:14,
        paddingLeft:10,
        color:'#666666'

    },
    password:{
        flexDirection: 'row',
        //borderTopWidth: 1/ratio,
        //borderBottomWidth: 1/ratio,
        borderColor: '#ccc',
        backgroundColor:'#FFFFFF',
        width:width*0.9,
        height:60,
        justifyContent:'center',
        borderBottomLeftRadius:5,
        borderTopRightRadius:5,
    },
    labelWrap: {
        height: 45,
        justifyContent: 'center',
    },
    label: {
        fontSize: 16,
        marginLeft: 50,
        borderWidth: 1,
        borderColor: 'transparent',
        color:'#666666'
    },
    inputWrap: {
        borderBottomColor:'#CCCCCC',
        backgroundColor:'#FFFFFF',
        height: 45,
        justifyContent: 'center',
        borderBottomWidth:1/ratio
    },
    passwordinput:{
        height: 60,
        width: width*0.7,
        fontSize: 16,
        paddingLeft: 10,
    },
    err:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginTop:10
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
        width:width*0.8,
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

    modalContainer:{
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
    },
    innerContainer: {
        flexDirection:'column',
        justifyContent:'center',
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor:'#FFFFFF',
        height:100,
        width:200,
    },

});

