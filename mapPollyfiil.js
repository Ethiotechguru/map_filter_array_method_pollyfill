Array.prototype.my_map = function (cb) {
	let count = 0;
	let returnVal = [];
	function recurs(ele, index, arr, len) {
		if (index >= len) {
			return returnVal;
		}
		returnVal.push(cb(ele, index, arr));
		index++;
		return recurs(arr[index], index, arr, len);
	}
	return recurs(this[count], count, this, this.length);
};
let arr = [1, 2, 3, 4];

let users = [
	{ name: "ami", age: 17 },
	{ name: "mark", age: 19 },
	{ name: "samanta", age: 18 },
	{ name: "mary", age: 26 },
	{ name: "alex", age: 29 },
	{ name: "Melat", age: 31 },
	{ name: "samuel", age: 23 },
];
users.my_map((user) => {
	// console.log(idx)
	return user.name;
});
