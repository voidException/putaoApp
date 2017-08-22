import{
    RefreshControl,
    View,
    Dimensions,
    FlatList,
    ActivityIndicator,
    StyleSheet,
    Image,
    Text
} from 'react-native';

import  React,{Component,} from 'react';
import {UrlgetMyRedMoney} from '../utils/url';
import RedMoneyItem from './RedMoneyItem';
import fetchTool from "../utils/fetchTool";
let { width,height}=Dimensions.get('window');


export  default  class RedMoneyList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isRefreshing:false,
            visible:false,
            dataSource: [],
            hasLoad:false,
            loadmoretag:true,//上拉刷新的相关状态信息
            visible:true,
            animating:true,  //loading动画的显示与否
            haveDataOrNoData:false,
        };
    }


    componentWillMount(){
        let redMoney={
            useruuid:'94111BD33D3F474590C535C0BE24905B',
            redmoneydate:'2030-01-01',//读取最后一个列表的时间
        };
        let options={
            url:UrlgetMyRedMoney,
            body:JSON.stringify(redMoney)
        };
        let response=fetchTool(options);
        console.log(this.state.animating,this.state.haveDataOrNoData+"Szuimh")
        response.then(resp=>{
            console.log("Hello")
            this.setState({
                animating:false
            })
           console.log(resp.result)
            if(resp.retcode==2000){
                if(resp.result.length>0){
                    console.log("result的长度为"+resp.result.length);
                    this.setState({
                        haveDataOrNoData:true,
                    })
                }
                this.setState({
                    visible:false,
                    dataSource:resp.result,
                    hasLoad:true,
                    animating:false,
                })
            }

        });
        console.log(this.state.animating,this.state.haveDataOrNoData+"Szuimh111")
    }

    uuid() {  //为keyExtractor产生一个uuid  用来标识id、

        var s = [];
        var hexDigits = "0123456789abcdef";
        for (var i = 0; i < 36; i++) {
            s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
        }
        s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
        s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
        s[8] = s[13] = s[18] = s[23] = "-";

        var uuid = s.join("");
        return uuid;
    }

    _keyExtractor = (item, index) => item.redmoneyid+this.uuid(); //用于为item对象生成一个唯一的标识id  用来区分

    _onRefresh(){     //
        console.log('*******************************'+this.state.animating,this.state.haveDataOrNoData)   //用于页面刷新时的方法

    };

    onEndReached(){
        //进入数据不足的刷新方法
        let length=this.state.dataSource.length-1;
        if(!this.state.loadmoretag){
            return
        }

        let redmoneydateNeedHandle=this.state.dataSource[length].redmoneydate;
        //取得倒数第二个数据的时间
        let date = new Date(redmoneydateNeedHandle);
        Y = date.getFullYear() + '-';
        M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
        D = date.getDate() + ' ';
        let redmoneydate=Y+M+D;


        let redMoney={
            useruuid:'94111BD33D3F474590C535C0BE24905B',
            redmoneydate:redmoneydate,//读取最后一个列表的时间
        };
        let options={
            url:UrlgetMyRedMoney,
            body:JSON.stringify(redMoney)
        };

        let olddata=this.state.dataSource;
        let response=fetchTool(options);
        response.then(resp=>{
            //console.log(resp.result)

            if(resp.retcode==2000){
                if(resp.result.length<7){
                    this.setState({
                        loadmoretag:false
                    })
                }
                     this.setState({
                         visible:false,
                         dataSource:olddata.concat(resp.result),
                         hasLoad:true,
                     })
                console.log(this.state.dataSource)
            }

        });


    }

    _renderItem=({item}) =>(      //页面list的一个对象的生成 和属性定义
        <RedMoneyItem
            key={item.redmoneyid}
            row={item}
            {...this.props}

        />
    );


    render(){
        return(
                <View  style={{flex:1,backgroundColor:'#e7d45e'}}>
                {this.state.animating?<ActivityIndicator animating={this.state.animating}
                style={[styles.centering, {height: 80,flex:1}]}
                size="small" />:<View style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center',backgroundColor:'#e6e6e6'}}>{this.state.haveDataOrNoData?<FlatList  //第二级运算符  用于判断是否存在红包数据
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.isRefreshing}
                            onRefresh={this._onRefresh.bind(this)}
                            tintColor="#ff0000"
                            title="Loading..."
                            titleColor="#00ff00"
                            colors={['#ff0000', '#00ff00', '#0000ff']}
                            progressBackgroundColor="#ffff00"/>}
                    ref="listview"
                    data={this.state.dataSource}
                    refreshing={true}
                    renderItem={this._renderItem}
                    keyExtractor={this._keyExtractor}
                    onRefresh={this._onRefresh()}
                    initialNumToRender={7}
                    onEndReachedThreshold={0.1}
                    onEndReached={this.onEndReached.bind(this)}
                />:<View style={{flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                    <Image source={require('./img/NotHappy.png')} style={{width:80,height:80}}/>
                    <Text style={{paddingTop:15,color:'#bfbfbf',fontSize:18}}>您还没有红包哦!</Text>
                </View>}</View>}
            </View>
        );



    }

}
const styles = StyleSheet.create({
    centering: {
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },
    gray: {
        backgroundColor: '#cccccc',
        width:70
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 8,
        zIndex:10
    },
});




