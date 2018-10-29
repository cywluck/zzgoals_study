/**
 * 判断obj对象是否为空
 * @name isEmptyObject
 * @grammar Object.prototype.isEmpty()  => true|false
 * @example
 * {}.isEmpty() ==>true
 * [].isEmpty() ==>true
 * "".isEmpty() ==>true
 */
Object.prototype.isEmpty = function(obj) {
	if(obj == undefined) return true;
	if(obj == null) return true;
	if(this.isArray(obj) || this.isString(obj)) return obj.length === 0;
	for(var key in obj)
		if(obj.hasOwnProperty(key)) return false;
	return true;
};

/* ----------------------String start-------------------*/

String.prototype.format = function() {
	var args = arguments;
	return this.replace(/\{(\d+)\}/g,
		function(m, i) {
			return args[i];
		});
}

/*---------------------String------end-------------------*/

/*---------------------Array------start-------------------*/

//用Array的indexOf方法来判断数组中一个元素是否存在
if(!Array.indexOf) {
	Array.prototype.indexOf = function(x) {
		for(var i = 0, n = this.length; i < n; i++) {
			if(this[i] === x) {
				return i;
			}
		}
		return -1;
	}
}

/*---------------------Array------end-------------------*/