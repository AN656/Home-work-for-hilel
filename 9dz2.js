//№1
function to_array(obj){
    arr1 = [];
    for(let key in obj){
        arr1.push(key);
    }
    return arr1;
}
console.log(to_array({123:'text1',999:'text2',7:'text3',0:'text4',156:'text5'}));
//№2
const obj = {
    id: 5,
    token: 12343423
};
console.log(obj['id']);
//№3
for (let i = 1; i <= 50; i++){
    console.log(i);
}
//№4
for (let i = 0; i <= 100; i+=2){
    console.log(i);
}
//№5
let arr1 = [1,2,3,4,5];
let arr2 = [];
for (let i = 1; i<=5; i++){
    arr2.push(i);
}
console.log(arr2);
//№6
console.log(arr2.slice(0,3));
//№7
let arr3 = ['a', 'b', 'c', 'd'];
console.log(`${arr3[0]}+${arr3[1]},${arr3[2]}+${arr3[3]}`);
//№8
let arr4 = [2, 5, 3, 9];
result = 0;
for (let i = 0; i<(arr4.length - 1); i++){
    arr4[i] = arr4[i]*arr4[i+1];
    result += arr4[i];
}
console.log(arr4);
console.log(result);