// JavaScript Document

/*动态生成页码*/

$(function(){
	$.get("xml/news.xml",function(data){
		var newsXml=$(data);
		var newWp=$("#newsList");
		var newLen=newsXml.find("cont").length;
		
		for(var i=0;i<newLen;i++){
			var newTime=newsXml.find("time").eq(i).text();
			var string1="<li><a href='teamLink.html#"+i+"'>";
			var string2="</a><span>"+newTime+"</span></li>";
			isEmpty(string1,newsXml,"newTitle",newWp,i,string2)
			
		}
/*hover*/	
var objMouse=$("#newsList >li");
objMouse.each(function(){
	$(this).mouseover(function(){
		$(this).find("span").css({color:"#FFF"});
		})
	$(this).mouseout(function(){
		$(this).find("span").css({color:"#4BBDE5"});
		})
	})
		
/*新闻列表翻页 */
var objNews=$("#newsList");
var length=objNews.find("li").length;
var liNum=null;
	if(length%5==0){liNum=length/5}else{
		liNum=parseInt(length/5)+1;
		}
	for(var i=1;i<=liNum;i++)
     $("#newNum").append("<a>"+i+"</a>");
	 var objA=$("#newNum").find("a");
	 objA.each(function(){
		 $(this).click(function(){
			 var num=$(this).html();
			 objNews.animate({top:-(num-1)*126+"px"},300)
			 })
		 })
	/*alert(length+" "+liNum)*/
	})
})

var root=[];
function insert(url,ud){
$.ajax({
	type:'get',
	url:url,
	dataType:'xml',
	success:function(data){
			var title = $(data).find("title");
			root.push($(data));
			for(var i=0, len=title.length; i<len; i++) {
			$("#jobList").append("<li><a href='join.html'  "+"xml="+ud+" job="+i+">"+title.eq(i).text()+"</a></li>");
			}
		}
	})
} 
var d=$("#jobList");
var load = 0;
var insertWp=$("#scrollContent");
var objPopWindow=$("#jopPop");
var xmlUrl=["xml/tec.xml","xml/ued.xml","xml/prd.xml","xml/hr.xml","xml/uid.xml","xml/cont.xml"];
var linkUrl=["join_tec.html","join_ued.html","join_prd.html","join_hr.html","join_uid.html","join_cont.html"];
var jobItem = ["title", "number", "study", "sex", "age", "work", "job", "duty", "money"];
function inner(){
	for(var i=0;i<xmlUrl.length;i++){
		insert(xmlUrl[i],i);
	}
}
inner()
var clickTime=null;
clickTime=setTimeout(function(){
			
				var clickObj = $("#jobList >li");
				clickObj.find("a").click(function(e){
					e.preventDefault();
				})
				clickObj.each(function(e){						 
					$(this).click(function(){
						var xmlidx = $(this).find("a").attr("xml");
						var jobnum = $(this).find("a").attr("job");
						openJob(xmlidx,jobnum);
					})
				})
},1000)
function openJob(xmlidx,jobnum){
	var getXml = root[xmlidx];
	var getJob = getXml.find("item").eq(jobnum);
	var jobLen = jobItem.length;
	var innerWp = $("#scrollContent");
	for(var i = 0;i<jobLen;i++){
		var jobTag = jobItem[i];
		var jobName = getJob.find(jobTag).text();
		switch(jobTag){
			case "title":
				if(!jobName){break;}
				var jobType = getJob.attr("type");
				innerWp.append("<h3>"+jobName+"</h3>");
				break;
			case "number":
				if(!jobName){break;}
				innerWp.append("<h4>招聘人数：</h4><p>"+jobName+"</p>");
				break;
			case "study":
				if(!jobName){break;}
				innerWp.append("<h4>学历要求：</h4><p>"+jobName+"</p>");
				break;
			case "sex":
				if(!jobName){break;}
				innerWp.append("<h4>性别要求：</h4><p>"+jobName+"</p>");
				break;
			case "age":
				if(!jobName){break;}
				innerWp.append("<h4>年龄要求：</h4><p>"+jobName+"</p>");
				break;
			case "work":
				if(!jobName){break;}
				innerWp.append("<h4>工作经验：</h4><p>"+jobName+"</p>");
				break;
			case "job":
				if(!jobName){break;}
				innerWp.append("<h4>职位要求：</h4><p>"+jobName+"</p>");
				break;
			case "duty":
				if(!jobName){break;}
				innerWp.append("<h4>岗位职责：</h4><p>"+jobName+"</p>");
				break;
			case "money":
				if(!jobName){break;}
				innerWp.append("<h4>薪酬待遇：</h4><p>"+jobName+"</p>");
				break;
			}
		}//插入招聘信息
		var objJopList=$(".jop_list >li");
		var objPopWindow=$("#jopPop");	/*弹出层对象*/
		var objCover=$("#cover");	/*遮罩层对象*/
		var coverHg=$(document).height();

		objCover.css({display:"block",top:"0px",height:coverHg+"px",opacity:0.5});	/*设置遮罩层的宽高*/
		objPopWindow.css({zIndex:"9999"});
		var offtop=$("#join").offset().top;
		var scltop=$(document).scrollTop();
		var hei=$(window).height()/2;
		var popTop=hei+scltop-270;
		var wh=$(document).width();
		var wg=wh/2-450;
		var lj=wh/2;
		
		documentLoad();
		if($.browser.msie && $.browser.version==6.0){
			objPopWindow.css({display:"block",top:popTop+"px",left:wg+"px",width:"875px",height:"540px",opacity:"1"});
			setTimeout(function(){
				dom()},100);
			
		}else{
			
		objPopWindow.css({display:"block",top:popTop+235+"px",left:lj+"px"});
		objPopWindow.animate({top:popTop+"px",left:wg+"px",width:"875px",height:"540px"},300,function(){dom();clearTimeout(clickTime);});
		}

	
	
}
function isEmpty(string1,objFind,findType,insertWp,idx,string2){
	var restult=objFind.find(findType).eq(parseInt(idx)).text();
	if(!restult){return false}
	insertWp.append(string1+restult+string2);
}
/*招聘弹出层关闭*/	


var testhg=$("#jopPop").height()/2;
var testwh=$("#jopPop").width()/2
var poph=$("#join").height()/2;
var popt=$("#join").width()/2;
var hei=$(document).height();
var offtop=$("#join").offset().top;

$(".close").click(function(){
	var offtop=$("#join").offset().top;
	var scltop=$(document).scrollTop();
	var hei=$(window).height()/2;
	var popTop=hei+scltop-270;
	var wh=$(document).width();
	var lj=wh/2;
	$("#cover").animate({opacity:0},500);
	$("#cover").css({display:"none"});
	objPopWindow.css({display:"none",width:"0px",height:"0px",top:popTop-270+"px",left:lj+"px"});
	/*objPopWindow.css({display:"none",width:"0px",height:"0px",left:popt-testwh+"px",top:offtop-540+"px"});*/
	insertWp.html("");
	dom();
	})/*close end*/
var loadTg=0;
function documentLoad(){
	if(loadTg==1){return false}
	  var head = document.getElementsByTagName('head').item(0);
	  var Jswheel=document.createElement("script");
	  Jswheel.src="scrollJs/jquery.mousewheel.js";
	  Jswheel.type="text/javascript";
	  head.appendChild(Jswheel);
	  var jscrollpane=document.createElement("script");
	  jscrollpane.src="scrollJs/jquery.jscrollpane.min.js";
	  jscrollpane.type="text/javascript";
	  head.appendChild(jscrollpane);
	  $(".scroll-pane").css({overflow:"auto"});
	  loadTg=1;
	}

function dom(){
	$('.scroll-pane')
			.bind(
				'jsp-initialised'
			)
			.bind(
				'jsp-scroll-y'
			    )
			.bind(
				'jsp-scroll-x'
			)
			.bind(
				'jsp-arrow-change'
			)
			.jScrollPane();
	}

var wordNum=0;	/*存储导航字母滑落个数*/
var objIndex=$(".btn_thinkoutofthebox");
var objUndisplay=[];	/*存储上字母次滑落的对象*/
objUndisplay[0]=objIndex;

/*字母滑落方法 wordDown*/
function wordDown(maxNum,obj){
var objShowLi=obj.find("li");
var curli = objShowLi.eq(wordNum);
if(wordNum>maxNum){
	objShowLi.stop();
	return false;
}   
curli.animate({top:"-73px"},50,function(){
	curli.animate({top:"0"}, 280);
	wordDown(maxNum,obj)
});
	wordNum++
}  /*wrodDown end*/

wordDown(16,$(".btn_thinkoutofthebox"))	/*页面加载执行动画*/
var objNav = $("#ul_nav >li");

/*头部导航动画*/
objNav.each(
	function(){
		$(this).hover(function(event){
			wordNum=0;
			var objHideLi=null;
			var showDiv=objUndisplay[0].attr("class").split(" ")[0].split("_")[1];	/*之前显示的层的class*/;
			var downClass=$(this).attr("class").split(" ")[0].split("_")[0];	/*要滑落的对象的class*/
			var maxNum=downClass.length;	/*下落的字母个数*/
			var downObj=$(".btn_"+downClass);	/*鼠标移上将要执行的动画对象*/
			
			$(this).find(".img").animate({top:"-30px"},200);	/*鼠标移出动画*/
			$(this).find(".img").siblings().animate({top:"-30px"},200);/*鼠标移出动画*/
			
			if(showDiv==downClass){return false;}	/*判断上次执行的动画和将要执行的动画是否一样*/
			
			objHideLi=objUndisplay[0].find("li");	/*上次执行的动画对象*/
			objHideLi.stop();
			objHideLi.css({top:"-73px"});	/*隐藏上次执行动画的对象*/
			objUndisplay[0].css({display:"none"});		/*鼠标移上将要隐藏的元素*/
			
			downObj.find("li").each(function(){
				$(this).stop().css({top:"-73px"});
			});/*隐藏本次执行动画的对象*/
			downObj.css({display:"block"});
			
			wordDown(maxNum,downObj);	/*动画执行的函数*/
			
			objUndisplay=[];
			objUndisplay.push(downObj);	/*存储本次执行的动画对象*/
	}/*mouseover end*/
	,
	function(event){
		$(this).find("a").children().animate({top:"0px"},100);	/*鼠标移出动画*/
		}/*mouseout end*/
	)/*hover end*/
})/*each end*/

/*返回顶部*/


$(window).resize(function(){
   	
		var offtop=$("#join").offset().top;
		var hei=$(document).height();
		var wh=$(window).width();
		var scltop=$(document).scrollTop();
		var hg=hei/2-270;
		var wg=wh/2-450;
		var tj=hei/2;
		var lj=wh/2;
		$(document).scrollTop(offtop/2);
		
		$("#jopPop").css({top:hg+"px",left:wg+"px"});
	
	
	var leftSize=$(window).width();
	if(leftSize<980){return false;}
	$("#top").css({left:leftSize/2+460+"px"})
	})

var leftSize=$(window).width();
$("#top").css({left:leftSize/2+460+"px"})
$(window).scroll(function(){
	
		if($(window).scrollTop()+$(window).height()>=$(document).height()-1){
		$("#top").css({bottom:"100px"});
		}else{$("#top").css({bottom:"30px"});}
		if($(document).scrollTop()>100){
			$("#top").css({display:"block"});
	   		if($.browser.msie && $.browser.version==6.0){	
			$("#top").css({position:"absolute"});
			$("#top").css({top:$(document).scrollTop()+$(window).height()-150});
				}
			}else{$("#top").css({display:"none"});
		}
	})

$("#top").click(function(e){
	e.preventDefault();
	$("html, body").animate({scrollTop:0}, 400);
})	/*返回顶部 end*/


/*侧边导航效果实现*/
var sideUpTime=null; 
var sideDownTime=null;
var x=null;		/*存储background-position垂直方向的值*/
/*向上滚动*/
function sideNavUp(pX,id){
	x=0;
	sideUpTime=setInterval(function(){
		x--;
		document.getElementById(id).style.backgroundPosition=pX+" "+x+"px";
		if(x<=-55)
		{clearInterval(sideUpTime);}
		},1)
	}

/*向下滚动*/

function sideNavDown(pX,id){
	sideDownTime=setInterval(function(){
		x++;
		document.getElementById(id).style.backgroundPosition=pX+" "+x+"px";
		if(x>=0)
		{clearInterval(sideDownTime);}
		},1)
	}

/*鼠标经过和划出效果*/
var objSideNav=$(".container >.nav");
objSideNav.each(function(){
	  var objAchor=$(this).find(".link_img");
	  var navId=objAchor.attr("id");
	  var navPosition=objAchor.css('background-position');
	  var pX;
	  
	  if( typeof (navPosition)=="undefined"){
		  pX=objAchor.css('background-position-x');
		  }else{
			 pX=navPosition.split(" ")[0];
			 }
			 
	  $(this).hover(function(e){
		   clearInterval(sideDownTime)
           sideNavUp(pX,navId);
		 	 }	/*mouseover end*/,
	  function(event){
	      clearInterval(sideUpTime)
          sideNavDown(pX,navId);
		  	}
		  )
	})/*each end*/

