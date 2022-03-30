let arr = [1, 2, 3, 4];
let users = [
	{ name: "ami", age: 17 },
	{ name: "mark", age: 19 },
	{ name: "Semanta", age: 18 },
	{ name: "mary", age: 26 },
	{ name: "alex", age: 29 },
	{ name: "Melat", age: 31 },
	{ name: "samuel", age: 23 },
];
Array.prototype.my_filter = function (cb) {
	let count = 0;
	let returnVal = [];
	function recurs(ele, index, arr, len) {
		if (index >= len) {
			return returnVal;
		}
		if (cb(ele, index, arr)) {
			returnVal.push(ele);
		}
		index++;
		return recurs(arr[index], index, arr, len);
	}
	return recurs(this[count], count, this, this.length);
};

users.my_filter(user => {
	return user.age >= 20;
});
