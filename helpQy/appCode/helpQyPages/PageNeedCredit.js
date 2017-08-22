/**
 * 这个是公司征信界面
 *
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
export default class PageNeedCredit extends  Component{
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
    setModalVisible(visible) {
        this.setState({
            modalVisible: visible
        });
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
            <View style={styles.container}>
                <Text>这个是公司征信界面</Text>
                {/*这里是模态弹出框*/}
                <Modal
                    animationType={this.state.animationType}
                    transparent={this.state.transparent}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {alert("Modal has been closed.")}}>
                    <View style={styles.selectPayMoneyWrapper}>
                        <Text>选择充值金额</Text>
                        <Text style={{width:40}}></Text>
                    </View>
                </Modal>
            </View>
        );
    }
}

let styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEEEEE',
    },
    inputsWrap:{
        margin:10,
        backgroundColor:'#fff',
        marginTop:30
    },
    email:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#FFFFFF',
        height:44,
        marginTop:30
    },
    emailText:{
        fontSize: 16,
        marginLeft: 10,
        borderWidth: 1,
        borderColor: 'transparent',
        color:'#666666'
    },

    labelWrap: {
        height: 45,
        justifyContent: 'center',
        width:60
    },
    label: {
        fontSize: 16,
        marginLeft: 10,
        borderWidth: 1,
        borderColor: 'transparent',
        color:'#666666'
    },
    inputWrap: {
        borderBottomColor:'#CCCCCC',
        backgroundColor:'#FFFFFF',
        height: 45,
        justifyContent: 'center',
        borderBottomWidth:1/ratio,
    },
    passwordinput:{
        height: 45,
        width: width-90,
        fontSize: 16,
        paddingLeft: 10,
    },
    selectPayMoneyWrapper:{
        position:'absolute',

        left:0,
        bottom:0,
        height:0.5*height,
        backgroundColor:'#fff',
        width:width,
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
        zIndex:5
    },
    selectPayMoney:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        height:40,
        borderBottomColor:'#cccccc',
        borderBottomWidth:1/ratio,
    },
    tips:{
        flexDirection:'row',
        height:20,
        justifyContent:'center',
        alignItems:'center',
        margin:5
    },
    itemMoneyS:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginLeft:5,
        marginRight:5
    },
    itemMoney:{
        backgroundColor:'#EDEEEF',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        width:80,
        height:60,
        flex:1,
        marginTop:3
    },
    moneySpecial:{
        marginLeft:3,
        marginRight:3
    }

});



















