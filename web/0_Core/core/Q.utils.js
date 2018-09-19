var Q={};




Q.utils = {};

/**
 * 遍历数组，对象，nodeList
 * @name each
 * @grammar Q.utils.each(obj,iterator,[context])
 * @since 1.2.4+
 * @desc
 * * obj 要遍历的对象
 * * iterator 遍历的方法,方法的第一个是遍历的值，第二个是索引，第三个是obj
 * * context  iterator的上下文
 * @example
 * Q.utils.each([1,2],function(v,i){
 *     console.log(v)//值
 *     console.log(i)//索引
 * })
 * Q.utils.each(document.getElementsByTagName('*'),function(n){
 *     console.log(n.tagName)
 * })
 */
Q.utils.each=function(obj, iterator, context) {
    if (obj == null) return;
    if (obj.length === +obj.length) {
        for (var i = 0, l = obj.length; i < l; i++) {
            if(iterator.call(context, obj[i], i, obj) === false)
                return false;
        }
    } else {
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                if(iterator.call(context, obj[key], key, obj) === false)
                    return false;
            }
        }
    }
}


/**
 * 判断str是否为字符串
 * @name isString
 * @grammar Q.utils.isString(str) => true|false
 */
/**
 * 判断array是否为数组
 * @name isArray
 * @grammar Q.utils.isArray(obj) => true|false
 */
/**
 * 判断obj对象是否为方法
 * @name isFunction
 * @grammar Q.utils.isFunction(obj)  => true|false
 */
/**
 * 判断obj对象是否为数字
 * @name isNumber
 * @grammar Q.utils.isNumber(obj)  => true|false
 */
Q.utils.each(['String', 'Function', 'Array', 'Number', 'RegExp', 'Object'], function (v) {
    Q.utils['is' + v] = function (obj) {
        return Object.prototype.toString.apply(obj) == '[object ' + v + ']';
    }
});









function getQueryString(name) { //获取Url参数
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}


function addLoadEvent(fn) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = fn;
    }
    else {
        window.onload = function () {
            oldonload();
            fn();
        };
    }
}

function getHTTPObject() {
    if (typeof XMLHttpRequest == "undefined") {
        XMLHttpRequest = function () {
            try { return new XMLHttpRequest(); } catch (e) { }
            try { return new ActiveXObject('Msxml2.XMLHTTP.6.0'); } catch (e) { }
            try { return new ActiveXObject('Msxml2.XMLHTTP.4.0'); } catch (e) { }
            try { return new ActiveXObject('Msxml2.XMLHTTP.3.0'); } catch (e) { }
            try { return new ActiveXObject('Msxml2.XMLHTTP'); } catch (e) { }
            try { return new ActiveXObject('MSXML3.XMLHTTP'); } catch (e) { }
            try { return new ActiveXObject('MSXML.XMLHTTP'); } catch (e) { }
            try { return new ActiveXObject('Microsoft.XMLHTTP'); } catch (e) { }
            try { return new ActiveXObject('MSXML2.ServerXMLHTTP'); } catch (e) { }
            return false;
        };
    }
    return new XMLHttpRequest();
}

function isArray(){

}

/*
http://www.cnblogs.com/waynechan/archive/2013/03/07/2947080.html
http://www.cnblogs.com/jasenkin/p/javascript_ajax.html
http://www.cnblogs.com/wuyuchang/p/3904655.html
http://www.cnblogs.com/a546558309/p/3630982.html
http://www.cnblogs.com/rainbowcode/p/4629314.html
http://www.cnblogs.com/snandy/archive/2011/04/25/2026648.html
http://www.cnblogs.com/jyk/p/3790609.html
*/