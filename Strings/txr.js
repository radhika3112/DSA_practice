let text = "alice is a good girl she is a good student";
let first = "a";
let second = "good";

function findOcurrences (text, first, second) {
    let arr=text.split(" ");
    let result=[];
    for(let i=0;i<arr.length-2;i++){
        if(arr[i]===first){
            if(arr[i+1]===second){
result.push(arr[i+2])
            }
        }
    }
    return result
};

console.log(findOcurrences(text, first, second) )
