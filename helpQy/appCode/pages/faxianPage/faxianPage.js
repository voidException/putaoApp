import{
	AppRegistry,
	StyleSheet,
	Text,
	Image,
	ScrollView,
	TouchableHighlight,
	TouchableOpacity,
	NavigatorIOS,

	RefreshControl,
	View,
	StatusBar,
	Platform,
    PixelRatio,
    Dimensions,
	ListView,
	WebView,
	Alert
} from 'react-native';
import React,{ Component } from 'react';
import { connect } from 'react-redux';
let ratio = PixelRatio.get();
let lineHeight = Platform.OS === 'ios' ? 14 : 16;
let statusBarHeight = Platform.OS === 'ios' ? 20 : 0;
let width=Dimensions.get('window').width;
let height=Dimensions.get('window').height;
let loveImg = require('../../image/25.jpg');//慈善排行榜

 class FaxianPageP extends Component{
	constructor(props){
		super(props);
		this.state={
			
		}
		
	}
	componentDidMount(){
		
	}

	render(){
		
		return(
			<View style={styles.wrapper}>
				<Text>这个是发现</Text>
	      </View>
		);
	}
}
function mapStateToProps(state,ownProps){

	//这里的state就是store里面的各种键值对,store是个外壳
	//在这个函数中，应该从store中取出所有需要的state，向下传递
	const { userProfile}= state;	 
	return {
		userProfile:userProfile
	}
}
 const FaxianPage=connect(mapStateToProps)(FaxianPageP);
 export default FaxianPage;
let styles=StyleSheet.create({
	 wrapper: {
	 	flex:1 ,
	 	backgroundColor:'#F9FFFC',
	
	 },
	topper:{
	 	paddingTop:statusBarHeight,
	 	height:51,
	 	justifyContent:'center',
	 	alignItems:'center',
	 	backgroundColor:'#43AC43'
	 	
	 },
	 ad:{
	 	paddingTop:15,
	 	flexDirection:'column',
	 	backgroundColor:'#EFFBEF'
	 },
	 superUs:{
	 	flexDirection:'row',
	 	alignItems:'center',
	 	justifyContent:'center',
	 	height:30
	 },
	 addown:{
	 	//marginTop:10,
	 	flexDirection:'row',
	 	justifyContent:'space-around',
	 	
	 },
	 sunTxt:{
	 	alignItems:'center',
	 	justifyContent:'center'
	 },
	 welcomeJoin:{
	 	flexDirection:'row',
	 	justifyContent:'space-around',
	 	alignItems:'center',
	 	height:35,
	 	backgroundColor:'#EFFBEF'
	 },
	 welcomeJoinUs:{
	 	height:24,
	 	width:76,
	 	borderRadius:30,
	 	backgroundColor:'#31A75B',
	 	flexDirection:'row',
	 	alignItems:'center',
	 	justifyContent:'center'
	 },
	swiper:{
	 	height:0.3*height,
	 	marginTop:1,
	 },
	slide1: {	    
	    justifyContent: 'center',
	    alignItems: 'center',
	    backgroundColor: '#BCBCBC',
	    
	  },
	slide2: {    
	    justifyContent: 'center',
	    alignItems: 'center',
	    backgroundColor: '#97CAE5',
	  
	  },
	 slide3: {  
	    justifyContent: 'center',
	    alignItems: 'center',
	    backgroundColor: '#92BBD9',
	   
	},
	itemWrapperTop:{
		flexDirection:'row',
		justifyContent:'flex-start',
		alignItems:'center',
		//marginTop:15,
		backgroundColor:'#ffffff'
	},
	itemWrapperSociety:{
		flexDirection:'row',
		justifyContent:'center',
		alignItems:'center',
		//marginTop:20,
		// borderBottomWidth:1/ratio,		
		// borderBottomColor:'#9D9D9D',
		backgroundColor:'#ffffff',
		marginBottom:10
	},
    societyImg:{
    	height:60,
    	width:60,
    	position:'absolute',
    	top:0,
    	left:0
    },
	shehui:{
		width:width,
		alignItems:'center',
		justifyContent:'center',
		height:60
	},
	shehuidown:{
		flexDirection:'row',
		justifyContent:'space-between',
		marginTop:10,
	},
	rightWrapper:{
		// borderTopWidth:1/ratio,		
		// borderTopColor:'#9D9D9D',
		borderBottomWidth:1/ratio,		
		borderBottomColor:'#9D9D9D',
		flexDirection:'row',
		justifyContent:'space-between',
		alignItems:'center',
		height:40,
		width:width-40
	},
	aboutUsWrapper:{
		// borderTopWidth:1/ratio,		
		// // borderTopColor:'#9D9D9D',
		// borderBottomWidth:1/ratio,		
		// borderBottomColor:'#9D9D9D',
		flexDirection:'row',
		justifyContent:'space-between',
		alignItems:'center',
		height:40,
		width:width-40
	},
	rightWrapperSociety:{
		borderTopWidth:1/ratio,		
		borderTopColor:'#9D9D9D',
		// borderBottomWidth:1/ratio,		
		// borderBottomColor:'#9D9D9D',
		flexDirection:'row',
		justifyContent:'space-between',
		alignItems:'center',
		height:40,
		width:width-40
	},
	textSociety:{
		// borderBottomWidth:1/ratio,		
		// borderBottomColor:'red',
		height:40,
		alignItems:'center',
		justifyContent:'center',
		width:200
	},
	
	leftWrapperImage:{
		width:40,
		height:40,		
	},
	rightWrapperImage:{
		width:40,
		height:40,		
	},
	rightImage:{
		height:15,
		width:15,
		marginRight:10
	},
	gloveImage:{
		height:20,
		width:20
	},
	Supervision:{
		flexDirection:'column',
		alignItems:'center',
		justifyContent:'center',
        borderTopWidth:1/ratio,		
		borderTopColor:'#9D9D9D',
	},
	superText:{
		flexDirection:'row',
		justifyContent:'center',
		alignItems:'center',
		height:35
	},
	eyes:{
		flexDirection:'row',
		justifyContent:'space-between',
		alignItems:'flex-end'
	},
	eyeTop:{
		width:15,
		height:15,
		
	},
	eyeRight:{
		width:20,
		height:20,
		marginLeft:40,
		marginBottom:-6
	},
	eyeLeft:{
		width:20,
		height:20,
		marginRight:40,
		marginBottom:-6
	},
	gloveWrapper:{
		flexDirection:'row',
		justifyContent:'space-around',
		alignItems:'center',
		//borderBottomWidth:1/ratio,
		//borderBottomColor:'red',
		marginBottom:15
	},
	gloveMiddle:{
		flexDirection:'row',
		justifyContent:'center',
		alignItems:'center',
		borderTopWidth:1/ratio,		
		borderTopColor:'#CCCCCC',
		height:40
	},
	loveCubtxt:{
		marginRight:25,
		fontWeight:'bold'
	},
	loveCubtxt:{
		marginRight:25,
		fontWeight:'bold'
	},
	volunteer:{
		marginLeft:25,
		fontWeight:'bold'
	},
	texts: {	   
	    fontSize: 16,
	    alignSelf:'center'
	},
	sunShine:{
		position:'absolute',
		top:60,
		right:10
	},
	sound:{
		position:'absolute',
		left:40,
		top:78
	}
});












