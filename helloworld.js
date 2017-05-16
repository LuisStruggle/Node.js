/*setTimeout(function () {
	console.log('timeout 0');
}, 0);
console.log('outter');*/

//---------------------------------------------------------

/*if (undefined) {
	console.log('undefined is true');
}
if (null) {
	console.log('null is true');
}
if ('') {
	console.log('\'\' is true');
}
if (0) { //这个是true
	console.log('0 is true');
}
if ('0') {
	console.log('\'0\' is true');
}
if (NaN) {
	console.log('NaN is true');
}*/

//---------------------------------------------------------

/*var array = ['aa', 'bb', 'cc'];

// 删除数组中第一个元素的数据，并赋值给first
var first = array.shift();

console.log(first);

// 在数组的开头添加一个元素
array.unshift('123');

console.log(array);

// 删除数组中最后一个元素的数据，并赋值给last
var last = array.pop();

console.log(last);

// 在数组的末尾添加一个元素
array.push('456');

console.log(array);*/

//---------------------------------------------------------

let c = 3;
console.log('函数外let定义c：' + c); //输出c=3
function change() {
	let c = 6;
	console.log('函数内let定义c：' + c); //输出c=6
}
change();
console.log('函数调用后let定义c不受函数内部定义影响：' + c); //输出c=3
