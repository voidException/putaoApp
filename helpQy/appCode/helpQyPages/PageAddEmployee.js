/**
 * Created by aihaitao on 12/7/2017.
 * 这个是新增员工或者家人，一般是已经加入的。初次加入的走首页
 *
 */
import{
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    ScrollView,
    TouchableHighlight,
    TouchableOpacity,
    Dimensions,
    Navigator,
    RefreshControl,
    View,
    ListView,
    PixelRatio,
    Platform,
    Alert,
    Button,
    TextInput,
    Modal,
    AsyncStorage,
    NativeAppEventEmitter
} from 'react-native';
import React,{Component} from 'react';
import {UrlAddEmployee} from '../utils/url';
import fetchTool from '../utils/fetchTool';
import Loading from  '../loading/loading'
let width=Dimensions.get('window').width;
let height=Dimensions.get('window').height;
let ratio = PixelRatio.get();
export default class PageAddEmployee extends  Component{
    constructor(props){
        super(props);
        this.state = {
            animationType: 'slide',
            modalVisible: false,
            transparent: true,
            userName:null,
            IDNo:null,
            userToken:null,
            useruuid:null,
            visible:false
        };
    }
    componentDidMount(){
        //这里要获取已经加入的人数
    }
    setModalVisible(visible) {
        this.setState({
            modalVisible: visible
        });
    }
    handleNameVerify(event){//对用户名字进行验证，不能是空2-8个字符
        this.setState({
            userName:event.nativeEvent.text
        });
    }
    handleIDNoVerify(event){
        this.setState({
            IDNo:event.nativeEvent.text
        });
    }
    jiaoyan(){
        let userName=this.state.userName;
        let  IDNo=this.state.IDNo;
        let result=true;
        //debugger
        if (userName==null || IDNo==null){
            result=false
            return result;
        }
        if(userName.length<2 || userName.length>8){

            result=false
            return result;
        }
        if(IDNo.length!==18){
            result=false
            return result;
        }
        return result

    }
    goBack(){
        this.props.navigation.goBack()
    }
    doAddEmployee(){
       // console.log(this.jiaoyan());
        let jiaoyanResult=this.jiaoyan();
        if(!jiaoyanResult){
            Alert.alert(
                '提示!',
                '输入有误',
                [
                    { text:'好的',onPress:() =>console.log('')}

                ]
            );
            return
        }
        // loading 动画开始
        // 这里应该判断是不是已经登录了，如果未登录就提示用户登录
        AsyncStorage.multiGet(["usertoken","useruuid"],(error,result)=>{
            console.log(result[0][1]);
            console.log(result[1][1]);

            this.setState({
                userToken:result[0][1],
                useruuid:result[1][1],
            });

            let userAccount={
                token:this.state.userToken,
                userUUID:this.state.useruuid,
                buildrelationdescription:'business',
                accountuuid:this.state.IDNo,
                userName:this.state.userName
            };

            let options={
                url:UrlAddEmployee,
                body: JSON.stringify(userAccount)
            };
            this.setState({
                visible:true
            });
            let  response=fetchTool(options);
            response.then(resp=>{

                if (resp.retcode===2000) {
                    Alert.alert(
                        '提示',
                        '添加成功',
                        [
                            { text:'好的',onPress:() => this.goBack()}

                        ]
                    );
                }else{
                    Alert.alert(
                        'oops!',
                        resp.msg,
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

        });//AsyncStorage

    }
    render(){
        const { params } = this.props.navigation.state;
        return(
            <View style={styles.container}>
                <Text>{params.user}</Text>
                {/*这里是填写保障人信息的地方*/}
                <View style={styles.inputsWrap}>
                    <View style={styles.email}>
                        <View style={styles.labelWrap}>
                            <Text style={styles.emailText}>姓   名</Text>
                        </View>
                        <View style={styles.inputWrap}>
                            <TextInput
                                style={styles.passwordinput}
                                placeholder='输入被保障人姓名'
                                keyboardType='email-address'
                                maxLength={30}
                                ref='refemail'
                                autoCapitalize='none'
                                clearButtonMode='always'
                                clearTextOnFocus={false}
                                keyboardAppearance='dark'
                                autoCorrect={false}
                                onChange={this.handleNameVerify.bind(this)}/>
                        </View>
                    </View>

                    <View style={styles.email}>
                        <View style={styles.labelWrap}>
                            <Text style={styles.emailText}>身份证</Text>
                        </View>
                        <View style={styles.inputWrap}>
                            <TextInput
                                style={styles.passwordinput}
                                placeholder='被保障人的身份证号'
                                keyboardType='email-address'
                                maxLength={30}
                                ref='refemail'
                                autoCapitalize='none'
                                clearButtonMode='always'
                                clearTextOnFocus={false}
                                keyboardAppearance='dark'
                                autoCorrect={false}
                                onChange={this.handleIDNoVerify.bind(this)}/>
                        </View>
                    </View>
                </View>
                <View  style={styles.loginwrap} >
                    <TouchableOpacity style={styles.loginTouch}>
                        <Text style={{color:'#FFFFFF'}}>确认</Text>
                    </TouchableOpacity>
                </View>
                <Loading visible={this.state.visible} />
            </View>
        );
    }
}

let styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEEEEE',
    },
    inputsWrap:{
        margin:10,
        backgroundColor:'#fff',
        marginTop:30,
        borderRadius:10
    },
    email:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#FFFFFF',
        height:44,
        marginTop:30,

    },
    emailText:{
        fontSize: 16,
        marginLeft: 10,
        borderWidth: 1,
        borderColor: 'transparent',
        color:'#666666'
    },

    labelWrap: {
        height: 45,
        justifyContent: 'center',
        width:70
    },
    label: {
        fontSize: 16,
        marginLeft: 10,
        borderWidth: 1,
        borderColor: 'transparent',
        color:'#666666'
    },
    inputWrap: {
        borderBottomColor:'#CCCCCC',
        backgroundColor:'#FFFFFF',
        height: 45,
        justifyContent: 'center',
        borderBottomWidth:1/ratio,
    },
    passwordinput:{
        height: 45,
        width: width-90,
        fontSize: 16,
        paddingLeft: 10,
    },
    selectPayMoneyWrapper:{
        position:'absolute',

        left:0,
        bottom:0,
        height:0.5*height,
        backgroundColor:'#fff',
        width:width,
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
        zIndex:5
    },
    selectPayMoney:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        height:40,
        borderBottomColor:'#cccccc',
        borderBottomWidth:1/ratio,
    },
    tips:{
        flexDirection:'row',
        height:20,
        justifyContent:'center',
        alignItems:'center',
        margin:5
    },
    itemMoneyS:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginLeft:5,
        marginRight:5
    },
    itemMoney:{
        backgroundColor:'#EDEEEF',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        width:80,
        height:60,
        flex:1,
        marginTop:3
    },
    moneySpecial:{
        marginLeft:3,
        marginRight:3
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
        color:'#FFFFFF'
    },

});



















