/* validate.js v1.0.0 */

// 验证正整数
function isPlusInt(txt) {
	var reg = /^\+?[1-9][0-9]*$/;
	return reg.test(txt);
}
