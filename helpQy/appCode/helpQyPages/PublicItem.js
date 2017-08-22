/**
 * 这个是PagegongShi的渲染想
 */
import{
    StyleSheet,
    Text,
    Image,
    Navigator,
    View,
    Dimensions,
    PixelRatio,
    TouchableOpacity
} from 'react-native';
import React,{ Component } from 'react';
import TouchableItem from "react-navigation/lib-rn/views/TouchableItem";
let {width,height}=Dimensions.get('window');

export default class PublicItem extends Component{
    constructor(props){
        super(props);
        // console.log(this.props);
        this.state={
            tweetid: 0, //推文的id,0有特殊含义
            time:"",
            username:"",
            categorytype:"",
            needmoney:0,
            description:""

        }
    }
    componentWillMount(){
        //此处是格式化时间用的。
        // let timeNeedHandle=this.state.publishtime;
        // var date = new Date(timeNeedHandle);
        // Y = date.getFullYear() + '-';
        // M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
        // D = date.getDate() + ' ';
        // let itemEndTime=Y+M+D;
        // this.setState({
        //     publishtime:itemEndTime
        // });
        publicTime=this.getPublicTime(this.props.row.joindate);
        categoryType=this.getCategoryType(this.props.row.categorytype);
        peopleNeedMoney=this.props.row.needmoney;
        this.setState({
            time:publicTime,
            username:this.props.row.username,
            categorytype:categoryType,
            needMoney:peopleNeedMoney,
            description:this.props.row.description,
        })

    }

    getPublicTime(publictime){
        let date = new Date(publictime);
        let Y = date.getFullYear() + '-';
        let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
        let D = date.getDate()+' ';
        if (D>=0 && D<=9) {
            D="0"+D;
            let finalDate=Y+M+D;
            return finalDate;
       }
};

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

    _onPressContent(){
        this.props.navigation.navigate('PageDescriptionOfGongshi',{publicMes:this.props.row});
    }

    render(){
        return(
            <View style={{flex:1,marginTop:30 }}>
                <View style={styles.date}>
                    <Text>{this.state.time}</Text>
                </View>
                {/*头像昵称等*/}

                <View style={styles.userProfile}>
                    <Image source={{uri:this.props.row.img1}} style={{width:50,height:50}} resizeMode={'contain'}/>
                    <View style={{marginLeft:10}}>
                        <Text>互助会员：<Text>{this.state.username}</Text></Text>
                        <Text>互助计划：<Text>{this.state.categorytype}</Text></Text>
                        <Text>所需金额：<Text>{this.state.needmoney}</Text></Text>
                    </View>
                </View>
                <TouchableOpacity>
                    <Text style={{margin:10}}>事件概述：</Text>
                    <Text style={{marginLeft:10,marginRight:10}} onPress={this._onPressContent.bind(this)}>{this.state.description}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

let styles=StyleSheet.create({

    date:{
        flexDirection:'row',
        height:40,
        alignItems:'center',
        justifyContent:'flex-start',
        paddingLeft:10,
        borderTopWidth:1,
        borderBottomWidth:1,
        borderTopColor:'#B8B8B8',
        borderBottomColor:'#B8B8B8'
    },
    userProfile:{
        flexDirection:'row',
        width:width,
        height:50,
        justifyContent:'flex-start',
        paddingTop:10,
        paddingLeft:10,
        paddingRight:10,
        marginBottom:20
    },
    header:{
        width:40,
        height:40,
        borderRadius:20	,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#61B972'
    },
    headerWrapper:{
        flexDirection:'row',
        width:width,
        height:50,
        justifyContent:'flex-start',
        paddingTop:10,
        paddingLeft:5,
        paddingRight:5,
    },
    nicknameWrapper:{
        flexDirection:'row',
    },
    nicknameTxt:{
        fontSize:16,
        color:'#4EB160'
    },
    nameV:{
        flexDirection:'column',
        alignItems:'flex-start',
        justifyContent:'center',
        marginLeft:5
    },
    vTag:{
        width:15,
        height:15
    },
    upContent:{
        marginTop:8,
        marginLeft:10,
        marginRight:10,
        marginBottom:6,
        fontSize:16
    },
    imageList:{
        flexDirection:'column',
    },
    imageListImg:{
        height:0.3*width,
        width:0.3*width,
        margin:3
    },
    imageWrapper:{
        flexDirection:'row',
        justifyContent:'flex-start'
    },
    footer:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:5,
        borderWidth:1/PixelRatio.get(),
        borderColor:'#a9b0bf',
        height:26,

    },

});








``






