/**
 * 使用红包界面
 *
 */
import {
    StyleSheet,
    Dimensions,
    View,
    TouchableOpacity,
    Text,
    PixelRatio,
    TextInput,
    TouchableWithoutFeedback,
    Image,
} from 'react-native';
import React, {Component} from 'react';
import CheckBox from './CheckBox';
import {UrluseMyRedMoney} from "../utils/url";
import fetchTool from "../utils/fetchTool";

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;
let ratio = PixelRatio.get();
export default class PageUseRedMoney extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flag: 0,
            truename:'',
            IDCardNumber:'',
        };
    }

    componentDidMount() {
    }

    getCategoryType(type) {//通过后台的数据获得具体的类型
        if (type == "little")
            return "少儿健康互助";
        if (type == "young")
            return "中青年抗癌计划";
        if (type == "old")
            return "中老年抗癌计划";
        if (type == "yiwai")
            return "综合意外互助";
        if (type == "staff")
            return "员工大病互助";
        if (type == "employee")
            return "员工意外伤害互助";
    }

    getTrueName(event) {
        this.setState({
            truename:event.nativeEvent.text,
        })
    };

    getIDNumber() {
        this.setState({
            IDCardNumber:event.nativeEvent.text,
        })
    }

    chooseType(param) {

    }

    callBack(id) {
        this.setState({
            flag: id
        })
    }

    onPress(redmoneyid,useruuid){
        // let redMoney={
        //     useruuid:'94111BD33D3F474590C535C0BE24905B',
        //     redmoneydate:'2030-01-01',//读取最后一个列表的时间
        // };
        // let options={
        //     url:UrlgetMyRedMoney,
        //     body:JSON.stringify(redMoney)
        // };
        // let response=fetchTool(options);
        // console.log(this.state.animating,this.state.haveDataOrNoData+"Szuimh")
        // response.then(resp=>{
        let useRedMoneyParam={
            useruuid:useruuid,
            username:this.state.truename,
            useridentity:this.state.IDCardNumber,
            redmoneyid:redmoneyid,
            categorytype:this.chooseType(this.state.flag)
        };
        console.log(useRedMoneyParam+"传回后台参数")
        let options={
            url:UrluseMyRedMoney,
            body:JSON.stringify(useRedMoneyParam)
        };
        let response=fetchTool(options);

        console.log(useRedMoneyParam.useruuid,useRedMoneyParam.username,useRedMoneyParam.redmoneyid,useRedMoneyParam.useridentity+"参数检查")

        console.log(this.state.flag+"类型选择")
        response.then(resp=>{

            console.log(resp.result+"红包使用成功")
        })
    }

    chooseType(i){
        if(i==1){
            return "little"
        }
        if(i==2){
            return "young"
        }
        if(i==3){
            return "old"
        }
        if(i==4){
            return "yiwai"
        }
        if(i==5){
            return "employee"
        }
        if(i==6){
            return "staff"
        }
    }

    render() {
        const {params} = this.props.navigation.state;
        return (
            <View style={styles.container}>
                <Text>useruuid:{params.RedMoney.useruuid}</Text>
                <Text>uuid:{params.RedMoney.redmoneyid}</Text>
                <View style={styles.topView}><Text style={{color: '#707070', fontSize: 12}}>请输入信息来使用红包</Text></View>
                <View style={styles.messageInput}>
                        <Image source={require('./img/username.png')}  style={{width:25,height:25}}/>
                    <View style={styles.inputWrap}>
                        <TextInput
                            style={styles.nameInput}
                            ref='refpass'
                            maxLength={18}
                            placeholder={'请输入真实姓名'}
                            autoCapitalize='none'
                            clearButtonMode='always'
                            autoCorrect={false}
                            onChangeText={(truename)=>this.setState({truename})}
                        />
                    </View>
                </View>
                <View style={styles.messageInput}>
                    <Image source={require('./img/IDCard.png')}  style={{width:30,height:30}}/>
                    <View style={styles.inputWrap}>
                        <TextInput
                            style={styles.nameInput}
                            ref='refpass'
                            maxLength={18}
                            placeholder={'请输入身份证号'}
                            autoCapitalize='none'
                            clearButtonMode='always'
                            autoCorrect={false}
                            onChangeText={(IDCardNumber)=>this.setState({IDCardNumber})}
                        />
                    </View>
                </View>
                <View style={styles.allChoiceView}>
                    <View style={styles.choiceView}>
                        <CheckBox id={1} onCheck={this.callBack.bind(this)} radius={16}
                                  checked={this.state.flag === 1}/>
                        <Text style={{paddingLeft: 5, color: '#1296db', fontSize: 13}}>少儿健康互助计划</Text>
                    </View>
                    <View style={styles.choiceView}>
                        <CheckBox id={2} onCheck={this.callBack.bind(this)} radius={16}
                                  checked={this.state.flag === 2}/>
                        <Text style={{paddingLeft: 5, color: '#1296db', fontSize: 13}}>中青年抗癌计划</Text>
                    </View>
                    <View style={styles.choiceView}>
                        <CheckBox id={3} onCheck={this.callBack.bind(this)} radius={16}
                                  checked={this.state.flag === 3}/>
                        <Text style={{paddingLeft: 5, color: '#1296db', fontSize: 13}}>中老年抗癌计划</Text>
                    </View>
                    <View style={styles.choiceView}>
                        <CheckBox id={4} onCheck={this.callBack.bind(this)} radius={16}
                                  checked={this.state.flag === 4}/>
                        <Text style={{paddingLeft: 5, color: '#1296db', fontSize: 13}}>综合意外互助计划</Text>
                    </View>
                    <View style={styles.choiceView}>
                        <CheckBox id={5} onCheck={this.callBack.bind(this)} radius={16}
                                  checked={this.state.flag === 5}/>
                        <Text style={{paddingLeft: 5, color: '#1296db', fontSize: 13}}>企业员工互助</Text>
                    </View>
                    <View style={styles.choiceView}>
                        <CheckBox id={6} onCheck={this.callBack.bind(this)} radius={16}
                                  checked={this.state.flag === 6}/>
                        <Text style={{paddingLeft: 5, color: '#1296db', fontSize: 13}}>企业员工大病互助</Text>
                    </View>
                </View>
                <View>
                    <Text style={{color: '#707070', fontSize: 9}}>小提示：请仔细查看上面填写的信息，保证无误！</Text>
                </View>
                <View style={styles.loginwrap}>
                    <TouchableOpacity style={styles.loginTouch} onPress={this.onPress.bind(this,params.RedMoney.redmoneyid,params.RedMoney.useruuid)}>
                        <Text style={{color: '#FFFFFF'}}>提交</Text>
                    </TouchableOpacity>
                </View>

                <View></View>
                <View></View>
            </View>
        );
    }
}
let styles = StyleSheet.create({
    container: {
        width: width,
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingLeft:30
    },
    topView: {},
    nameText: {
        color: '#707070',
        fontSize: 15,
        width: 70
    },
    nameInput: {
        width: 240,
        height: 40,
        borderBottomColor:'#1296db',
        borderBottomWidth:1/ratio
    },
    messageInput: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems:'center',
    },
    checkButton: {
        width: 16,
        height: 16,
        borderRadius: 8,
        borderColor: 'black',
        borderWidth: 2
    },
    typeChooseView: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        height: 30
    },
    choiceView: {
        flexDirection: 'row',
        width: width,
        height: 30,
        alignItems: 'center'
    },
    allChoiceView: {
        width: width,

        justifyContent: 'space-around'
    },
    loginwrap: {                        //  按钮总的view
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center',
        width: width,
        height: 46,
    },
    loginTouch: {                         //touch的class
        width: width * 0.8,
        height: 34,
        backgroundColor: '#1296db',
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputWrap: {
        borderBottomColor:'#CCCCCC',
        backgroundColor:'#FFFFFF',
        height: 45,
        justifyContent: 'center',
        borderBottomWidth:1/ratio
    },
});



















