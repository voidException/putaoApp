/**
 * 这个是奖励的列表
 */
import{
    StyleSheet,
    Text,
    Image,
    ScrollView,
    TouchableHighlight,
    TouchableOpacity,
    RefreshControl,
    View,
    ListView,
    Dimensions,
    Alert,
    FlatList,
} from 'react-native';

import  React,{Component,} from 'react';
import { UrlgetPublicList } from '../utils/url';
import Loading from '../loading/loading';
import fetchTool from '../utils/fetchTool';
import fetchToolget  from '../utils/fetchToolget';
import  PublicItem from './PublicItem';
import AwardItem from  './AwardItem';
let { width,height}=Dimensions.get('window');

export  default  class AwardList extends React.PureComponent{
    constructor(props){
        super(props);
        this.state={
            dataSource:[],
            isRefreshing: false,
            visible:false,
            userUUID:"d73e9de3-84bc-4bf5-a6d7-d1501b023566",
            buildrelationdescription:"business",

        };
        //console.log(this.props)
    }

    shouldComponentUpdate(){
        return true
    }

    componentWillMount(){

        let  response=fetchToolget(UrlgetPublicList);
        response.then(resp=>{
            console.log(resp)
            if (resp.retcode===2000) {
                //这里获取数组
                this.setState({
                    dataSource: resp.lp
                });
            }

            //停止转圈圈
            this.setState({
                visible:false
            });
        }).catch(err=>{
            //停止转圈圈
            this.setState({
                visible:false
            });

        });

    }
    _keyExtractor = (item, index) => item.publicid;

    _renderItem = ({item}) => (
        <PublicItem
            key={item.publicid}
            row={item}
            {...this.props}
        />
    );
    _onRefresh(){
        console.log('onRefresh')
    }
    _onEndReached(){
        console.log('_onEndReached')
    }

    _onEmpty = () => {//不管用
        return (
            <View style={{flex:1, height:100,backgroundColor: "#CED0CE"}}>
                <Text>空白的</Text>
            </View>
        );
    };


    render(){
        return(
            <FlatList
                removeClippedSubviews={false}
                style={{flex:1, backgroundColor: '#fff' }}
                data={this.state.dataSource}
                renderItem={this._renderItem}
                keyExtractor={this._keyExtractor}
                refreshing={false}
                onRefresh={this._onRefresh}
                onEndReachedThreshold={50}
                onEndReached={this._onEndReached.bind(this)}
                ListEmptyComponent={this._onEmpty.bind(this)}
            />
        );
    }
}
let styles=StyleSheet.create({
    container: {
        flex:1,
        margin:5,
        justifyContent:'center',
    },
});



















