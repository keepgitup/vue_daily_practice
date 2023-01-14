let crowdAge = [{
        name: 'Rick',
        age: 17
    },
    {
        name: 'Jane',
        age: 25
    },
    {
        name: 'Jordan',
        age: 19
    },
    {
        name: 'Jack',
        age: 7
    },
    {
        name: 'Reol',
        age: 27
    }
];

// callback 函式
function ageFilterCB(Filter_fun, arr) {
    console.log('ageFilterCB-', Filter_fun(arr));
    return Filter_fun(arr);
}

function ageFilter(arr) {
    /* 只能在此插入程式碼 */
    return arr.filter(item => {
        console.log('ageFilter-', item);
        return item.age > 18
    })
}

let filterResult = [];
filterResult = ageFilterCB(ageFilter, crowdAge);
console.log('filterResult-', filterResult); /* 為陣列，內容包含屬性 age > 18 的 crowdAge 元素 */