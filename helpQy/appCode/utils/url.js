let commonUrl='http://101.200.33.138:8080/glove';

export const URLLogin=commonUrl+'/user/login.do';
export const URLRegister=commonUrl+'/user/register.do';
export const URLFindPasswd=commonUrl+'/user/findpassword.do';
export const UrlStatistics=commonUrl+'/ship/getStatistics.do'; //获取统计表的数据
export const UrlAddEmployee=commonUrl+'/ship/addEmployee.do'; //新增员工
export const UrlgetMyemployee=commonUrl+'/ship/getMyEmployee.do'; //获取我的员工列表
export const UrlgetPublicList=commonUrl+'/ship/getPublicList.do'; //获得公示列表
export const UrlgetMyRedMoney=commonUrl+'/person/myCoupon.do';  //红包
export const UrluseMyRedMoney=commonUrl+'/person/useMyRedMoney.do';//使用红包

/********************以下是以前的************************************************/
export const URLWeiboPage=commonUrl+'/tuiwen/getTweetByOtherUseriD'; //咋userPage页面查看对方发布的微博
export const URLTweetPage =commonUrl+'/tuiwen/getMyselfPublishedTweetByMyiD'; //适合查看自己发布转发的
export const URLTuiwenPage=commonUrl+'/tuiwen/getTweetByUseriD';//适合查用户关注的推文
export const URLItemPage=commonUrl+'/item/list';
export const URLWheelImg=commonUrl+'/picture/getpicture';
export const UrlCommomPeopleList=commonUrl+'/peoplelist/lsmen'; //1普通，2社团，3监督，4青年志愿者，5社会公益机构 
export const UrlWatchList=commonUrl+'/peoplelist/watchs'; //我关注的人列表  10
export const UrlFansList=commonUrl+'/peoplelist/fans';   //我的粉丝   11
export const UrlHelpMeList=commonUrl+'/peoplelist/helpme';  //帮助我的人列表   20
export const UrliHelpList=commonUrl+'/peoplelist/ihelp'; //我帮助的人列表    21
export const UrligongyiList=commonUrl+'/peoplelist/donater';  //公益排行榜
export const UrlUploadFile=commonUrl+'/demo/upload/multiUpload'; //发表推文
export const UrldoZhuanfa=commonUrl+'/weibos/zhuanfaTweet'; //转发推文
export const UrlcommentList=commonUrl+'/tweetcomment/listcomments';//一条推文的评论列表
export const UrlAddNeedMan=commonUrl+'/cash/addhelpman'; //增加一个需要帮助的人
export const UrlJoinLoveClue=commonUrl+'/renzheng/author'; //加入爱心社认证,监督处认证，个人实名认证，公益机构认证
export const UrlpostAffirm=commonUrl+'/zhengshi/affirm'; //这是发布一条证实的接口地址 
export const UrladdCommont=commonUrl+'/tweetcomment/addcomment'; //这个是增加一条评论的
export const UrlConfirmReport=commonUrl+'/confirm/report'; //举报推文
export const Urlresetpass=commonUrl+'/user/resetpassapp.do'; //重置密码
export const UrlcompleteProfile=commonUrl+'/profile/completeProfile';
export const UrluploadPhoto=commonUrl+'/photo/upload';
export const UrldoWatch=commonUrl+'/watch/dowatch'; //关注一个人
export const UrlcancelWatch=commonUrl+'/watch/cancelwatch'; //取消关注一个人
export const UrlqueryWatchif=commonUrl+'/watch/querywatchif'; //查询是否关注一个人
export const UrlByAtgetUserProfile=commonUrl+'/user/getprofile/bynickname';
export const UrlDeleteTwitter=commonUrl+'/weibos/deleteTweetByID'; //删除一条推文
export const UrlCashConfirmRecord=commonUrl+'/timelinetweet/getInfoByCashUUID/';
export const UrlCashRecord=commonUrl+'/cash/getcashrecord';
export const UrlAffirmList=commonUrl+'/confirm/getconfirmls'; //affirm 中，获取证实人列表
export const UrlGatherInfo=commonUrl+'/gatherinfo/byid'; //资助页面
export const UrlHelpApp=commonUrl+'/pages/helpApp'; //资助我们
export const UrlHelpAixinshe=commonUrl+'/pages/helpAixinshe'; //赞助爱心社
export const UrlAboutUs=commonUrl+'/pages/aboutus';  //关于我们
export const UrlFeedBack=commonUrl+'/pages/feedback'; //意见反馈
export const UrlFAQ=commonUrl+'/pages/faq'; //常见问题

























