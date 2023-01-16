let arr = [1, 2, 3, 4]
let newArr = arr.map((item) => { return item * 2; });
// 這個就是undefined的
let newArr0 = arr.map((item) => {});
let newArr1 = arr.map((item) => { return });


let newArr2 = arr.map((item) => { return item * 3; });
console.log(arr);
console.log(newArr);
console.log(newArr0);
console.log(newArr1);
console.log(newArr2);