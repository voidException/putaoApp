/**
 * 这个是奖励的列表
 */
import{
    StyleSheet,
    View,
    Dimensions,
    TouchableOpacity
} from 'react-native';

import  React,{Component,} from 'react';
let { width,height}=Dimensions.get('window');

export  default  class CheckBox extends React.PureComponent{
    constructor(props){
        super(props);
        this.state={
            backgroundColor:'#1296db'
        };
    }

    componentWillMount(){

    }
    onPress(){
        let {id,onCheck}=this.props;
        onCheck(id);
    }

    render(){
        let color=this.props.checked ? this.state.backgroundColor:'#FFFFFF';

        return(
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
            <TouchableOpacity onPress={this.onPress.bind(this)}
            style={{borderWidth:2,borderColor:'#d9d9d9',backgroundColor:color,width:16,height:16,borderRadius:8}}>
            </TouchableOpacity>
            </View>
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



















