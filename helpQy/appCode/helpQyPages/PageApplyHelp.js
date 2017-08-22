/**
 * 这个是申请救助页面
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
    Modal
} from 'react-native';
import React,{Component} from 'react';
let width=Dimensions.get('window').width;
let height=Dimensions.get('window').height;
let ratio = PixelRatio.get();
export default class PageApplyHelp extends  Component{
    constructor(props){
        super(props);
        this.state = {
            animationType: 'slide',
            modalVisible: false,
            transparent: true,
        };
    }
    componentDidMount(){
        //这里要获取已经加入的人数
    }

    render(){

        return(
            <View style={styles.container}>
                <View  style={styles.progressContainer}>
                    <View style={styles.progressWrapper}>
                        <Text style={{color:'#fff'}}>救助流程</Text>
                    </View>
                </View>
                {/**/}
                <View style={styles.commonWrapper}>
                    <View style={styles.common}>
                        <Image source={require('./img/1@2x.png')} resizeMode={'contain'}  style={{height:20}}/>
                        <View>
                            <Text>电话申请互助</Text>
                            <Text>400-686-1266</Text>
                        </View>
                    </View>

                    <View style={styles.common}>
                        <Image source={require('./img/2@2x.png')} resizeMode={'contain'}  style={{height:20}}/>
                        <View>
                            <Text>准备申请材料，齐全后在线提交</Text>
                        </View>
                    </View>
                    <View style={styles.common}>
                        <Image source={require('./img/3@2x.png')} resizeMode={'contain'}  style={{height:20}}/>
                        <View>
                            <Text>第三方机构调查核实</Text>
                            <Text>调查费用由互助申请方承担</Text>
                            <Text>方舟互助会及时与互助申请</Text>
                            <Text>沟通具体费用及打款方式，以</Text>
                            <Text>实际费用为转。</Text>
                        </View>
                    </View>
                    <View style={styles.common}>
                        <Image source={require('./img/4@2x.png')} resizeMode={'contain'}  style={{height:20}}/>
                        <View>
                            <Text>向全体会员公示，通过后打款</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.bottomer}>
                    <Text>如已度过等待期，且需申请互助金</Text>
                    <Text>请拨打400-686-1266</Text>
                </View>
            </View>
        );
    }
}

let styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',

    },
    commonWrapper:{
        marginLeft:20,

    },
    common:{
        flexDirection:'row',
        justifyContent:'flex-start',
        marginTop:30
    },

    progressContainer:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:30,
        marginBottom:30
    },
    progressWrapper:{
        width:140,
        height:32,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#0090EA'
    },
    bottomer:{
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'flex-start',
        marginTop:40
    }

});





















