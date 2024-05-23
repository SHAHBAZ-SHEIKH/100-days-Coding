//Day 1

//How to find longext word in String?

// function findWord(str){
//     var longextWord = str.split(" ")
//     var find = ""
//     for(var i=0; i<longextWord.length; i++){
//         if(longextWord[i] > find)
//             find =longextWord[i]
//     }
//     return find
// }
// console.log(findWord("Web development course"))

// var str = "Web devlopment course in Saylani Mass It Training Program"
// var arr = str.split(" ")

// var longWord = arr.reduce((acc,curr) =>{
//    return  acc.length > curr.length ? acc : curr

// },0)
// console.log(longWord)


//word Conver the first word in capitalized & concatente hashTag?

// var str  = prompt("Enter user name")
// var newArr;
// function hashTag(str){
//     var arr1 = str.split(" ")
//     newArr =[]
//     for(var i=0; i<arr1.length; i++){
//         newArr.push(arr1[i].slice(0,1).toUpperCase() + arr1[i].slice(1))
        
//     }
//     var updateval = newArr.join("")
//         if(updateval.length >=280){
//             console.log("lenght should be less than 2800")
//             return false
//         }
//         else{
//             console.log(`#${updateval}`)
//         }
   

// }
// hashTag(str)

// console.log(`#${newArr.join("")}`)

// var str = prompt("Enter any Character:")
// var newarray1;
// function uppercase(str) {
//     var array1 = str.split(' ');
//     newarray1 = [];
//     for (var i = 0; i < array1.length; i++) {
        
//         newarray1.push(array1[i].charAt(0).toUpperCase() + array1[i].slice(1));
//     }
//     return newarray1
// }
// (uppercase(str));
// console.log(newarray1.join(" "))


//count the value in Strings words as a parameter?

// const countWord  = (word,char) =>{
//     var wordsplit = word.split("")

//  var totalCount =   wordsplit.reduce((acc,curr) =>{
//     // console.log("the acc is "+acc)
//     // console.log("the curr is "+curr)
//         if(curr === char){
//             acc++;
//         }
//         return acc

//     },0)
//     return totalCount

// }

// console.log(countWord("shahbaz ahmad","a"))

// Write a function called checktriangleType that three parameters representing the length of the side of triangle.the function should return a string indicating the type of triangle "equiletral","Isocelses","scalene"?


// function checkTriangletype(a,b,c){
//     if(a===b && b===c){
//         console.log("Equiletral")
        
//     }
//     else if(a===b && b !==c){
//         console.log("isoceles")
//     }
//     else if(a !==b & b!==c){
//         console.log("Scalene")
//     }
//     else{
//         console.log("Not equal ")
//     }
// }

// checkTriangletype(2,2,3)


// write a function to sort an aaray of numbers in an  ascending order?

// const ascendingOrder = (arr) =>{
//     return arr.sort((a,b) => a-b)

// }

// console.log(ascendingOrder([4,6,7,2,1]))


// write a function to check wheter the given string is palindrome or not?

// const palindromeWord = (str) =>{
//     var wordConvert = ''
//     var flag = false
//     for(var i=str.length -1; i>=0; i--){
//         wordConvert +=str[i]
//         if(wordConvert === str){
//             flag = true
//             console.log("it is palindrome")
//             break
//         }
//     }
//     if(flag === false){
//         console.log("its is not palindrome")
//     }

// }
// console.log((palindromeWord("racecar")))



// write a function findMax that takes an array of number as input and return the maximum number in the array?

// const findMax = (a) =>{
//     var maxFind = a[0]
//     for(var i=0; i<a.length; i++){
//         if(maxFind < a[i]){
//             maxFind = a[i]
//             // console.log(maxFind)
//         }
       
//     }
//     console.log(maxFind)
// }
// findMax([1,2,8,4,5])


//Write a function to Find Factorial

// function findFactorial(n){
//     var num =1
//     for(var i=1; i<=n; i++){
//         num = num * i
//     }
//     if(n==1 || n==0){
//         return 1
//     }
//     return num
    
// }
// console.log(findFactorial(5))



// function countWord(word,char){
//     var count =0
//     var wordBreakArray = word.split("")
//     for(var i=0; i<wordBreakArray.length; i++ ){
//         if(wordBreakArray[i].toLowerCase() === char.toLowerCase()){
//             count++

//         }
//     }
//     return count

// }
// var message = countWord("Shahbaz Aahmad","a")
// console.log(`The Word is:${message}`)


//Write a function to calculate sum of array and average of array(for Loop method)

// function calculateAverage(arr){
//     var sum = 0;
//     var average ;
//     for(var i=0; i<arr.length; i++){
//         sum +=arr[i]
//         average = sum/arr.length
//     }
//     console.log(`The sum of the array is:${sum}`)
//     return average
    

// }
// var result = calculateAverage([1,2,3,4,5])
// console.log(`The average of array the is: ${result}`)


// Reduce Method

// const calculateAverage = (arr) =>{
//  var result =    arr.reduce((acc,curr) =>{
//         acc = acc + curr
//         return acc

//     },0)
//     return result

// }

// console.log(calculateAverage([2,3,4,5]))


//DAYS 10

//Write a Function arraysEqual that takes two array arr1 and arr2 as input and return if the arrays are equal (i.e contain the same element in the same order) otherwise false

// const arrayEqual = (arr1,arr2) =>{
//     // if(arr1.length !== arr2.length){
//     //     return false
//     // }
    

//     for(var i=0; i<arr1.length; i++){
//         if(arr1[i] !== arr2[i])
//             return false
//     }
//     return true

// }

// const array1 = [1,2,3,4,5]
// const array2 = [1,2,3,4,5]
// const array3 = [1,6,3,4]


// console.log(arrayEqual(array1,array2))
// console.log(arrayEqual(array1,array3))


//Day 11

//Write a Function that takes a number as input and return the sum of the digits


// const sumOfDigits = (num) =>{
//     const b = num.split("")
//     const c = b.map(item => Number(item))
    
//     const result = c.reduce((acc,curr) =>{
//         acc +=curr
//         return acc

//     },0)
//     return result

    
// }
// const message = sumOfDigits("12345")
// console.log(`The sum of Digit is :${message}`)



//DAY 12

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

// DAY 13

// let str = "hello WOrd"

// function vowelsCount(str){
//     var count =0
//     let vowels = "aeiouAEIOU"
//     for(var i=0; i<str.length; i++){
//         if(vowels.indexOf(str[i]) !== -1){
//             count +=1
//         }
//     }
//     return count
    
// }

// var result = vowelsCount(str)

// console.log(`The total no of Vowels in the String is :${result}`)

// var str1 = "helllo world"
// var arr5 = []
// var vowles = "aeiou"
// var result = arr5.indexOf("h") !== -1
// console.log(result)



// DAY 14

// function isPowerTwo(num){
//     let flag = false
//     for(var i=1;  i<num; i++){
//         if(2** i ===num){
//             flag = true
//         }
        
//     }
//     return flag
    
// }

// console.log(isPowerTwo(4))


// Day 15

// function sumOfSquare(arr){
//     var sum =0
//     for(var i=0; i<arr.length; i++){
//         sum = sum + arr[i] * arr[i]
//     }
//     return sum
// }
// console.log(sumOfSquare([1,2,3]))

// function sumOfSquare(arr){
//     return arr.reduce((acc,curr) => (acc +=  curr *  curr),0)
// }

// console.log(sumOfSquare([1,2,3]))


// Day 16

//Write a function find the minimum Number

// const minNumber = (arr) =>{
//     var minFind = arr[0]
//     for(var i=0; i<arr.length; i++){
//         if(minFind > arr[i]){
//             minFind = arr[i]
//         }
//     }
//     return minFind

// }
// console.log(minNumber([6,2,1,4]))

// Day 17

// Write a function to convert The string in CamelCase

// const stringCamelCase = (str) =>{

//     let strArr = str.split(" ")
//     let newArr =[]
//     for(let i=0; i<strArr.length; i++){
//         newArr.push(strArr[i].slice(0,1).toUpperCase() + strArr[i].slice(1))
        
//     }
//     return newArr.join("")
// }

// console.log(stringCamelCase("hello world"))


// const stringCamelCase = (str) =>{
//     str = str.split(" ")
//     console.log(str)

//     str = str.map((curr,index) =>{
//         if(index ===0){
//             return curr
//         }
//         else{
//             return curr.slice(0,1).toUpperCase() + curr.slice(1)
//         }
        
//     })
//     return (str.join(""))
    



// }
// console.log(stringCamelCase("hello world shahbaz"))


// Day 18

// Write A function to check the string is lower case or upper case 




// const calculateUpperCase = (str) =>{
//     var str = str.charCodeAt(0)
//     if(str >= 65 && str<=90){
//         console.log("Upper Case")
//     }
//     else if(str >=97 && str<=122){
//         console.log("It's Lower Case")
//     }
//     else{
//         console.log("Its is not a character")
//     }

// }
// calculateUpperCase("a")


// DAY 19

// Write a function to check if a given string starts with a specific string


// const checkString = (str1,str2) =>{
//     str1 = str1.split(" ")
//     var flag = false
//     str1 = str1.filter((curr) =>{
//         if(curr === str2){
//             flag = true
//             console.log("true")

//         }
//     })
    
//     if(flag === flag){
//         console.log("false")
//     }

// }

// (checkString("hello World","hello"))


// const checkString = (str1,str2) =>{
//     var arr1 = str1.split(" ")
//     var flag = false
//     for(var i=0; i<arr1.length; i++){
//         if(arr1[0] === str2){
//             flag = true
//             console.log("true")
//             break

//         }
//     }
//     if(flag === false){
//         console.log("false")
//     }
// }
// checkString("hello world","world")


// DAY 20

// Write a function to reverse a string

// const reverseString = (str) =>{
//     let strReverse= ""
//     for(var i=str.length -1; i>=0; i--){
//         strReverse +=str[i]
//     }
//     console.log(strReverse)
// }
// reverseString("SHAHBAZ")

// Day 21

// write a function called CalculateMean that takes an array of number as input and return the mean (average) of those number

// const calculateMean = (arr) =>{
//     let reslut = arr.reduce((acc,curr) =>{
//         acc +=curr
//         return acc
        

//     },0)
//     return reslut
    

// }
// let arr = [1,2,3,4,5]
// let average = calculateMean(arr)
// console.log(`Mean of the array is : ${average/arr.length}`)


// DAY 22

// const cacluateMedian = (arr) =>{
//     arr.sort((a,b) => a-b)
//     console.log(arr)
//     let length = arr.length
//     console.log(length)
//     let mid = Math.floor(length/2)
//     console.log(mid)

//     if(length % 2===0){
//         return (arr[mid] + arr[mid - 1])/2
//     }
//     else{
//         return arr[mid]
//     }



// }

// console.log(cacluateMedian([2,4,5,1,6,3]))
// console.log(cacluateMedian([2,4,5,1,6,7,8,9,5]))

// console.log(cacluateMedian([3,2,1,5]))




