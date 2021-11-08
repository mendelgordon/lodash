const _ = {
	clamp(val, min, max) {
		if (val > max) {
			return max;
		} else if (val < min) {
			return min;
		} else {
			return val;
		}
	},
	inRange(v, a, b) {
		if (!b) {
			b = a;
			a = 0;
		}
		if (a > b) {
			let temp = b;
			b = a;
			a = temp;
		}
		if (a <= v && v < b) {
			return true;
		} else {
			return false;
		}
	},
	words(str) {
		return str.split(' ');
	},
	pad(str, len) {
		if (str.length > len) {
			return str;
		}
		let string = str;
		for (let i = 1; i <= (len - str.length) / 2; i++) {
			string = ' ' + string + ' ';
		}
		if (len % 2) {
			string = string + ' ';
		}
		return string;
	},
	has(obj, key) {
		return obj[key] !== undefined;
	},
	invert(obj) {
		let newObj = {};
		for (let key in obj) {
			newObj[obj[key]] = key;
		}
		return newObj;
	},
	findKey(obj, predicate) {
		for (let key in obj) {
			if (predicate(obj[key])) {
				return key;
			}
		}
	},
	drop(arr, n = 1) {
		arr.splice(0, n);
		return arr;
	},
	dropWhile(arr, predicate) {
		return this.drop(
			arr,
			arr.findIndex((e, i) => !predicate(e, i, arr))
		);
	},
	chunk(arr, size = 1) {
		let newArr = [];
		let oldArr = arr;
		for (let i = 0; i <= arr.length + 1; i++) {
			if (oldArr && !oldArr[size]) {
				newArr[i] = oldArr;
			}
			newArr[i] = oldArr.splice(0, size);
			if (!newArr[i]) {
				newArr.splice(i, 1);
			}
		}
		return newArr;
	},
};
// Do not write or modify code below this line.
module.exports = _;
