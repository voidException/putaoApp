
import{
	StyleSheet,
	View,
	PixelRatio,
	Platform,
	Dimensions,
    WebView
} from 'react-native';

import React,{ Component } from 'react';
let ratio = PixelRatio.get();
let lineHeight = Platform.OS === 'ios' ? 14 : 16;
let statusBarHeight = Platform.OS === 'ios' ? 16 : 0;
let width=Dimensions.get('window').width;
let height=Dimensions.get('window').height;
export  default  class AboutUs extends Component{
	constructor(props){
		super(props);
	}
    componentDidMount(){      

    }
	render(){
		return(
			<View style={styles.container}>
                <WebView source={{uri:'http://localhost:63342/helpQy/appCode/helpQyPages/webView/FAQ.html?_ijt=dq3vq4aaumvvr8vku8ffk2nh4l'}}/>
            </View>
        );
	}
}

let styles=StyleSheet.create({
	container:{
		flex:1,
        backgroundColor:'#F9FFFC',
	}
 });