
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
    Modal,
    AsyncStorage
} from 'react-native';
import React,{Component} from 'react';
import PageLogin from './PageLogin';
import Loading from '../loading/loading';
let width=Dimensions.get('window').width;
let height=Dimensions.get('window').height;
let ratio = PixelRatio.get();
import fetchToolget  from '../utils/fetchToolget';
import  {UrlStatistics} from '../utils/url';
export default  class PageZhuYe extends  Component{
    constructor(props){
        super(props);
        this.state = {
            animationType: 'slide',
            modalVisible: false, //先不用这种方式
            transparent: false,
            visible:true, //loading动画
            peoplejoin:1002,
            QiyeJoin:99,
        };
    }
    componentDidMount(){

        let  response=fetchToolget(UrlStatistics);
        response.then(resp=>{
            //停止转圈圈
            this.setState({
                visible:false
            });
            //console.log(UrlStatistics);
            if (resp.retcode===2000) {
             //设置
               // console.log(resp);
                this.setState({
                    peoplejoin:resp.statistics.peopletotal,
                    QiyeJoin:resp.statistics.employeetotal
                });
            }
        }).catch(err=>{
            this.setState({
                visible:false
            });

        });
    }//componentDidMount
    join(type){
        // console.log(type)
        // 1.先从本地获取token，如果不为null，就进入PageJoin界面，否则的话进入PageLogin页面
        AsyncStorage.getItem("token",(err, result) => {
            console.log(result)
            if (result!==null ) {//说明已经登录
                this.props.navigation.navigate('PageJoin'); //进入加入页面，type参数传入进去
            }else {
                this.props.navigation.navigate('PageLogin'); //进入登录页面
            }
        });
    }

    setModalVisible(visible) {
        this.setState({
            modalVisible: visible
        });
    }
    goFAQ(){ //去常见问题
        // this.props.navigation.navigate('PageDescriptionOfGongshi')  //测试界面
        this.props.navigation.navigate('FAQ')
    }
    goAboutUs(){//关于我们
        this.props.navigation.navigate('AboutUs')
    }
    goQiyezhengxin(){ //企业征信
        this.props.navigation.navigate('Qiyezhengxin')
    }
    goClaimsHelp(){
        this.props.navigation.navigate('ClaimsHelp')
    }
    goChildrenOverView(){ //有关少儿的情况
        this.props.navigation.navigate('ChildrenOverView')
    }
    goChildrenCondition(){
        this.props.navigation.navigate('ChildrenCondition')
    }
    goYoungOverView(){
        this.props.navigation.navigate('YoungOverView')
    }
    goYoungCondition(){
        this.props.navigation.navigate('YoungCondition')
    }
    goOldOverView(){
        this.props.navigation.navigate('OldOverView')
    }
    goOldCondition(){
        this.props.navigation.navigate('OldCondition')
    }
    goZongheOverView(){
        this.props.navigation.navigate('ZongheOverView')
    }
    goZongheCondition(){
        this.props.navigation.navigate('ZongheCondition')
    }
    goQiyeHarmOverView(){
        this.props.navigation.navigate('QiyeHarmOverView')
    }
    goQiyeHarmCondition(){
        this.props.navigation.navigate('QiyeHarmCondition')
    }
    goQiyeDaBingOverView(){
        this.props.navigation.navigate('QiyeDaBingOverView')
    }
    goQiyeDaBingCondition(){
        this.props.navigation.navigate('QiyeDaBingCondition')
    }

    render(){
        var modalBackgroundStyle = {
            backgroundColor: this.state.transparent ? 'rgba(0, 0, 0, 0.5)' : '#f5fcff',
        };
        var innerContainerTransparentStyle = this.state.transparent
            ? {backgroundColor: '#fff', padding: 20}
            : null;
        var activeButtonStyle = {
            backgroundColor: '#ddd'
        };
        return(
            <ScrollView style={styles.container}>
                <View style={{backgroundColor:'#fff',}}>
                    <View style={styles.topContainer}>
                        <TouchableOpacity    onPress={this.goFAQ.bind(this)}   style={styles.itemWrapper}>
                            <Image source={require('./img/FAQ.png')} style={styles.itemico} resizeMode={'contain'} />
                            <Text>常见问题</Text>
                        </TouchableOpacity>
                        <TouchableOpacity  onPress={this.goAboutUs.bind(this)}  style={styles.itemWrapper}>
                            <Image source={require('./img/aboutus.png')} style={styles.itemico} resizeMode={'contain'} />
                            <Text>关于我们</Text>
                        </TouchableOpacity>
                        <TouchableOpacity  onPress={this.goQiyezhengxin.bind(this)}  style={styles.itemWrapper}>
                            <Image source={require('./img/qiyezhengxin.png')} style={styles.itemico} resizeMode={'contain'} />
                            <Text>企业征信</Text>
                        </TouchableOpacity>
                        <TouchableOpacity  onPress={this.goClaimsHelp.bind(this)} style={styles.itemWrapper}>
                            <Image source={require('./img/lipei2.png')} style={styles.itemico} resizeMode={'contain'} />
                            <Text>理赔流程</Text>
                        </TouchableOpacity>
                    </View>
                    {/*互助社群不是保险*/}
                    <View style={styles.huzhuTipsWrapper}>
                        <View style={styles.huzhuTips}>
                            <Text>互助社群不是保险</Text>
                            <Text style={{fontSize:9,marginTop:3}}>互助社群是会员间的互助组织，会员不能预期获得刚性赔付</Text>
                        </View>
                    </View>
                </View>
                {/*加入互助，200万人已经加入*/}
                <View style={styles.joinHuzhu}>
                    <Text style={{color:'#414141'}}>加入互助</Text>
                    <Text style={{color:'#B7BB75'}}>{this.state.peoplejoin}万人已加入</Text>
                </View>
                <View style={styles.planItem}>
                    <TouchableOpacity onPress={this.goChildrenOverView.bind(this)}>
                        <Image source={require('./img/children.png')} style={styles.bigImg} resizeMode={'contain'} />
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={this.goChildrenCondition.bind(this)} style={styles.planItemMiddle}>
                        <Text style={styles.planItemText}>少儿健康互助计划</Text>
                        <Text style={styles.planItemtxt}>白血病、癌症等50种大病</Text>
                        <Text style={styles.planItemtxt}>出生后30天-17周岁</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={this.join.bind(this,'children')} style={styles.joinContainer}>
                        <View style={styles.joinWrapper}>
                            <Text  style={{color:'#fff',fontWeight:'bold'}}>加入</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.planItem}>
                    <TouchableOpacity onPress={this.goYoungOverView.bind(this)}>
                        <Image source={require('./img/zhongqingnian.png')} style={styles.bigImg} resizeMode={'contain'} />
                    </TouchableOpacity>
                    <TouchableOpacity   onPress={this.goYoungCondition.bind(this)} style={styles.planItemMiddle}>
                        <Text style={styles.planItemText}>中青年抗癌计划</Text>
                        <Text style={styles.planItemtxt}>胃癌、肝癌等各种癌症</Text>
                        <Text style={styles.planItemtxt}>18-50周岁</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={this.join.bind(this,'young')} style={styles.joinContainer}>
                        <View style={styles.joinWrapper}>
                            <Text style={{color:'#fff',fontWeight:'bold'}}>加入</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.planItem}>
                    <TouchableOpacity onPress={this.goOldOverView.bind(this)}>
                        <Image source={require('./img/old.png')} style={styles.bigImg} resizeMode={'contain'} />
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={this.goOldCondition.bind(this)}  style={styles.planItemMiddle}>
                        <Text style={styles.planItemText}>中老年抗癌计划</Text>
                        <Text style={styles.planItemtxt}>胃癌、肝癌等各种癌症</Text>
                        <Text style={styles.planItemtxt}>50-65周岁</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={this.join.bind(this,'old')}  style={styles.joinContainer}>
                        <View style={styles.joinWrapper}>
                            <Text style={{color:'#fff',fontWeight:'bold'}}>加入</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.planItem}>
                    <TouchableOpacity onPress={this.goZongheOverView.bind(this)}>
                        <Image source={require('./img/zonghe.png')} style={styles.bigImg} resizeMode={'contain'} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.goZongheCondition.bind(this)} style={styles.planItemMiddle}>
                        <Text style={styles.planItemText}>综合意外互助计划</Text>
                        <Text style={styles.planItemtxt}>意外身故、伤残</Text>
                        <Text style={styles.planItemtxt}>1-66周岁</Text>
                    </TouchableOpacity>
                    <TouchableOpacity   onPress={this.join.bind(this,'zonghe')} style={styles.joinContainer}>
                        <View style={styles.joinWrapper}>
                            <Text style={{color:'#fff',fontWeight:'bold'}}>加入</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                {/*企业互助*/}
                <View style={styles.joinHuzhu}>
                    <Text style={{color:'#414141'}}>加入企业互助</Text>
                    <Text style={{color:'#B7BB75'}}>{this.state.QiyeJoin}公司已加入</Text>
                </View>
                <View style={styles.planItem}>
                    <TouchableOpacity onPress={this.goQiyeHarmOverView.bind(this)}>
                        <Image source={require('./img/yuangongdabing.png')} style={styles.bigImg} resizeMode={'contain'} />
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={this.goQiyeHarmCondition.bind(this)} style={styles.planItemMiddle}>
                        <Text style={styles.planItemText}>企业员工互助</Text>
                        <Text style={styles.planItemtxt}>意外身故、伤残</Text>
                        <Text style={styles.planItemtxt}>18-65周岁</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={this.join.bind(this,'employee')}  style={styles.joinContainer}>
                        <View style={styles.joinWrapper}>
                            <Text style={{color:'#fff',fontWeight:'bold'}}>加入</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.planItem}>
                    <TouchableOpacity onPress={this.goQiyeDaBingOverView.bind(this)}>
                        <Image source={require('./img/yuangonghuzhu.png')} style={styles.bigImg} resizeMode={'contain'} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.goQiyeDaBingCondition.bind(this)} style={styles.planItemMiddle}>
                        <Text style={styles.planItemText}>企业员工大病互助</Text>
                        <Text style={styles.planItemtxt}>大病</Text>
                        <Text style={styles.planItemtxt}>18-65周岁</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={this.join.bind(this,'staff')} style={styles.joinContainer}>
                        <View style={styles.joinWrapper}>
                            <Text style={{color:'#fff',fontWeight:'bold'}}>加入</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <Modal
                    animationType={this.state.animationType}
                    transparent={this.state.transparent}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {alert("Modal has been closed.")}}>

                    <View style={styles.selectPayMoney}>
                        <TouchableOpacity onPress={() => {this.setModalVisible(!this.state.modalVisible)}}>
                            <Text style={{width:40}}>取消</Text>
                        </TouchableOpacity>
                        <Text style={{width:40}}></Text>
                    </View>
                    <PageLogin {...this.props} />
                </Modal>
                <Loading  visible={this.state.visible}/>
            </ScrollView>
        );
    }
}

let styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F7F9',
        height:3000
    },
    selectPayMoney:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        height:40,
        borderBottomColor:'#cccccc',
        borderBottomWidth:1/ratio,
    },
    topContainer:{
       flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        height:80,
        paddingLeft:10,
        paddingRight:10
    },
    itemWrapper:{
        flexDirection:'column',
        alignItems:'center'
    },
    itemico:{
        width:26,
        height:26,
        marginBottom:3
    },
    huzhuTipsWrapper:{
        paddingRight:10,
        paddingLeft:10,
        paddingTop:10,
        paddingBottom:5
    },
    huzhuTips:{
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#FEFDDD',
        height:50,
        borderRadius:5
    },
    joinHuzhu:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingLeft:10,
        paddingRight:10,
        marginTop:6,
        backgroundColor:'#fff',
        height:40
    },
    planItem:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#fff',
        marginTop:1,
        height:100,
        paddingLeft:10,
        paddingRight:10
    },
    planItemText:{
        fontSize:15,
        fontWeight:'bold',
        color:'#4B4B4B',
        marginBottom:5
    },
    planItemtxt:{
        fontSize:12,
        marginTop:5
    },
    bigImg:{
        width:70,
        height:70
    },
    planItemMiddle:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'flex-start',
        paddingLeft:10
    },
    joinContainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'flex-end',
        height:70
    },
    joinWrapper:{
        backgroundColor:'#FFCA00',
        width:60,
        height:30,
        borderRadius:8,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    }
});



































