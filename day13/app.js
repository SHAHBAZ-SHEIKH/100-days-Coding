//Write a function that takes an array of integers as input and remove any duplcates element returning a new array with only the unique array?


// var myArray = [1,2,3,4,4,2,5,5,6];
// var unique = myArray.filter((value, index, array) => array.indexOf(value) === index);

// console.log(unique);


// let arr = ["apple", "mango",
//         "apple", "orange", "mango", "mango"];

// let arr = [1,2,4,4,5,5,3]

// function removeDuplicates(arr) {
//     let unique = [];
//     for (i = 0; i < arr.length; i++) {
//         if (unique.indexOf(arr[i]) === -1) {
//             console.log(unique)
//             unique.push(arr[i]);
//         }
//     }
//     return unique.sort((a,b) => a-b)
// }
// console.log(removeDuplicates(arr));

// let arr = ["apple","mango","apple","Graphes","Banana","Banana"]

// function removeDuplicates(arr){
//     return arr.filter((item,index) => arr.indexOf(item) === index)
// }
// console.log(removeDuplicates(arr))

// function removeDuplicates(arr){
//     let unique = []
//     arr.forEach((element) =>{
//         if(!unique.includes(element)){
//             unique.push(element)
//         }

//     })
//     return unique
    
// }
// console.log(removeDuplicates(arr))

// function removeDuplicates(arr){
//     let unique = arr.reduce((acc,curr) =>{
//         if(!acc.includes(curr)){
//             acc.push(curr)
//         }
//         return acc
    

//     },[])
//     return unique
    
// }
// console.log(removeDuplicates(arr))