import{
    View,
    Dimensions,
    PixelRatio,
} from 'react-native';
import React,{ Component } from 'react';
let {width,height}=Dimensions.get('window');
let ratio = PixelRatio.get();
export default class PageUseRedMoneyForWho extends Component{
    constructor(props){
        super(props);
        this.state={
        }

    }
    render(){
        return(
            <View>
                <View>
                    <View>您的账号</View>
                    <View>XXX，您好</View>
                </View>
                <View>
                    <View>为谁使用</View>
                    <View>Account</View>
                    <View>身份证号</View>
                </View>
                <View>
                    <View>充值类型</View>
                    <View>少儿互助计划</View>
                    <View>中青年抗癌计划</View>
                    <View>中老年抗癌计划</View>
                    <View>综合意外互助</View>
                    <View>企业员工互助</View>
                    <View>企业员工大病互助</View>
                </View>
            </View>

        );
    }
}