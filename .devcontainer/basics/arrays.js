const myArr = [0,1,2,3,4,true,"Shashwat"] // array can be of different types 
    //and can be resizable after declaring the array
    //shallow copy means the copy will reference to the same memory location(done using heap)
    // Deep copy means the copy will not point to the same memory location(done using stack)
// Arrays can be decalared by various methods:-
//1.Method
const arr1=["shashwat","ram","shyam"]
//2.Method
const arr2=new Array(1,23,454,7,86,90)
// Methods used in arrays:-
//push pop unshift shift
const arr=[0,1,2,3,4,5]
arr.push(6) // adds an element at the end of the array
//console.log(arr);
arr.pop(); // remove the element from the end of array
//console.log(arr);
arr.unshift(9)//adds element at the start of the array
//unshift is very time consuming method becaause it shifts all the element from the start
console.log(arr);
arr.shift();//remove the first element
console.log(arr);
//diff b/w slice and splice 
//slice is used to cut the array from the a particular index to the index-1 index
//splice is ued to cut the array from a particular index to an index
//slice doesnt manipulate the array whereas splice cut the array