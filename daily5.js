let arr = [1, 2, 3, 4]
let newArrTest = arr.map((item) => { return item * 2; });
// 這個就是undefined的
let newArr0 = arr.map((item) => {});
let newArr1 = arr.map((item) => { return });


let newArr2 = arr.map((item) => { return item * 3; });
console.log(arr);
console.log(newArrTest);
console.log(newArr0);
console.log(newArr1);
console.log(newArr2);

//下面作業正式開始

const array = [{
        name: '小明',
        age: 18
    },
    {
        name: '小美',
        age: 15
    },
    {
        name: '杰倫',
        age: 19
    },
    {
        name: '漂亮阿姨',
        age: 22
    },
    {
        name: '老媽',
        age: 28
    }
];
let newArray = [];
newArray = array.map((item) => { return `${item.name}${item.age}歲羅` });
console.log(newArray);

// 這樣寫就錯了..過程加總應放在return
//console.log(newArray[].name+newArray[].age+`羅`);