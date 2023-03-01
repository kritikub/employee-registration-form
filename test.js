
arr = [1,2,4,5];
console.log(arr);
arr.push(6);
console.log(arr);
arr.shift();
console.log(arr);
arr.unshift(5);
console.log(arr);
arr = arr.concat(9);
console.log(arr);
console.log(arr.join("--"));
console.log(arr.slice(1));
console.log(arr.concat(33));
console.log(arr.indexOf(5));
console.log(arr.lastIndexOf(5));
console.log(arr.includes(5));
// console.log(arr.find( (n) =>{
//     n%2===0;
// }));

console.log(arr.at(-3));
// var x = 10
// console.log(x);
// var x = 20
// console.log(x);
// console.log(arr);
console.log(arr.map(element =>{
    return element * 2;
}));

console.log(arr.filter( element =>{
    return element > 5;
}));

console.log(arr.slice(2));
console.log(arr);

arr.sort( (element , element2)=>{
    if(element < element2){
        return -1;
    }
    else if(element > element2){
        return 1;
    }
    return 0;
})
console.log(arr);

arr.splice(2 , 0 , 1 , 2 , 4 ,5);
console.log(arr);
// arr.forEach(element => {
//     console.log(element);
// });

console.log(arr.includes(10));
arr.reverse();
console.log(arr);