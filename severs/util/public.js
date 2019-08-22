//自定义的本地化时间
const dateToString = (date) => {//date传递时间对象
	//xx年xx月xx日 xx:xx:xx 星期x
	let str = "";
	let y = date.getFullYear();
	let m = date.getMonth()+1;
	let d = date.getDate();
	let h = date.getHours();
	let f = date.getMinutes();
	let s = date.getSeconds();
	
	str += y + "-" + getDB(m) + "-" + getDB(d) + " ";
	str += getDB(h) + ":" + getDB(f) + ":" + getDB(s) + " ";
	return str;
}

function getDB(num){
	return num < 10 ? "0" + num : num;
}

module.exports = {
	dateToString
}