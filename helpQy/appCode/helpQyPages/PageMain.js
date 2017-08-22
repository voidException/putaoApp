
/*
* 这个是主页
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
    Button
} from 'react-native';
import React,{Component} from 'react';
let width=Dimensions.get('window').width;
let height=Dimensions.get('window').height;
let ratio = PixelRatio.get();
class PageMain extends Component{
    constructor(props){
        super(props)
        this.state={
            totalMoney:0,   //总资产
            todayJoin:0,    //今日新加入企业
            totalJoin:0,    //总加入企业
        }
    }
    componentDidMount(){
        //延时获取最新的总资产等信息
    }
    render(){
        console.log("pageMain")
        const { navigate } = this.props.navigation;
        return(
            <View style={styles.container}>
                <View style={styles.top}>
                    <View style={styles.totalMoneyTxt}>
                        <Text>总金额</Text>
                    </View>
                    <View style={styles.totalMoney}>
                        <Text style={styles.moneyNumber}>￥</Text>
                        <Text style={styles.moneyNumber}>8000</Text>
                        <Text>万</Text>
                    </View>
                    <View style={styles.todayAdd}>
                        <View style={styles.todayAddTxt}>
                            <Image source={require('./img/qian.png')} style={{width:20,height:20,marginLeft:15}} resizeMode={'contain'}/>
                            <Text style={styles.todayAddtext}>今日新增</Text>
                            <Text>30</Text>
                            <Text style={styles.todayAddtext}>个</Text>
                        </View>
                        <View style={styles.todayAddTxt}>
                            <Image source={require('./img/zuanshi.jpg')} style={{width:20,height:20,marginLeft:15}} resizeMode={'contain'}/>
                            <Text style={styles.todayAddtext}>共有企业</Text>
                            <Text>200</Text>
                            <Text style={styles.todayAddtext}>家</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.itemWrapper}>
                    <View style={styles.itemLeft}>
                        <View style={styles.txtContainer}>
                            <Text style={styles.upTxt}>员工保障</Text>
                            <Text style={[styles.downTxt,styles.downTxt1]}>30种大病保障</Text>
                        </View>
                        <View style={styles.itemicoWrapper}>
                            <Image source={require('./img/baozhang.png')} style={styles.itemico} resizeMode={'contain'} />
                        </View>
                    </View>
                    <View style={{height:30,borderWidth:1/ratio,borderColor:'#B8B8B8'}}></View>
                    <View style={styles.itemLeft}>
                        <View style={styles.txtContainer}>
                            <Text style={styles.upTxt}>企业增信</Text>
                            <Text style={[styles.downTxt,styles.downTxt2]}>30万的贷款</Text>
                        </View>
                        <View style={styles.itemicoWrapper}>
                            <Image source={require('./img/daikuan.png')} style={styles.itemico} resizeMode={'contain'} />
                        </View>
                    </View>
                </View>
                <View style={[styles.itemWrapper,styles.fillStyle]}>
                    <View style={styles.itemLeft}>
                        <View style={styles.txtContainer}>
                            <Text style={styles.upTxt}>便捷理赔</Text>
                            <Text style={[styles.downTxt,styles.downTxt2]}>公开透明</Text>
                        </View>
                        <View style={styles.itemicoWrapper}>
                            <Image source={require('./img/lipei.png')} style={styles.itemico} resizeMode={'contain'} />
                        </View>
                    </View>
                    <View style={{height:30,borderWidth:1/ratio,borderColor:'#B8B8B8'}}></View>
                    <View style={styles.itemLeft}>
                        <View style={styles.txtContainer}>
                            <Text style={styles.upTxt}>客服电话</Text>
                            <Text style={[styles.downTxt,styles.downTxt1]}>05398888888</Text>
                        </View>
                        <View style={styles.itemicoWrapper}>
                            <Image source={require('./img/mobile.png')} style={styles.itemico} resizeMode={'contain'} />
                        </View>
                    </View>
                </View>
                {/*关于我们和常见问题*/}
                <View style={[styles.itemWrapperDonate,styles.fillStyle2]}>
                    <View style={styles.faq}>
                        <Image source={require('./img/renqun.jpg')} resizeMode={'cover'} style={styles.more}/>
                        <Text   onPress={() => navigate('Chat')} title="Chat with Lucy"  style={styles.texts}>
                            关于我们
                        </Text>
                    </View>
                    <Image source={require('./img/gengduo.png')} resizeMode={'cover'} style={styles.more}/>
                </View>
                <View style={[styles.itemWrapperDonate,styles.fillStyle]}>
                    <View style={styles.faq}>
                        <Image source={require('./img/wenti.jpg')} resizeMode={'cover'} style={styles.more}/>
                        <Text   style={styles.texts}>常见问题</Text>
                    </View>
                    <Image source={require('./img/gengduo.png')} resizeMode={'cover'} style={styles.more}/>
                </View>
            </View>
        );
    }
}
let styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F6F7F9',

    },
    top:{
        height:120,
        backgroundColor:'#fff',
        marginBottom:3,
        flexDirection:'column',
        justifyContent:'flex-end'
    },
    totalMoneyTxt:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    totalMoney:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginBottom:10,
        marginTop:10
    },
    moneyNumber:{
        fontSize:22,
        fontWeight:'bold',
    },
    todayAdd:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        marginBottom:10
    },
    todayAddTxt:{
        width:0.5*width,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    todayAddtext:{
        color:'#686868'
    },

    itemWrapper:{
        height:80,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#fff'
    },
    itemLeft:{
        flexDirection:'row',
        width:width/2,
        height:60,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    itemicoWrapper:{
        height:40,
        width:40,
        flexDirection:'column',
        justifyContent:'center'
    },
    itemico:{
        width:26,
        height:26
    },
    txtContainer:{
        height:40,
        flexDirection:'column',
        justifyContent:'space-between'
    },
    upTxt:{
        fontSize:16,
        fontWeight:'bold',
        color:'#1F1F1F'
    },
    downTxt:{
        fontSize:11,
        color:'#929292'
    },
    downTxt1:{
        color:'#3D77E8'
    },
    downTxt2:{
        color:'#E54E4C'
    },
    fillStyle:{
        marginTop:2
    },
    fillStyle2:{
        marginTop:10
    },
    itemWrapperDonate:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'#ffffff',
        height:45
    },
    fix:{
         borderTopWidth:1/ratio,
         borderTopColor:'#9D9D9D',
    },
    more:{
        width:20,
        height:20,
        marginRight:5
    },
    faq:{
        flexDirection:'row',
        alignItems:'center',
        width:100,
        justifyContent:'space-between',
        marginLeft:10
    }

});

export  default  PageMain;
























