// JavaScript Document
function navDown(obj,maxNum){
	  var i=0;
	  var time=setInterval(function(){
		  obj.eq(i).animate({top:"0px"},300);
		  if(i>maxNum){clearInterval(time);}
		  i++;
		  },100)
}
function navAnimate(objNav){
objNav.each(function(){
	objNav.css({opacity:0});
	objNav.hover(function(){$(this).stop().animate({opacity:1},500);},function(){$(this).stop().animate({opacity:0},500)})
	})
}

