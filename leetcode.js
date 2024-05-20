//Check whether a passed string is palindrome or not

function palindrome(str){
    let str1=str.split("").reverse().join("")
    return str===str1
}
console.log("this stering is " +palindrome("mada13"))

function myfuc(str){
    return Array.isArray(str)
}
console.log(myfuc([]))
console.log(myfuc({}))

var arr=[1,2,3,4,5]
arr.length=0
console.log(arr);