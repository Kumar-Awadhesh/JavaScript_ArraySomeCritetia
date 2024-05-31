//input taking of an array.
const array=[2, 5, 3, 6, 9, 7, 8];
let evenArray=[];
//iterration over array using forEach built in function.
array.forEach((el,ind)=>{
    //checking wether element and index of that element are even or not.
    if(ind%2===0 && el%2===0){
        //pushing the element which have even both element and index to the evenArray.
         evenArray.push(el)
    }
})
//print the Array of even both element and index.
console.log(evenArray)