/**
 * 这个是奖励的列表项
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
let {width,height}=Dimensions.get('window');

export default class AwardItem extends Component{
    constructor(props){
        super(props);
        // console.log(this.props);
        this.state={
            tweetid: 0, //推文的id,0有特殊含义

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
    }
    componentWillReceiveProps(nextProps) {

    }

    render(){
        return(
            <View style={{flex:1,marginTop:30 }}>
                <View style={styles.riqi}>
                    <Text>2017-05-26</Text>
                </View>
            </View>
        );
    }
}

let styles=StyleSheet.create({

    riqi:{
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















