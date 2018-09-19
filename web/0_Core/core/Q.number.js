var Q={};
Q.number={};

//获取[min,max]中一个随机整数
Q.number.random=function(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

//获取[min,max]中一个随机整数数组
//Q.number.randomArray=function(min,max,len,isRepeat) {
    //Math.floor(Math.random()*(max-min+1)+min);
//}
