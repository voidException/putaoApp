import React, {Component} from 'react';
import {
    NativeAppEventEmitter,
    PixelRatio,
    ScrollView,
    Text,
    Image,
    Picker,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Dimensions,
    DeviceEventEmitter,
    Alert
} from 'react-native';

import fetchTool from '../utils/fetchTool';
import {URLRegister} from '../utils/url';
import Loading from '../loading/loading';

let {width, height} = Dimensions.get('window');
let ratio = PixelRatio.get();

export default class PageRegister extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userEmail: null,
            userPassword: null,
            nickName: null,
            cityName: null,
            visible: false
        }

    }

    componentDidMount() {

    }

    startRegister() {

        if (!this.verify()) {
            return;
        }//校验
        let userAccount = {
            userEmail: this.state.userEmail,
            userPassword: this.state.userPassword,
            userNickName: this.state.nickName,
            cityName: this.state.cityName
        };

        //发起网络请求
        let options = {
            url: URLRegister,
            body: JSON.stringify(userAccount)
        };
        //显示转圈圈
        this.setState({
            visible: true
        });
        let response = fetchTool(options);
        response.then(resp => {
            //停止转圈圈
            this.setState({
                visible: false
            });
            if (resp.retcode === 2000) {

                Alert.alert(
                    '恭喜你',
                    '注册成功',
                    [
                        {text: '好的', onPress: () => this.goBack()}

                    ]
                );
            } else {
                Alert.alert(
                    'oops',
                    '出错了',
                    [
                        {text: '好的', onPress: () => console.log('注册出错了')}

                    ]
                );
            }
        }).catch(err => {
            //停止转圈圈
            this.setState({
                visible: false
            });

        });


    }

    verify() {
        //输入完密码，点击return时，校验邮箱和密码是否合法
        //设置3个布尔变量，校验通过为true，否则false
        let email = this.state.userEmail;
        let password = this.state.userPassword;
        let nickName = this.state.nickName;
        let regx = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        let regP = /^[0-9|a-z|A-Z]\w{5,17}$/; //6-18w位数字和字母组成的密码
        //let testEm='@567890qwertyui';
        //console.log(regP.test(testEm));
        let Vemail = false;
        let Vpass = false;
        let VnickName = false;

        if (email !== null && email.length < 31 && email.length > 9 && regx.test(email)) {
            Vemail = true;
        }
        if (password !== null && password.length > 5 && password.length < 19 && regP.test(password)) {
            Vpass = true;
        }
        ;

        if (nickName != null && nickName.length > 2 && nickName.length < 31) {
            VnickName = true;
        }
        ;
        if (Vpass && Vemail && VnickName) {
            return true;
        } else {
            return false;
        }

    }

    handleEmailChange(event) {
        this.setState({
            userEmail: event.nativeEvent.text
        });
        //console.log(event.nativeEvent.text);
    }

    handleNickNameChange(event) {
        this.setState({
            nickName: event.nativeEvent.text
        });
    }

    handlePassChange(event) {
        this.setState({
            userPassword: event.nativeEvent.text
        });
    }

    handleCityChange(event) {
        this.setState({
            cityName: event.nativeEvent.text
        });
    }

    goBack() {
        this.props.navigation.goBack() //注册成功，点击ok自动返回
    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>


                <View style={styles.password}>
                    <View style={styles.labelWrap}>
                        <Text style={styles.label}>昵称</Text>
                    </View>
                    <View style={styles.inputWrap}>
                        <TextInput
                            style={styles.passwordinput}
                            placeholder='3至30字符'
                            keyboardType='email-address'
                            maxLength={30}
                            ref='refnickName'
                            autoCapitalize='none'
                            clearButtonMode='always'
                            clearTextOnFocus={false}
                            keyboardAppearance='dark'
                            autoCorrect={false}
                            onChange={this.handleNickNameChange.bind(this)}/>
                    </View>
                </View>

                <View style={styles.password}>
                    <View style={styles.labelWrap}>
                        <Text style={styles.label}>邮箱</Text>
                    </View>
                    <View style={styles.inputWrap}>
                        <TextInput
                            style={styles.passwordinput}
                            placeholder='邮箱长度不得大于30字符'
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
                <View style={styles.password}>
                    <View style={styles.labelWrap}>
                        <Text style={styles.label}>密码</Text>
                    </View>
                    <View style={styles.inputWrap}>
                        <TextInput
                            style={styles.passwordinput}
                            ref='refpass'
                            placeholder='6到18数字和字符'
                            maxLength={30}
                            autoCapitalize='none'
                            clearButtonMode='always'
                            autoCorrect={false}
                            onChange={this.handlePassChange.bind(this)}/>
                    </View>
                </View>

                <View style={styles.password}>
                    <View style={styles.labelWrap}>
                        <Text style={styles.label}>城市</Text>
                    </View>
                    <View style={styles.inputWrap}>
                        <TextInput
                            style={styles.passwordinput}
                            placeholder='如临沂市'
                            maxLength={7}
                            autoCapitalize='none'
                            clearButtonMode='always'
                            autoCorrect={false}
                            onChange={this.handleCityChange.bind(this)}/>
                    </View>
                </View>

                <View style={styles.loginwrap}>
                    <TouchableOpacity style={styles.loginTouch}>
                        <Text style={{color:'#FFFFFF'}}>注册</Text>
                    </TouchableOpacity>
                </View>

                <Loading visible={this.state.visible}/>
            </View>
        );
    }
}

let styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    header: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#61B972',
        paddingLeft: 5,
        paddingRight: 5
    },
    returnButton: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    backImg: {
        height: 24,
        width: 24
    },
    glove: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    containerScroll: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    email: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        height: 44
    },
    emailText: {
        fontSize: 16,
        marginLeft: 10,
        borderWidth: 1,
        borderColor: 'transparent',
        color: '#666666',
    },
    emailinput: {
        width: width - 60,
        height: 44,
        fontSize: 14,
        paddingLeft: 10,
        color: '#666666'
    },
    password: {
        flexDirection: 'row',
        borderColor: '#ccc',
        backgroundColor: '#FFFFFF'
    },
    labelWrap: {
        height: 45,
        justifyContent: 'center',
    },
    label: {
        fontSize: 16,
        marginLeft: 10,
        borderWidth: 1,
        borderColor: 'transparent',
        color: '#666666'
    },
    inputWrap: {
        height: 45,
        justifyContent: 'center',
        borderBottomWidth:1/ratio,
        borderBottomColor:"#CCCCCC"
    },
    passwordinput: {
        height: 45,
        width: 320,
        fontSize: 16,
        paddingLeft: 10,
        color: '#333333'
    },
    err: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    loginwrap: {
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        width: width,
        height: 36,
    },
    login: {
        fontSize: 16,
        width: width,
        textAlign: 'center',
    },
    loginTouch:{
        width:width*0.8,
        height:34,
        backgroundColor:'#1296db',
        borderRadius:15,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    pickerOk: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingRight: 10,
        paddingLeft: 10,
        paddingTop: 10
    },
    pickerWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

});



















