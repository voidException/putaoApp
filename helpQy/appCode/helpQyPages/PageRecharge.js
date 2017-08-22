/**
 * 充值界面
 *
 */
import{
    StyleSheet,
    Dimensions,
    View,
    TouchableOpacity,
    Text,
    PixelRatio,
    TouchableWithoutFeedback
} from 'react-native';
import React,{Component} from 'react';
import MoneyChoices from './MoneyChoices';
import MyEmployee from "./MyEmployee";
let width=Dimensions.get('window').width;
let height=Dimensions.get('window').height;
let ratio = PixelRatio.get();
export default class PageRecharge extends  Component {
    constructor(props) {
        super(props);
        this.state = {
            theMoneyPay:0,
            flag:0
        };
    }

    componentDidMount() {
    }

    callBack(id) {
        this.setState({
            flag: id
        })
    }

    getCategoryType(type){//通过后台的数据获得具体的类型
        if(type=="little")
            return "少儿健康互助";
        if(type=="young")
            return "中青年抗癌计划";
        if(type=="old")
            return "中老年抗癌计划";
        if(type=="yiwai")
            return "综合意外互助";
        if(type=="staff")
            return "员工大病互助";
        if(type=="employee")
            return "员工意外伤害互助";
    }

    render() {
        const { params } = this.props.navigation.state;
        return (

            <View style={styles.container}>
                <View style={styles.topView}>
                    <View style={styles.TopFontView}>
                        <Text style={styles.TopFont}>充值用户：
                            <Text style={styles.TopFontTitle}>{params.EmployeeMsg.username}</Text>
                        </Text>
                    </View>
                    <View style={styles.TopFontView}>
                        <Text style={styles.TopFont}>互助计划：
                            <Text style={styles.TopFontTitle}>{this.getCategoryType(params.EmployeeMsg.categorytype)}</Text>
                        </Text>
                    </View>
                </View>
                <View style={styles.smallTip}><Text style={{color:'#707070',fontSize:9}}>小提示：请务必确认个人信息的正确性，充值后不可退还！</Text></View>
                <View style={styles.moneyChoicesView}>
                        <MoneyChoices id={9} onCheck={this.callBack.bind(this)} checked={this.state.flag === 9}/>
                        <MoneyChoices id={30} onCheck={this.callBack.bind(this)} checked={this.state.flag === 30}/>
                        <MoneyChoices id={50} onCheck={this.callBack.bind(this)} checked={this.state.flag === 50}/>
                        <MoneyChoices id={150} onCheck={this.callBack.bind(this)} checked={this.state.flag === 150}/>

                </View>
                <View  style={styles.loginwrap} >
                    <TouchableOpacity style={styles.loginTouch}>
                        <Text style={{color:'#FFFFFF'}}>去支付</Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}
let styles=StyleSheet.create({
    container:{
        alignItems:'center',
        flex:1,
        backgroundColor:'#FFFFFF',
    },
    moneyFee:{
        width:width*0.9,
        height:150,
        alignItems:'center',
        justifyContent:'center',
        marginTop:10
    },
    rechargeFeeView:{
        flexDirection:'row',
        height:75,

    },
    loginwrap:{                        //  按钮总的view
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        width:width,
        marginTop:10,
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
    smallTip:{
        flexDirection:'row',
        justifyContent:'flex-start',
        paddingTop:10
    },
    TopFontView:{
        flexDirection:'row',
        alignSelf:'flex-start',
        marginTop:5
    },
    TopFont:{
        color:'#707070',
        fontSize:13
    },
    TopFontTitle:{
        color:'#1296db',
        fontSize:20,
    },
    topView:{
        width:width*0.75,
        marginTop:20
    },
    moneyChoicesView:{
        width:width,
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'center',
        paddingTop:15
    },
});



















