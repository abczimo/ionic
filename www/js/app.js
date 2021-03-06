var app = angular.module("starter" , ["ionic" , "controllers"]);
app.config(function($stateProvider , $urlRouterProvider , $ionicConfigProvider){

  $ionicConfigProvider.platform.ios.tabs.style('standard');   $ionicConfigProvider.platform.ios.tabs.position('bottom');        $ionicConfigProvider.platform.android.tabs.style('standard');
  $ionicConfigProvider.platform.android.tabs.position('standard');
  $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
  $ionicConfigProvider.platform.android.navBar.alignTitle('left');

  $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
  $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');
  $ionicConfigProvider.platform.ios.views.transition('ios');
  $ionicConfigProvider.platform.android.views.transition('android');

  //配置默认情况显示的界面
  $urlRouterProvider.otherwise("/tab/tuijian");

  //配置其他界面的路由状态
  $stateProvider.state("tab",{
    url:"/tab",
    abstract:true,
    templateUrl:"templates/tabs.html"
  });

  $stateProvider.state("tab.tuijian",{
    url:"/tuijian",
    views:{
      "tuijian":{
        templateUrl:"templates/tuijian.html",
        controller:"tuijianC"
      }
    }
  });
  //搜索框的页面
  $stateProvider.state("tab.searchDetail",{
    url:"/searchDetail",
    views:{
      "tuijian":{
        templateUrl:"templates/searchDetail.html",
        controller:"searchDetailC"
      }
    }
  });
  //点击搜索框的详情页面
  $stateProvider.state("tab.searchList",{
    url:"/searchList/:wd",
    views:{
      "tuijian":{
        templateUrl:"templates/searchList.html",
        controller:"searchListC"
      }
    }
  });
  //详情页面的明星动态
  $stateProvider.state("tab.videoDetile",{
    url:"/videoDetile/:starUrl",
    views:{
      "tuijian":{
        templateUrl:"allVideoDetail/videoDetile.html",
        controller:"videoDetileC"
      }
    }
  });
  //详情页面的美妆护肤
  $stateProvider.state("tab.meizhuang",{
    url:"/meizhuang/:meizhuangUrl",
    views:{
      "tuijian":{
        templateUrl:"allVideoDetail/meizhuang.html",
        controller:"meizhuangC"
      }
    }
  });
  //详情页面的娱乐八卦
  $stateProvider.state("tab.yule",{
    url:"/yule/:yuleUrl",
    views:{
      "tuijian":{
        templateUrl:"allVideoDetail/yule.html",
        controller:"yuleC"
      }
    }
  });
  //详情页面的美食精选
  $stateProvider.state("tab.food",{
    url:"/food/:foodUrl",
    views:{
      "tuijian":{
        templateUrl:"allVideoDetail/food.html",
        controller:"foodC"
      }
    }
  });
  //详情页面的星座运程
  $stateProvider.state("tab.xingzuo1",{
    url:"/xingzuo/:xingzuoUrl",
    views:{
      "tuijian":{
        templateUrl:"allVideoDetail/xingzuo.html",
        controller:"xingzuo1C"
      }
    }
  });
  //详情页面的减肥健身
  $stateProvider.state("tab.jianfei1",{
    url:"/jianfei/:jianfeiUrl",
    views:{
      "tuijian":{
        templateUrl:"allVideoDetail/jianfei.html",
        controller:"jianfei1C"
      }
    }
  });
  //详情页面的旅游推荐
  $stateProvider.state("tab.lvyou",{
    url:"/lvyou/:lvyouUrl",
    views:{
      "tuijian":{
        templateUrl:"allVideoDetail/lvyou.html",
        controller:"lvyouC"
      }
    }
  });


  //明星专区
  $stateProvider.state("tab.star",{
    url:"/star",
    views:{
      "star":{
        templateUrl:"templates/star.html",
        controller:"starC"
      }
    }
  });
  //明星排行
  $stateProvider.state("tab.starRank",{
    url:"/starRank/:starRank",
    views:{
      "star":{
        templateUrl:"starShow/starRank.html",
        controller:"starRankC"
      }
    }
  });
  //明星的详细资料
  $stateProvider.state("tab.baiduDetail",{
    url:"/starRank/:baikeUrl",
    views:{
      "star":{
        templateUrl:"starShow/baiduDetail.html",
        controller:"baiduDetailC"
      }
    }
  });
  //明星排行榜的更多
  $stateProvider.state("tab.starMore", {
    url: "/starMore",
    views: {
      'star': {
        templateUrl: "starShow/starMore.html",
        controller: "starMoreC"
      }
    }
  });
  // 明星排行榜中的详情数据
  $stateProvider.state("tab.starRank.newsDong",{
    url:"/newsDong/:sid",
    views:{
      "newsDong":{
        templateUrl:"starShow/newsDong.html",
        controller:"newsDongC"
      }
    }
  });
  //明星动态的视频详情页面
  $stateProvider.state("tab.starRank.newsVideo",{
    url:"/newsVideo/:newsVideo",
    views:{
      "newsDong":{
        templateUrl:"starShow/newsVideo.html",
        controller:"newsVideoC"
      }
    }
  });
  //作品集
  $stateProvider.state("tab.starRank.zuopin",{
    url:"/zuopin/:sid",
    views:{
      "zuopin":{
        templateUrl:"starShow/zuopin.html",
        controller:"zuopinC"
      }
    }
  });
  //作品集的视频详情页面
  $stateProvider.state("tab.starRank.zuopinVideo",{
    url:"/zuopinVideo/:zuopinVideo",
    views:{
      "zuopin":{
        templateUrl:"starShow/zuopinVideo.html",
        controller:"zuopinVideoC"
      }
    }
  });
  //粉丝区
  $stateProvider.state("tab.starRank.fans",{
    url:"/fans/:sid",
    views:{
      "fans":{
        templateUrl:"starShow/fans.html",
        controller:"fansC"
      }
    }
  });
  $stateProvider.state("tab.starRank.fansDetail",{
    url:"/fans/:tid",
    views:{
      "fans":{
        templateUrl:"starShow/fansDetail.html",
        controller:"fansDetailC"
      }
    }
  });

  //明星动态
  $stateProvider.state("tab.starDynamic",{
    url:"/starDynamic/:starDynamic",
    views:{
      "star":{
        templateUrl:"starShow/starDynamic.html",
        controller:"starDynamicC"
      }
    }
  });


  //发现
  $stateProvider.state("tab.faxian", {
    url: "/faxian",
    views: {
      'faxian': {
        templateUrl: "templates/faxian.html",
        controller: "faxianC"
      }
    }
  });
  //发现-护肤
  $stateProvider.state("tab.hufu",{
    url:"/hufu",
    views:{
      "faxian":{
        templateUrl:"faxian/hufu.html",
        controller:"hufuC"
      }
    }
  })
  //发现-护肤-推荐
  $stateProvider.state("tab.hufu.tuijianH",{
    url:"/hufu/tuijianH",
    views:{
      "tuijianH":{
        templateUrl:"meizhuang/tuijianH.html",
        controller:"tuijianH"
      }
    }
  });
  //发现-护肤-化妆
  $stateProvider.state("tab.hufu.huazhuang",{
    url:"/hufu/huazhuang",
    views:{
      "huazhuang":{
        templateUrl:"meizhuang/huazhuang.html",
        controller:"huazhuangC"
      }
    }
  });
  //发现-护肤-护肤
  $stateProvider.state("tab.hufu.hufu",{
    url:"/hufu/hufu",
    views:{
      "hufu":{
        templateUrl:"meizhuang/hufu.html",
        controller:"hufuH"
      }
    }
  });
  //发现-护肤-发型
  $stateProvider.state("tab.hufu.faxing",{
    url:"/hufu/faxing",
    views:{
      "faxing":{
        templateUrl:"meizhuang/faxing.html",
        controller:"faxingC"
      }
    }
  });
  //发现-护肤-美甲
  $stateProvider.state("tab.hufu.meijia",{
    url:"/hufu/meijia",
    views:{
      "meijia":{
        templateUrl:"meizhuang/meijia.html",
        controller:"meijiaC"
      }
    }
  });
  //发现-护肤-测评
  $stateProvider.state("tab.hufu.cepin",{
    url:"/hufu/cepin",
    views:{
      "cepin":{
        templateUrl:"meizhuang/cepin.html",
        controller:"cepinC"
      }
    }
  });
  //发现-护肤-推荐-详情
  $stateProvider.state("tab.hufu.tuijianvideo",{
    url:"/hufu/tuijianvideo/:videoUrl",
    views:{
      "tuijianH":{
        templateUrl:"meizhuang/tuijianvideo.html",
        controller:"tuijianvideoC"
      }
    }
  });
  //发现-护肤-化妆-详情
  $stateProvider.state("tab.hufu.huazhuangvideo",{
    url:"/hufu/huazhuangvideo/:videoUrl",
    views:{
      "tuijianH":{
        templateUrl:"meizhuang/huazhuangvideo.html",
        controller:"huazhuangvideoC"
      }
    }
  });
  //发现-护肤-护肤-详情
  $stateProvider.state("tab.hufu.hufuvideo",{
    url:"/hufu/hufuvideo/:videoUrl",
    views:{
      "tuijianH":{
        templateUrl:"meizhuang/hufuvideo.html",
        controller:"hufuvideoC"
      }
    }
  });
  //发现-护肤-发型-详情
  $stateProvider.state("tab.hufu.faxingvideo",{
    url:"/hufu/faxingvideo/:videoUrl",
    views:{
      "tuijianH":{
        templateUrl:"meizhuang/faxingvideo.html",
        controller:"faxingvideoC"
      }
    }
  });
  //发现-护肤-美甲-详情
  $stateProvider.state("tab.hufu.meijiavideo",{
    url:"/hufu/meijiavideo/:videoUrl",
    views:{
      "tuijianH":{
        templateUrl:"meizhuang/meijiavideo.html",
        controller:"meijiavideoC"
      }
    }
  });
  //发现-护肤-测评-详情
  $stateProvider.state("tab.hufu.cepinvideo",{
    url:"/hufu/cepinvideo/:videoUrl",
    views:{
      "tuijianH":{
        templateUrl:"meizhuang/cepinvideo.html",
        controller:"cepinvideoC"
      }
    }
  });

  //发现-美食
  $stateProvider.state("tab.meishi",{
    url:"/meishi",
    views:{
      "faxian":{
        templateUrl:"faxian/meishi.html",
        controller:"meishiC"
      }
    }
  })
  //发现-美食-推荐
  $stateProvider.state("tab.meishi.tuijianM",{
    url:"/meishi/tuijianM",
    views:{
      "tuijianM":{
        templateUrl:"meishi/tuijianM.html",
        controller:"tuijianM"
      }
    }
  });
  //发现-美食-甜品
  $stateProvider.state("tab.meishi.tianpin",{
    url:"/meishi/tianpin",
    views:{
      "tianpin":{
        templateUrl:"meishi/tianpin.html",
        controller:"tianpinC"
      }
    }
  });
  //发现-美食-烘焙
  $stateProvider.state("tab.meishi.hongbei",{
    url:"/meishi/hongbei",
    views:{
      "hongbei":{
        templateUrl:"meishi/hongbei.html",
        controller:"hongbeiC"
      }
    }
  });
  //发现-美食-日韩料理
  $stateProvider.state("tab.meishi.rihan",{
    url:"/meishi/rihan",
    views:{
      "rihan":{
        templateUrl:"meishi/rihan.html",
        controller:"rihanC"
      }
    }
  });
  //发现-美食-西餐
  $stateProvider.state("tab.meishi.xican",{
    url:"/meishi/xican",
    views:{
      "xican":{
        templateUrl:"meishi/xican.html",
        controller:"xicanC"
      }
    }
  });
  //发现-美食-推荐-详情
  $stateProvider.state("tab.meishi.tuijianMvideo",{
    url:"/meishi/tuijianMvideo/:videoUrl",
    views:{
      "tuijianM":{
        templateUrl:"meishi/tuijianMvideo.html",
        controller:"tuijianMvideoC"
      }
    }
  });
  //发现-美食-甜品-详情
  $stateProvider.state("tab.meishi.tianpinvideo",{
    url:"/meishi/tianpinvideo/:videoUrl",
    views:{
      "tuijianM":{
        templateUrl:"meishi/tianpinvideo.html",
        controller:"tianpinvideoC"
      }
    }
  });
  //发现-美食-烘焙-详情
  $stateProvider.state("tab.meishi.hongbeivideo",{
    url:"/meishi/hongbeivideo/:videoUrl",
    views:{
      "tuijianM":{
        templateUrl:"meishi/hongbeivideo.html",
        controller:"hongbeivideoC"
      }
    }
  });
  //发现-美食-日韩料理-详情
  $stateProvider.state("tab.meishi.rihanvideo",{
    url:"/meishi/rihanvideo/:videoUrl",
    views:{
      "tuijianM":{
        templateUrl:"meishi/rihanvideo.html",
        controller:"rihanvideoC"
      }
    }
  });
  //发现-美食-西餐-详情
  $stateProvider.state("tab.meishi.xicanvideo",{
    url:"/meishi/xicanvideo/:videoUrl",
    views:{
      "tuijianM":{
        templateUrl:"meishi/xicanvideo.html",
        controller:"xicanvideoC"
      }
    }
  });




  //发现-减肥健身
  $stateProvider.state("tab.jianfei",{
    url:"/jianfei",
    views:{
      "faxian":{
        templateUrl:"faxian/jianfei.html",
        controller:"jianfeiC"
      }
    }
  })
  //发现-减肥健身-推荐
  $stateProvider.state("tab.jianfei.tuijianJ",{
    url:"/jianfei/tuijianJ",
    views:{
      "tuijianJ":{
        templateUrl:"jianshen/tuijianJ.html",
        controller:"tuijianJ"
      }
    }
  });
  //发现-减肥健身-瘦身塑性
  $stateProvider.state("tab.jianfei.shoushen",{
    url:"/jianfei/shoushen",
    views:{
      "shoushen":{
        templateUrl:"jianshen/shoushen.html",
        controller:"shoushenC"
      }
    }
  });
  //发现-减肥健身-燃脂
  $stateProvider.state("tab.jianfei.ranzhi",{
    url:"/jianfei/ranzhi",
    views:{
      "ranzhi":{
        templateUrl:"jianshen/ranzhi.html",
        controller:"ranzhiC"
      }
    }
  });
  //发现-减肥健身-瑜伽
  $stateProvider.state("tab.jianfei.yvjia",{
    url:"/jianfei/yvjia",
    views:{
      "yvjia":{
        templateUrl:"jianshen/yvjia.html",
        controller:"yvjiaC"
      }
    }
  });
  //减肥健身-马甲线
  $stateProvider.state("tab.jianfei.majiaxian",{
    url:"/jianfei/majiaxian",
    views:{
      "majiaxian":{
        templateUrl:"jianshen/majiaxian.html",
        controller:"majiaxianC"
      }
    }
  });

  //发现-减肥健身-推荐-详情
  $stateProvider.state("tab.jianfei.tuijianJvideo",{
    url:"/jianfei/tuijianJvideo/:videoUrl",
    views:{
      "tuijianJ":{
        templateUrl:"jianshen/tuijianJvideo.html",
        controller:"tuijianJvideoC"
      }
    }
  });
  //发现-减肥健身-瘦身塑性-详情
  $stateProvider.state("tab.jianfei.shoushenvideo",{
    url:"/jianfei/shoushenvideo/:videoUrl",
    views:{
      "tuijianJ":{
        templateUrl:"jianshen/shoushenvideo.html",
        controller:"shoushenvideoC"
      }
    }
  });
  //发现-减肥健身-燃脂-详情
  $stateProvider.state("tab.jianfei.ranzhivideo",{
    url:"/jianfei/ranzhivideo/:videoUrl",
    views:{
      "tuijianJ":{
        templateUrl:"jianshen/ranzhivideo.html",
        controller:"ranzhivideoC"
      }
    }
  });
  //发现-减肥健身-瑜伽-详情
  $stateProvider.state("tab.jianfei.yvjiavideo",{
    url:"/jianfei/yvjiavideo/:videoUrl",
    views:{
      "tuijianJ":{
        templateUrl:"jianshen/yvjiavideo.html",
        controller:"yvjiavideoC"
      }
    }
  });
  //发现-减肥健身-马甲线-详情
  $stateProvider.state("tab.jianfei.majiaxianvideo",{
    url:"/jianfei/majiaxianvideo/:videoUrl",
    views:{
      "tuijianJ":{
        templateUrl:"jianshen/majiaxianvideo.html",
        controller:"majiaxianvideoC"
      }
    }
  });

  //发现-娱乐
  $stateProvider.state("tab.yvle",{
    url:"/yvle",
    views:{
      "faxian":{
        templateUrl:"faxian/yvle.html",
        controller:"yvleC"
      }
    }
  });
  //发现-娱乐-推荐
  $stateProvider.state("tab.yvle.tuijianY",{
    url:"/yvle/tuijianY",
    views:{
      "tuijianY":{
        templateUrl:"yvle/tuijianY.html",
        controller:"tuijianY"
      }
    }
  });
  //发现-娱乐-韩国娱乐
  $stateProvider.state("tab.yvle.hanguo",{
    url:"/yvle/hanguo",
    views:{
      "hanguo":{
        templateUrl:"yvle/hanguo.html",
        controller:"hanguoC"
      }
    }
  });
  //发现-娱乐-明星资讯
  $stateProvider.state("tab.yvle.mingxin",{
    url:"/yvle/mingxin",
    views:{
      "mingxin":{
        templateUrl:"yvle/mingxin.html",
        controller:"mingxinC"
      }
    }
  });
  //发现-娱乐-影视资讯
  $stateProvider.state("tab.yvle.yingshi",{
    url:"/yvle/yingshi",
    views:{
      "yingshi":{
        templateUrl:"yvle/yingshi.html",
        controller:"yingshiC"
      }
    }
  });
  //发现-娱乐-推荐-详情
  $stateProvider.state("tab.yvle.tuijianYvideo",{
    url:"/yvle/tuijianYvideo/:videoUrl",
    views:{
      "tuijianY":{
        templateUrl:"yvle/tuijianYvideo.html",
        controller:"tuijianYvideoC"
      }
    }
  });
  //发现-娱乐-韩国娱乐-详情
  $stateProvider.state("tab.yvle.hanguovideo",{
    url:"/yvle/hanguovideo/:videoUrl",
    views:{
      "tuijianY":{
        templateUrl:"yvle/hanguovideo.html",
        controller:"hanguovideoC"
      }
    }
  });
  //发现-娱乐-明星资讯-详情
  $stateProvider.state("tab.yvle.mingxinvideo",{
    url:"/yvle/mingxinvideo/:videoUrl",
    views:{
      "tuijianY":{
        templateUrl:"yvle/mingxinvideo.html",
        controller:"mingxinvideoC"
      }
    }
  });
  //发现-娱乐-影视资讯-详情
  $stateProvider.state("tab.yvle.yingshivideo",{
    url:"/yvle/yingshivideo/:videoUrl",
    views:{
      "tuijianY":{
        templateUrl:"yvle/yingshivideo.html",
        controller:"yingshivideoC"
      }
    }
  });

  //发现-星座
  $stateProvider.state("tab.xingzuo",{
    url:"/xingzuo",
    views:{
      "faxian":{
        templateUrl:"faxian/xingzuo.html",
        controller:"xingzuoC"
      }
    }
  })
  //发现-星座-推荐
  $stateProvider.state("tab.xingzuo.tuijianX",{
    url:"/xingzuo/tuijianX",
    views:{
      "tuijianX":{
        templateUrl:"xingzuo/tuijianX.html",
        controller:"tuijianX"
      }
    }
  });
  //发现-星座-推荐-详情
  $stateProvider.state("tab.xingzuo.tuijianXvideo",{
    url:"/xingzuo/tuijianXvideo/:videoUrl",
    views:{
      "tuijianX":{
        templateUrl:"xingzuo/tuijianXvideo.html",
        controller:"tuijianXvideoC"
      }
    }
  });

  //发现-旅行
  $stateProvider.state("tab.lvxing",{
    url:"/lvxing",
    views:{
      "faxian":{
        templateUrl:"faxian/lvxing.html",
        controller:"lvxingC"
      }
    }
  })
  //发现-旅行-推荐
  $stateProvider.state("tab.lvxing.tuijianL",{
    url:"/lvxing/tuijianL",
    views:{
      "tuijianL":{
        templateUrl:"lvxing/tuijianL.html",
        controller:"tuijianL"
      }
    }
  });
  //发现-旅行-北美
  $stateProvider.state("tab.lvxing.rihan",{
    url:"/rihan/shoushen",
    views:{
      "rihan":{
        templateUrl:"lvxing/rihan.html",
        controller:"beimeiC"
      }
    }
  });
  //发现-旅行-国内游
  $stateProvider.state("tab.lvxing.guonei",{
    url:"/lvxing/guonei",
    views:{
      "guonei":{
        templateUrl:"lvxing/guonei.html",
        controller:"guoneiC"
      }
    }
  });
  //发现-旅行-东南亚
  $stateProvider.state("tab.lvxing.dongnanya",{
    url:"/lvxing/dongnanya",
    views:{
      "dongnanya":{
        templateUrl:"lvxing/dongnanya.html",
        controller:"dongnanyaC"
      }
    }
  });
  //发现-旅行-欧洲
  $stateProvider.state("tab.lvxing.ouzhou",{
    url:"/lvxing/ouzhou",
    views:{
      "ouzhou":{
        templateUrl:"lvxing/ouzhou.html",
        controller:"ouzhouC"
      }
    }
  });
  //发现-旅行-推荐-详情
  $stateProvider.state("tab.lvxing.tuijianLvideo",{
    url:"/lvxing/tuijianLvideo/:videoUrl",
    views:{
      "tuijianL":{
        templateUrl:"lvxing/tuijianLvideo.html",
        controller:"tuijianJvideoC"
      }
    }
  });
  //发现-旅行-北美-详情
  $stateProvider.state("tab.lvxing.rihanvideo",{
    url:"/lvxing/rihanvideo/:videoUrl",
    views:{
      "tuijianL":{
        templateUrl:"lvxing/rihanvideo.html",
        controller:"beimeivideoC"
      }
    }
  });
  //发现-旅行-国内游-详情
  $stateProvider.state("tab.lvxing.guoneivideo",{
    url:"/lvxing/guoneivideo/:videoUrl",
    views:{
      "tuijianL":{
        templateUrl:"lvxing/guoneivideo.html",
        controller:"guoneivideoC"
      }
    }
  });
  //发现-旅行-东南亚-详情
  $stateProvider.state("tab.lvxing.dongnanyavideo",{
    url:"/lvxing/dongnanyavideo/:videoUrl",
    views:{
      "tuijianL":{
        templateUrl:"lvxing/dongnanyavideo.html",
        controller:"dongnanyavideoC"
      }
    }
  });
  //发现-旅行-欧洲-详情
  $stateProvider.state("tab.lvxing.ouzhouvideo",{
    url:"/lvxing/ouzhouvideo/:videoUrl",
    views:{
      "tuijianL":{
        templateUrl:"lvxing/ouzhouvideo.html",
        controller:"ouzhouvideoC"
      }
    }
  });



  //发现-用户
  $stateProvider.state("tab.yonghu",{
    url:"/yonghu",
    views:{
      "faxian":{
        templateUrl:"faxian/yonghu.html",
        controller:"yonghuC"
      }
    }
  })
  //发现-用户-推荐
  $stateProvider.state("tab.yonghu.tuijianY",{
    url:"/yonghu/tuijianY",
    views:{
      "tuijianY":{
        templateUrl:"yonghu/tuijianY.html",
        controller:"tuijianY"
      }
    }
  });
  //发现-用户-电视剧
  $stateProvider.state("tab.yonghu.dianshiju",{
    url:"/yonghu/dianshiju",
    views:{
      "dianshiju":{
        templateUrl:"yonghu/dianshiju.html",
        controller:"dianshijuC"
      }
    }
  });
  //发现-用户-综艺
  $stateProvider.state("tab.yonghu.zongyi",{
    url:"/yonghu/zongyi",
    views:{
      "zongyi":{
        templateUrl:"yonghu/zongyi.html",
        controller:"zongyiC"
      }
    }
  });
  //发现-用户-电影
  $stateProvider.state("tab.yonghu.dianying",{
    url:"/yonghu/dianying",
    views:{
      "dianying":{
        templateUrl:"yonghu/dianying.html",
        controller:"dianyingC"
      }
    }
  });
  //发现-用户-推荐-详情
  $stateProvider.state("tab.yonghu.tuijianYvideo",{
    url:"/yonghu/tuijianYvideo/:videoUrl",
    views:{
      "tuijianY":{
        templateUrl:"yonghu/tuijianYvideo.html",
        controller:"tuijianYvideoC"
      }
    }
  });
  //发现-用户-电视剧-详情
  $stateProvider.state("tab.yonghu.dianshijuvideo",{
    url:"/yonghu/dianshijuvideo/:videoUrl",
    views:{
      "tuijianY":{
        templateUrl:"yonghu/dianshijuvideo.html",
        controller:"dianshijuvideoC"
      }
    }
  });
  //发现-用户-综艺-详情
  $stateProvider.state("tab.yonghu.zongyivideo",{
    url:"/yonghu/zongyivideo/:videoUrl",
    views:{
      "tuijianY":{
        templateUrl:"yonghu/zongyivideo.html",
        controller:"zongyivideoC"
      }
    }
  });
  //发现-用户-电影-详情
  $stateProvider.state("tab.yonghu.dianyingvideo",{
    url:"/yonghu/dianyingvideo/:videoUrl",
    views:{
      "tuijianY":{
        templateUrl:"yonghu/dianyingvideo.html",
        controller:"dianyingvideoC"
      }
    }
  });

  //发现-讨论区
  $stateProvider.state("tab.taolun", {
    url: "/taolun/:bid",
    views: {
      'faxian': {
        templateUrl: "faxianTL/taolun.html",
        controller: "taolunC"
      }
    }
  });
  //发现-讨论区-讨论区的详情页面
  $stateProvider.state("tab.taolunDetail",{
    url:"/taolunDetail/:tid",
    views:{
      "faxian":{
        templateUrl:"faxianTL/taolunDetail.html",
        controller:"taolunDetailC"
      }
    }
  });
  //发现-热门讨论区
  $stateProvider.state("tab.remen",{
    url:"/remen:sid",
    views: {
      "faxian": {
        templateUrl: "faxian/rementaolu.html",
        controller: "remenC"
      }
    }
  });
  //发现-热门讨论区详情
  $stateProvider.state("tab.renmenDetail",{
    url:"/renmenDetail:tid",
    views: {
      "faxian": {
        templateUrl: "faxian/remenDetail.html",
        controller: "renmenDetailC"
      }
    }
  });

  //视频播客页面
  $stateProvider.state("tab.videoBoke",{
    url:"/videoBoke",
    views:{
      "videoBoke":{
        templateUrl:"templates/videoBoke.html",
        controller:"videoBokeC"
      }
    }
  });
  //视频播客的详情页面
  $stateProvider.state("tab.xiangqing",{
    url:"/xiangqing/:xiangqing/:biaoti",
    views:{
      "videoBoke":{
        templateUrl:"templates/xiangqing.html",
        controller:"xiangqingC"
      }
    }
  });


  $stateProvider.state("tab.wode",{
    url:"/wode",
    views:{
      "wode":{
        templateUrl:"templates/wode.html",
        controller:"wodeC"
      }
    }
  });
  $stateProvider.state("tab.nbaNews",{
    url:"/nbaNews",
    views:{
      "nbaNews":{
        templateUrl:"templates/nbaNews.html",
        controller:"nbaNewsC"
      }
    }
  });
  $stateProvider.state("tab.newsDetail",{
    url:"/newsDetail/:data",
    views:{
      "nbaNews":{
        templateUrl:"templates/newsDetail.html",
        controller:"newsDetailC"
      }
    }
  });
});
app.value("myValue" , {
  appValue:"true",
  QQIsLogin:""
});
