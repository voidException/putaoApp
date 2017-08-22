
import {
	Text,
	View,
	Button,
    TabBarIOS,
    StyleSheet,
    Dimensions,
    Image,
    Platform
} from 'react-native';
import React,{Component} from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import  ChatScreen from './chatScreen';
//import  PageMain from  '../helpQyPages/PageMain';
import  PublicList from '../helpQyPages/PublicList';
import  PublicItem from '../helpQyPages/PublicItem';
import  AwardList  from  '../helpQyPages/AwardList';
import  AwardItem  from  '../helpQyPages/AwardItem';
import  WelfareAuth from  '../pages/components/welfareAuth';
import  PageNeedCredit from '../helpQyPages/PageNeedCredit';
import  PageApplyHelp from '../helpQyPages/PageApplyHelp';
import  MyEmployee from '../helpQyPages/MyEmployee';
import  PageAddEmployee from  '../helpQyPages/PageAddEmployee';
import  PageResetPasswd from  '../helpQyPages/PageResetPasswd';
import  PageSetting from '../helpQyPages/PageSetting';
import  PageFindPasswd from  '../helpQyPages/PageFindPasswd';
import  PageLogin from  '../helpQyPages/PageLogin';
import  PageRegister from  '../helpQyPages/PageRegister';
import  PageJoin from  '../helpQyPages/PageJoin';
import  PageWo  from  '../helpQyPages/PageWo';
import  PageZhuYe from '../helpQyPages/PageZhuYe'; //主页
import  FAQ from '../helpQyPages/webView/FAQ'; //常见问题
import  AboutUs from '../helpQyPages/webView/aboutUs'; //关于我们
import  Qiyezhengxin  from  '../helpQyPages/webView/Qiyezhengxin';
import  ClaimsHelp from  '../helpQyPages/webView/ClaimsHelp';
import  ChildrenOverView from '../helpQyPages/webView/ChildrenOverView';
import  ChildrenCondition from '../helpQyPages/webView/ChildrenCondition';
import  YoungOverView from '../helpQyPages/webView/YoungOverView';
import  YoungCondition from  '../helpQyPages/webView/YoungCondition';
import  OldOverView from  '../helpQyPages/webView/OldOverView';
import  OldCondition from  '../helpQyPages/webView/OldCondition';
import  ZongheOverView from  '../helpQyPages/webView/ZongheOverView';
import  ZongheCondition from  '../helpQyPages/webView/ZongheCondition';
import  QiyeDaBingOverView from '../helpQyPages/webView/QiyeDaBingOverView';
import  QiyeDaBingCondition from '../helpQyPages/webView/QiyeDaBingCondition';
import  QiyeHarmOverView from '../helpQyPages/webView/QiyeHarmOverView';
import  QiyeHarmCondition from '../helpQyPages/webView/QiyeHarmCondition';
import  MyEmployeeList from '../helpQyPages/MyEmployeeList';
import  MyhomeFlatList from '../helpQyPages/MyhomeFlatList';
import  PageFind from '../helpQyPages/PageFind';
import RedMoneyList from "../helpQyPages/RedMoneyList";
import PageDescriptionOfGongshi from '../helpQyPages/PageDescriptionOfGongshi';
import PageRecharge from '../helpQyPages/PageRecharge';
import PageUseRedMoney from "../helpQyPages/PageUseRedMoney";

var height = Dimensions.get('window').height - 70;


const TabNav = TabNavigator(
    {
        PageZhuye: {
            screen: PageZhuYe,  //PageZhuYe
            path: '/',
            tabBarVisible:true,
            navigationOptions: {
                title: Platform.OS === 'ios' ? '主页' : '',
                tabBarLabel: '主页',
                tabBarIcon: ({ tintColor }) => (
                    <Image
                        source={require('./img/shouye.png')}
                        style={[styles.icon, {tintColor: tintColor}]}
                    />
                ),
                headerStyle:{//StackNavigator下面的Screen Navigation Options找到的文档
                    backgroundColor:'#fff',
                    height:10
                }
            },
        },
        PageGongshi: {
            screen: PageFind,  //PageFind
            path: '/public',
            tabBarVisible:true,
            navigationOptions: {
                title: Platform.OS === 'ios' ? '发现' : '',
                tabBarLabel: '发现',
                tabBarIcon: ({ tintColor }) => (
                    <Image
                        source={require('./img/faxian.png')}
                        style={[styles.icon, {tintColor: tintColor}]}
                    />
                ),
                headerStyle:{//StackNavigator下面的Screen Navigation Options找到的文档
                    backgroundColor:'#fff',
                    height:10
                }
            },
        },

        PageWo: {
            screen: PageWo, //PageWo
            path: '/pagewo',
            navigationOptions: {
                title: Platform.OS === 'ios' ? '我' : '',
                tabBarLabel: '我',
                tabBarVisible:true,
                headerTintColor: '#fff', //管头部颜色的
                style:{
                    backgroundColor:'#000'
                },
                tabBarIcon: ({ tintColor }) => (
                    <Image
                        source={require('./img/wo.png')}
                        style={[styles.icon, {tintColor: tintColor}]}
                    />
                ),
                // headerRight: (
                //     <Button
                //         title='设置'
                //         onPress={() =>{console.log(this,props)}}
                //     />
                // ),
                headerStyle:{//StackNavigator下面的Screen Navigation Options找到的文档
                    backgroundColor:'#fff',
                    height:10
                }

            },
        },
    },//RouteConfigs
    {
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: false,
        tabBarOptions: { //控制底部激活时的颜色
            activeTintColor: '#1296db',
            //activeBackgroundColor:'#000',
            showIcon:true,
            upperCaseLabel:false,
            inactiveTintColor:'#929292',
            indicatorStyle:{
                display:'none',
            },
            labelStyle: {
                fontSize: 12,
                margin:0
            },
            style: {
                backgroundColor: '#f4f4f4',

            },
            tabStyle:{
                justifyContent:'flex-end'
            }
        },
    }//TabNavigatorConfig
);

const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    },
});

const HomeScreen = StackNavigator({
    Root: {
        screen: TabNav,
    },
    NotifSettings: {
        screen: PageWo,
        navigationOptions: {
            title: 'Notifications',
        },
    },
    Profile: {
        screen: ChatScreen,
        path: '/people/:name',
        navigationOptions: {
            title: 'Profile',
        }
    },
    AwardList:{
        screen:AwardList
    },
    PublicList:{
        screen:PublicList
    },
    PageNeedCredit:{
        screen:PageNeedCredit
    },
    WelfareAuth:{
        screen:WelfareAuth
    },
    PageApplyHelp:{
        screen:PageApplyHelp
    },
    MyEmployee:{
        screen:MyEmployee
    },
    MyEmployeeList:{
        screen:MyEmployeeList
    },
    PageAddEmployee:{
        screen:PageAddEmployee
    },
    PageResetPasswd:{
        screen:PageResetPasswd
    },
    PageFindPasswd:{
        screen:PageFindPasswd
    },
    PageSetting:{
        screen:PageSetting
    },
    PageLogin:{
        screen:PageLogin
    },
    PageRegister:{
        screen:PageRegister
    },
    PageJoin:{
        screen:PageJoin
    },
    FAQ:{
        screen:FAQ
    },
    AboutUs:{
        screen:AboutUs
    },
    Qiyezhengxin:{
        screen:Qiyezhengxin
    },
    ClaimsHelp:{
        screen:ClaimsHelp
    },
    ChildrenOverView:{
        screen:ChildrenOverView
    },
    ChildrenCondition:{
        screen:ChildrenCondition
    },
    YoungOverView:{
        screen:YoungOverView
    },
    YoungCondition:{
        screen:YoungCondition
    },
    OldOverView:{
        screen:OldOverView
    },
    OldCondition:{
        screen:OldCondition
    },
    ZongheOverView:{
        screen:ZongheOverView
    },
    ZongheCondition:{
        screen:ZongheCondition
    },
    QiyeHarmOverView:{
        screen:QiyeHarmOverView
    },
    QiyeHarmCondition:{
        screen:QiyeHarmCondition
    },
    QiyeDaBingOverView:{
        screen:QiyeDaBingOverView
    },
    QiyeDaBingCondition:{
        screen:QiyeDaBingCondition
    },
    RedMoneyList:{
        screen:RedMoneyList
    },
    PageDescriptionOfGongshi:{
        screen:PageDescriptionOfGongshi
    },
    PageRecharge:{
        screen:PageRecharge
    },
    PageUseRedMoney:{
        screen:PageUseRedMoney
    }
},{
    headerMode:'float',
    mode:'modal'
});


export default  HomeScreen;