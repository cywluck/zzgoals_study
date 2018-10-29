//添加cookie
Q.cookie.addCookie=function(name, value, minutes) {
    var str = name + "=" + escape(value);
    if (minutes > 0) {//若不设定过期时间，浏览器关闭时cookie自动消失
        var date = new Date();
        str += "; expires=" + date.setTime(date.getTime() + minutes * 60 * 1000).toGMTString();
    }
    document.cookie = str;
}

//删除cookie
Q.cookie.delCookie=function(name)
{
    document.cookie = name + "=;expires=" + (new Date(0)).toGMTString();
}

//获取指定名称的cookie的值
Q.cookie.getCookie=function(name) {
    var arr = document.cookie.split("; ");
    for (var i = 0; i < arr.length; i++) {
        var temp = arr[i].split("=");
        if (temp[0] == name) return unescape(temp[1]);
    }
    return null;
}