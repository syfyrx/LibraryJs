/*common.js v1.0.0*/
/* 产生随机颜色 */
function randomColor() {
	var rand = Math.floor(Math.random() * 0xFFFFFF).toString(16);
	if (rand.length == 6) {
		return rand;
	} else {
		return randomColor();
	}
}
/* 获取url中"?"符后的参数 */
function getRequest() {
	var url = location.search; // 获取url中"?"符后的字串
	var theRequest = new Object();
	if (url.indexOf("?") != -1) {
		var str = url.substr(1);
		strs = str.split("&");
		for (var i = 0; i < strs.length; i++) {
			theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
		}
	}
	return theRequest;
}
Date.prototype.format = function (format) {
	var o = {
		"M+": this.getMonth() + 1, // month
		"d+": this.getDate(), // day
		"h+": this.getHours(), // hour
		"m+": this.getMinutes(), // minute
		"s+": this.getSeconds(), // second
		"q+": Math.floor((this.getMonth() + 3) / 3), // quarter
		"S": this.getMilliseconds()
	};
	if (/(y+)/.test(format))
		format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	for (var k in o)
		if (new RegExp("(" + k + ")").test(format))
			format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
	return format;
}
/* 获取当前日期，格式：1989-11-24 */
function getCurrentDate() {
	var now = new Date();
	return now.format("yyyy-MM-dd");
}
/* 获取当前时间，格式：1989-11-24 00:00:00 */
function getCurrentTime() {
	var now = new Date();
	return now.format("yyyy-MM-dd hh:mm:ss");
}