import React,{	Component	} from 'react';
import {
    Text,
    View,
    Button
} from 'react-native';
//import {  Provider  } from 'react-redux';
//import configureStore from '../store/configureStore';
//const store =configureStore();
import HomeScreen  from  './HomeScreen';
//import  PageMain from '../helpQyPages/PageMain';
import  PageWo  from  '../helpQyPages/PageWo';
import  PageRegister from '../helpQyPages/PageRegister';
import  OpenItem from '../helpQyPages/PublicItem';
import  PageFindPasswd from '../helpQyPages/PageFindPasswd';
import  PageLogin from  '../helpQyPages/PageLogin';
import PageResetPassword  from '../helpQyPages/PageResetPasswd';
import  PageSetting from  '../helpQyPages/PageSetting';
import  AddHelpMan from  '../pages/components/addHelpMan';
import  RenZhengCompany from '../pages/components/RenZhengCompany';
import  FAQ from '../pages/woPage/FAQ';
import  PageZhuYe from '../helpQyPages/PageZhuYe'; //主页
import  PageJoin from '../helpQyPages/PageJoin'; //加入互助计划页面
import MyNavigator from './navigator';
export default class App extends Component{

	render(){
		return(
            <HomeScreen />
		);
	}
}


