/* validate.js v1.0.0 */

// 验证正整数
function isPlusInt(txt) {
	var reg = /^\+?[1-9][0-9]*$/;
	return reg.test(txt);
}
// 验证邮箱
function isEmail(txt){
	var reg=/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
	return reg.test(txt);
}