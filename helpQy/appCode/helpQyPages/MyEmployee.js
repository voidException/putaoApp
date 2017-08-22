/**
 * 这个是我的员工列表
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
import PageRecharge from './PageRecharge';

let width=Dimensions.get('window').width;
let height=Dimensions.get('window').height;
let ratio = PixelRatio.get();
export default class MyEmployee extends  React.PureComponent{
    constructor(props){
        super(props);
        this.state = {
            modalVisible: false,
            transparent: true,
            theNameOfCategoryType:"",
            lagTime:0, //距离加入时间的天数
            profilePhotoPath:""
        };
    }
    componentWillMount(){
        let lagTime=this.getLagTime(this.props.row.joindate); //获取距离加入的天数  int

        let imgPath=this.getProfilePhotoPath(this.props.row.categorytype);

        if(this.props)
            this.setState({
                theNameOfCategoryType:this.getCategoryType(this.props.row.categorytype),//互助类型
                lagTime:lagTime, //加入天数
                profilePhotoPath:imgPath,
            })

    }




    getLagTime(joindate) {
        let dateNow = new Date();
        let joinDate=new Date(joindate);
        lagTime=dateNow.getTime()-joinDate.getTime();
        lagTimeInt=Math.floor(lagTime/(24*3600*1000));
        return lagTimeInt;
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

    getProfilePhotoPath(categorytype){
        if(categorytype=="little")
            return require('./img/children.png');
        if(categorytype=="young")
            return require('./img/young.png');
        if(categorytype=="old")
            return require('./img/old.png');
        if(categorytype=="yiwai")
            return require('./img/children.png');
        if(categorytype=="staff")
            return require('./img/yuangongdabing.png');
        if(categorytype=="employee")
            return require('./img/yuangonghuzhu.png');
    }

    goLogin(){
        this.props.navigation.navigate('PageRecharge',{EmployeeMsg:this.props.row});
    }

    render(){
        console.log(this.state.lagTime+"shiajin ")


        return(
            <View style={styles.container}>
                {/**/}
                <View style={styles.itemtop}>
                    <View style={styles.nameOuter}>
                        <View style={styles.nameWrapper}>
                            <Text style={{color:'#fff',}}>{this.props.row.username}</Text>
                        </View>
                        <Text style={{fontSize:20}}>{this.state.theNameOfCategoryType}</Text>
                    </View>
                    <Image source={this.state.profilePhotoPath} resizeMode={'contain'} style={{width:70,height:70,borderRadius:35,}}  />
                </View>
                {/**/}
                <View style={styles.itemMiddle}>
                    <Image source={require('./img/authorize_ico.png')}  resizeMode={'contain'} style={{width:16,height:16}}/>

                    {this.state.lagTime>180? <Text style={{color:'red'}}>超过180天,已经开始互助计划</Text>:
                        <Text style={{fontSize:12,marginLeft:10}}>已加入<Text>{this.state.lagTime}</Text>天，等待剩余期<Text>{180-this.state.lagTime}</Text>天</Text>}
                        {/*三目运算符判断是否加入超过180天*/}
                    <Text>{this.datenow}</Text>
                </View>
                {/**/}
                <View style={styles.itemBottom}>
                    <View style={styles.itemBottomLeft}>
                        <Text style={{fontSize:20}}>￥</Text>
                        <Text style={{fontSize:20}}>{this.props.row.remainfee/100}</Text>
                    </View>
                    <View style={styles.itemBottomRight}>
                        <TouchableOpacity>
                            <Text onPress={this.goLogin.bind(this)}>充值</Text>
                        </TouchableOpacity>

                    </View>
                </View>

            </View>
        );
    }
}

let styles=StyleSheet.create({
    container: {
        margin:5,
        height:150,
        backgroundColor:'#fff',
        marginTop:10,
        borderRadius:10,
        padding:6,
        justifyContent:'center',
    },
    itemtop:{
        flexDirection:'row',
        justifyContent:'space-between',

    },
    nameOuter:{
        flexDirection:'column',
        alignItems:'flex-start',
        justifyContent:'space-around',
        height:60,
    },
    nameWrapper:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#3C92F7',
        height:20,
        width:90,
        borderRadius:7
    },
    itemMiddle:{
        flexDirection:'row'
    },
    itemBottom:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:2
    },
    itemBottomLeft:{
        width:width*0.45,
        flexDirection:'row',
        justifyContent:'flex-start',
        height:40,
        alignItems:'center'
    },
    itemBottomRight:{
        width:80,
        height:40,
        flexDirection:'row',
        justifyContent:'center',
        backgroundColor:'#FFF8E7',
        borderRadius:25,
        alignItems:'center'
    }
});



















