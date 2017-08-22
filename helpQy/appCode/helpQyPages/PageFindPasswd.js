/**
 * 找回密码页面
 */


import  React,{ Component} from 'react';
import {
    NativeAppEventEmitter,
    Alert,
    PixelRatio,
    ScrollView,
    Text,
    Picker,
    Image,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Dimensions,
    DeviceEventEmitter
} from 'react-native';

import fetchTool from '../utils/fetchTool';
import Loading from '../loading/loading';
import { URLFindPasswd } from '../utils/url';
let { width,height}=Dimensions.get('window');
let ratio = PixelRatio.get();

export default class PageFindPasswd extends Component{
    constructor(props){
        super(props);
        this.state={
            userEmail:null,
            visible:false
        }
    }
    componentDidMount(){

    }
    goBack(){
        this.props.navigation.goBack()
    }
    startFindPassword(){

        //dispatch从父组件一层层传递下来，
        //为了开发方便先注释掉
        if(!this.verify()){
            return Alert.alert(
                '邮箱有误',
                '请检查格式',
                [
                    { text:'好的',onPress:() =>console.log('检查邮箱')}

                ]
            );
        }
        let userAccount={
            userEmail:this.state.userEmail,
        }
        let options={
            url:URLFindPasswd,
            body:JSON.stringify(userAccount)
        };
        //发送请求
        this.setState({
            visible:true
        });

        let  response=fetchTool(options);
        response.then(resp=>{
            //停止转圈圈
            this.setState({
                visible:false
            });
            //console.log(resp);
            //如果注册成功就返回，失败就显示提示
            if (resp.retcode===2000) {

                Alert.alert(
                    '发送成功',
                    '请登录邮箱查收',
                    [
                        { text:'好的',onPress:() => this.goBack()}

                    ]
                );
            }else{
                Alert.alert(
                    '出错了',
                    resp.msg,
                    [
                        { text:'好的',onPress:() =>console.log('找回密码出问题')}

                    ]
                );
            }

        }).catch(err=>{
            this.setState({
                visible:false
            });

        });
    }
    handleEmailChange(event){
        this.setState({
            userEmail:event.nativeEvent.text
        });
    }
    verify(){
        let email=this.state.userEmail;
        let regx=/^[A-Za-zd]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/;
        if(email===null  ||email.length<10 ||email.length>30 || regx.test(email)){
            return false;
        }
        return true;
    }

    render(){

        return(
            <View style={{backgroundColor:'#FFFFFF',flex:1}}>
                <View style={styles.email}>
                    <View style={styles.labelWrap}>
                        <Image source={require('./img/mailbox.png')} style={{width:30,height:30}}/>
                    </View>
                    <View style={styles.inputWrap}>
                        <TextInput
                            style={styles.passwordinput}
                            placeholder='请输入您的邮箱'
                            keyboardType='email-address'
                            maxLength={30}
                            ref='refemail'
                            autoCapitalize='none'
                            clearButtonMode='always'
                            clearTextOnFocus={false}
                            keyboardAppearance='dark'
                            autoCorrect={false}
                            onChange={this.handleEmailChange.bind(this)}/>
                    </View>

                </View>


                {/*<View style={styles.err}>{errTip}</View>*/}
                <View  style={styles.loginwrap} >
                    <TouchableOpacity style={styles.loginTouch}>
                        <Text style={{color:'#FFFFFF'}}>提交</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.glove}>
                    <Text style={{color:'#8a8a8a',fontSize:10,width:width*0.8}}>小提示：密码会发送到您的邮箱！</Text>
                </View>
                <Loading  visible={this.state.visible}/>
            </View>
        );
    }
}

let styles=StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
    },
    header:{
        height:50,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'#61B972',
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
    email:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginTop:20
    },
    containerScroll: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    glove:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#FFFFFF',
        height:44
    },
    emailText:{
        fontSize: 16,
        marginLeft: 10,
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
        borderTopWidth: 1/ratio,
        borderBottomWidth: 1/ratio,
        borderColor: '#ccc',
        backgroundColor:'#FFFFFF'
    },
    labelWrap: {
        height: 45,
        justifyContent: 'center',
        alignItems:'center'
    },
    label: {
        fontSize: 16,
        marginLeft: 10,
        borderWidth: 1,
        borderColor: 'transparent',
        color:'#666666'
    },
    inputWrap: {
        height: 44,
        justifyContent: 'center',
        width:width*0.7,
        borderBottomWidth:1/ratio,
        borderBottomColor:'#CCCCCC'
    },
    passwordinput:{
        height: 45,
        width: 320,
        fontSize: 16,
        paddingLeft: 10,
        color:'#333333',
    },
    err:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginTop:10
    },
    loginwrap:{                        //  按钮总的view
        flexDirection:'row',
        marginTop:20,
        alignItems:'center',
        justifyContent:'center',
        width:width,
        height:46,
    },
    loginTouch:{                         //touch的class
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
        color:'#FFFFFF'
    },
    pickerOk:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingRight:10,
        paddingLeft:10,
        paddingTop:10
    },
    pickerWrapper:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },

});




















