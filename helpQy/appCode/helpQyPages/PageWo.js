
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
    NativeAppEventEmitter,
    AsyncStorage
} from 'react-native';
import React,{Component} from 'react';
let width=Dimensions.get('window').width;
let height=Dimensions.get('window').height;
let ratio = PixelRatio.get();

export  default class PageWo extends Component{
    constructor(props){
        super(props);
        this.state={
            usernickname:null,
            defaultPhoto:'http://onejf30n8.bkt.clouddn.com/zhishunuserPhoto@3x%20.png',
        };
    }
    componentWillMount(){
        //无论哪里登录，都要触发loginEmitter事件
        NativeAppEventEmitter.addListener('loginEmitter', (data) => {
            //console.log(data)
            this.setState({
                usernickname:data.usernickname,
                defaultPhoto:data.userPhoto
            });

        });

        //系统退出的话，应该显示出登录
        NativeAppEventEmitter.addListener('logoutEmitter', () => {
            //console.log(data)
            this.setState({
                usernickname:null,
                defaultPhoto:'http://onejf30n8.bkt.clouddn.com/zhishunuserPhoto@3x%20.png',
            });

        });
    }
    componentDidMount(){
       //在这里从storage中获取，各个子页面需要的数据，然后传递过去
        //总金额总人数
        AsyncStorage.multiGet(["usertoken","useruuid","usernickname","userPhoto"],(errros,result)=>{
            console.log(result);
            console.log(result[2][1]);
            console.log(result[3][1]);
            //
            if (result[2][1]!='undefined'){
                this.setState({
                    usernickname:result[2][1]
                })
            }
            if (result[3][1]!='undefined' && result[3][1]!=null){
                this.setState({
                    defaultPhoto:result[3][1]
                })
            }

        })

    }
    goSetting(){
        this.props.navigation.navigate('PageSetting')
    }
    goLogin(){
        this.props.navigation.navigate('PageLogin');
    }
    goZhuCe(){
        this.props.navigation.navigate('PageRegister');
    }
    goPageAddEmployee(){
        this.props.navigation.navigate('PageAddEmployee',{user: 'Brent'});
    }
    goMyEmployee(){

        this.props.navigation.navigate('MyEmployeeList');
    }
    goPageApplyHelp(){
        this.props.navigation.navigate('PageApplyHelp');
    }
    goWelfareAuth(){//WelfareAuth
        this.props.navigation.navigate('WelfareAuth');
    }
    goPageNeedCredit(){//PageNeedCredit
        this.props.navigation.navigate('PageNeedCredit');
    }

    static navigationOptions = {
        title: 'Welcome',
    };
    render(){
        return(
            <View style={styles.container}>
                <View  style={styles.userPhotoWrapper}>
                    <Image source={{uri:this.state.defaultPhoto}}   style={styles.userPhoto}  resizeMode={'contain'}  />
                    {this.state.usernickname==null?
                        <View style={styles.loginZhuce}>
                            <Text  onPress={this.goLogin.bind(this)} style={styles.loginZhuceText}>登录</Text>
                            <Text  style={styles.loginZhuceText}>/</Text>
                            <Text  onPress={this.goZhuCe.bind(this)}  style={styles.loginZhuceText}>注册</Text>
                        </View>
                        :
                        <View style={styles.loginZhuce}>
                            <Text style={styles.loginZhuceText}>{this.state.usernickname}</Text>
                        </View>
                    }

                </View>

                <TouchableOpacity  onPress={this.goSetting.bind(this)} style={styles.setting}>
                    <Image source={require('./img/shezhi@2x.png')}   resizeMode={'cover'} />
                </TouchableOpacity>
                {/*新增员工*/}
                <View style={styles.shareAddWrapper}>
                    <View style={styles.shareAdd}>
                        <View  style={styles.shareAddItem}>
                            <Text style={{fontSize:15,color:'#000000',fontWeight:'bold',width:100,textAlign:'center'}}>用户总数</Text>
                            <View style={styles.shareAddItemButtom}>
                                <Text style={{fontFamily:'Georgia',fontSize:26}}>1.0</Text>
                                <Text style={{color:'#929292',fontSize:10,marginTop:4}}>(人)</Text>
                            </View>
                        </View>
                        <View style={{height:60, borderLeftWidth:1/ratio, borderColor:'#d8d8d8'}}></View>
                        <View  style={styles.shareAddItem}>
                            <Text style={{fontSize:15,color:'#000000',fontWeight:'bold',width:100,textAlign:'center'}}>互助金额</Text>
                            <View style={styles.shareAddItemButtom}>
                                <Text style={{fontFamily:'Georgia',fontSize:26}}>1000</Text>
                                <Text style={{color:'#929292',fontSize:10,marginTop:4}}>(元)</Text>
                            </View>
                        </View>
                    </View>
                </View>
                {/*<View style={[styles.shareAddWrapper,styles.style2]}>*/}
                    {/*<View style={styles.shareJuntan}>*/}
                        {/*<View  style={styles.shareAddItem}>*/}
                            {/*<Image  source={require('./img/todayShare@2x.png')} resizeMode={'contain'}/>*/}
                            {/*<Text style={{fontSize:13,color:'#898c8d',fontWeight:'bold',width:100,textAlign:'center',marginBottom:-3}}>今日均摊</Text>*/}
                            {/*<View style={styles.shareAddItemButtom}>*/}
                                {/*<Text style={{fontFamily:'Georgia',fontSize:26}}>5.0</Text>*/}
                                {/*<Text style={{color:'#929292',fontSize:10,marginTop:4}}>(元)</Text>*/}
                            {/*</View>*/}
                        {/*</View>*/}
                        {/*<View style={{height:80, borderLeftWidth:1/ratio, borderColor:'#d8d8d8'}}></View>*/}
                        {/*<View  style={styles.shareAddItem}>*/}
                            {/*<Image  source={require('./img/totalShare@2x.png')} resizeMode={'contain'}/>*/}
                            {/*<Text style={{fontSize:13,color:'#898c8d',fontWeight:'bold',width:100,textAlign:'center',marginBottom:-3}}>总均摊</Text>*/}
                            {/*<View style={styles.shareAddItemButtom}>*/}
                                {/*<Text style={{fontFamily:'Georgia',fontSize:26}}>10.00</Text>*/}
                                {/*<Text style={{color:'#929292',fontSize:10,marginTop:4}}>(元)</Text>*/}
                            {/*</View>*/}
                        {/*</View>*/}
                    {/*</View>*/}
                {/*</View>*/}

                {/*/!*新增&救助&设置*!/*/}
                {/*<View style={styles.addHelpSetting}>*/}
                    {/*<View>*/}
                        {/*<Image source={require('./img/wo16.jpg')} style={{width:30,height:30}} resizeMode={'contain'}/>*/}
                        {/*<Text>新增员工</Text>*/}
                    {/*</View>*/}
                    {/*<View>*/}
                        {/*<Image source={require('./img/w10.jpg')} style={{width:30,height:30}} resizeMode={'contain'}/>*/}
                        {/*<Text>救助</Text>*/}
                    {/*</View>*/}
                    {/*<TouchableOpacity  onPress={this.goSetting.bind(this)}>*/}
                        {/*<Image source={require('./img/shezhi@2x.png')} style={{width:30,height:30}} resizeMode={'contain'}/>*/}
                        {/*<Text>设置</Text>*/}
                    {/*</TouchableOpacity>*/}
                {/*</View>*/}
                {/*关于我们和常见问题*/}
                <View style={[styles.itemWrapperDonate,styles.fillStyle,styles.fillStyle2]}>
                    <TouchableOpacity  onPress={this.goPageAddEmployee.bind(this)} style={styles.faq}>
                        <Image source={require('./img/xinzengyuangong@2x.png')} resizeMode={'cover'} style={styles.leftico}/>
                        <Text   style={styles.texts}>新增员工</Text>
                    </TouchableOpacity>
                    <Image source={require('./img/gengduo.png')} resizeMode={'cover'} style={styles.more}/>
                </View>
                <View style={[styles.itemWrapperDonate,styles.fillStyle]}>
                    <TouchableOpacity  onPress={this.goMyEmployee.bind(this)} style={styles.faq}>
                        <Image source={require('./img/wodeyuangong@2x.png')} resizeMode={'cover'} style={styles.leftico}/>
                        <Text  style={styles.texts}>我的员工</Text>
                    </TouchableOpacity>
                    <Image source={require('./img/gengduo.png')} resizeMode={'cover'} style={styles.more}/>
                </View>
                <View  style={[styles.itemWrapperDonate,styles.fillStyle]}>
                    <TouchableOpacity onPress={this.goPageApplyHelp.bind(this)} style={styles.faq}>
                        <Image source={require('./img/jiuzhu@2x.png')} resizeMode={'cover'} style={styles.leftico}/>
                        <Text   style={styles.texts}>救助</Text>
                    </TouchableOpacity>
                    <Image source={require('./img/gengduo.png')} resizeMode={'cover'} style={styles.more}/>
                </View>
                <View style={[styles.itemWrapperDonate,styles.fillStyle]}>
                    <TouchableOpacity  onPress={this.goWelfareAuth.bind(this)} style={styles.faq}>
                        <Image source={require('./img/qurenzheng@2x.png')} resizeMode={'cover'} style={styles.leftico}/>
                        <Text   style={styles.texts}>去认证</Text>
                    </TouchableOpacity>
                    <Image source={require('./img/gengduo.png')} resizeMode={'cover'} style={styles.more}/>

                </View>
                {/*<View style={[styles.itemWrapperDonate,styles.fillStyle]}>*/}
                    {/*<TouchableOpacity onPress={this.goPageNeedCredit.bind(this)} style={styles.faq}>*/}
                        {/*<Image source={require('./img/gongsixinyu@2x.png')} resizeMode={'cover'} style={styles.leftico}/>*/}
                        {/*<Text   style={styles.texts}>公司增信</Text>*/}
                    {/*</TouchableOpacity>*/}
                    {/*<Image source={require('./img/gengduo.png')} resizeMode={'cover'} style={styles.more}/>*/}
                {/*</View>*/}
            </View>
        );
    }

}
let styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f1f1f1',
    },
    userPhotoWrapper:{
        height:190,
        backgroundColor:'#0093DE',
        flexDirection:'column',
        alignItems:'center',
        paddingTop:30
    },
    userPhoto:{
       height:70,
        width:70,
        borderRadius:35
    },
    loginZhuce:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    loginZhuceText:{
        color:'#fff'
    },
    style2:{
        marginTop:3
    },
    shareAddWrapper:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginTop:-30
    },
    shareAdd:{
        flexDirection:'row',
        backgroundColor:'#ffffff',
        height:80,
        width:width*0.98,
        borderTopLeftRadius:8,
        justifyContent:'center',
        alignItems:'center',
        borderTopRightRadius:8
    },
    shareJuntan:{
        flexDirection:'row',
        backgroundColor:'#ffffff',
        height:100,
        width:width*0.98,
        borderTopLeftRadius:8,
        justifyContent:'center',
        alignItems:'center',
        borderTopRightRadius:8
    },
    shareAddItem:{
        width:0.5*width,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    shareAddItemButtom:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        height:34,
        width:width*0.46
    },
    setting:{
        zIndex:2,
        position:'absolute',
        flexDirection:'row',
        right:0,
        top:0,
        height:30,
        width:30,
        justifyContent:'center',
        alignItems:'center',
    },
    company:{
       flexDirection:'row',
        alignItems:'center',
        height:60,
        justifyContent:'space-between',
        paddingLeft:15,
        paddingRight:15,
        backgroundColor:'#fff'
    },
    companyItemWrapper:{
        flexDirection:'column',
        alignItems:'center'
    },
    companyItem:{
        flexDirection:'row',
        alignItems:'center',
        marginBottom:5
    },
    txt:{
        fontSize:16,
        fontWeight:'bold',
        color:'#1F1F1F'
    },
    junTan:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    todayJuntan:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        height:40,
        justifyContent:'center',
        //width:0.45*width
        backgroundColor:'#FFF'
    },
    juntanTxt:{
        fontSize:12,
        fontWeight:'bold'
    },
    juntanMoneytxt:{

    },
    addHelpSetting:{
        flexDirection:'row',
        justifyContent:'space-between',
        height:80,
        alignItems:'center',
        marginTop:1,
        backgroundColor:'#fff',
        paddingLeft:10,
        paddingRight:10
    },
    fillStyle:{
        marginTop:1
    },
    fillStyle2:{
        marginTop:10
    },
    itemWrapperDonate:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'#ffffff',
        height:54
    },
    fix:{
        borderTopWidth:1/ratio,
        borderTopColor:'#9D9D9D',
    },
    leftico:{
        width:20,
        height:20,
        marginRight:10
    },
    more:{
        width:14,
        height:14,
        marginRight:10
    },
    faq:{
        flexDirection:'row',
        alignItems:'center',
        width:100,
        justifyContent:'flex-start',
        marginLeft:10
    },
    chongzhiWrapper:{
        // position:'absolute',
        // left:0,
        // bottom:0,
        marginTop:50,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        width:width,

    },
    chongzhi:{
        borderRadius:5,
        width:0.94*width,
        backgroundColor:'red',
        height:40,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    chongzhiTxt:{
        color:'white',
        fontWeight:'bold',
        fontSize:18
    }
});