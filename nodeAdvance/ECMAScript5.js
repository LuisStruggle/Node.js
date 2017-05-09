// ES5实现类的用法
// ES5 和之前版本的 javascript 中原生语法中没有类（class）这个关键词，你只能拿原型（prototype）来模拟一个类的行为
function PersonES5(p) {
	this.age = p.age;
	this.name = p.name;
	this.sex = p.sex;
}

PersonES5.prototype.showInfo = function () {
	console.log(this);
};

var person = new PersonES5({
	age: 18,
	name: 'tom',
	sex: 'boy'
});

person.showInfo();