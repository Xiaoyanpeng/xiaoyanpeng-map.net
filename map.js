(function(){
  $("head").append('<link rel="stylesheet" href="http://api.map.baidu.com/library/SearchInfoWindow/1.5/src/SearchInfoWindow_min.css"/>');

  var map = new BMap.Map("traffic-map");
  var point = new BMap.Point(118.19, 24.4733);
  map.centerAndZoom(point, 16);

  var top_left_control = new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT});// 左上角，添加比例尺
  var top_left_navigation = new BMap.NavigationControl();  //左上角，添加默认缩放平移控件
  var top_right_navigation = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_RIGHT, type: BMAP_NAVIGATION_CONTROL_SMALL}); //右上角，仅包含平移和缩放按钮
  /*缩放控件type有四种类型:
   BMAP_NAVIGATION_CONTROL_SMALL：仅包含平移和缩放按钮；BMAP_NAVIGATION_CONTROL_PAN:仅包含平移按钮；BMAP_NAVIGATION_CONTROL_ZOOM：仅包含缩放按钮*/

  map.addControl(top_left_control);
  map.addControl(top_left_navigation);
  map.addControl(top_right_navigation);



  var content1 = '<div style="margin:0;line-height:20px;padding:2px;">' +
    '<img src="img/map-hall.jpg" alt="" style="float:right;zoom:1;overflow:hidden;width:100px;height:100px;margin-left:3px;"/>' +
    '地址：会展路198号厦门国际会议展览中心<br/>电话：(0592)5959898<br/>' +
    '</div>';

//创建检索信息窗口对象
  var searchInfoWindow1 = null;
  searchInfoWindow1 = new BMapLib.SearchInfoWindow(map, content1, {
    title  : "厦门国际会议展览中心",      //标题
    width  : 290,             //宽度
    height : 105,              //高度
    panel  : "panel",         //检索结果面板
    enableAutoPan : true,     //自动平移
    searchTypes   :[
      BMAPLIB_TAB_SEARCH,   //周边检索
      BMAPLIB_TAB_TO_HERE,  //到这里去
      BMAPLIB_TAB_FROM_HERE //从这里出发
    ]
  });

  var myIcon1 = new BMap.Icon("img/map-meeting.png", new BMap.Size(33,33));
  var marker1 = new BMap.Marker(point,{icon:myIcon1}); //创建marker对象
  marker1.addEventListener("click", function(e){
    searchInfoWindow1.open(marker1);
    $("#marker1").trigger("click");
  });
  map.addOverlay(marker1); //在地图中添加marker


  $(".traffic-route2 ul li").click(function() {
    var $this = $(this);
    if($this.find("p").hasClass("hide")) {
      $this.find("p").removeClass("hide");
      $this.siblings("li").find("p").addClass("hide");
    } else {
      $this.find("p").addClass("hide");
    }
  });
})();