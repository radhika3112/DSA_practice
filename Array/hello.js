

let s = "Hello how are you Contestant";
let k = 4;

function truncateSentence(s, k) {
    let str="";
    let arr= s.split(" ");
    for(let i=0;i<k;i++){
        if(i<k-1){
        str+=arr[i]+" ";
    }
    else{
        str+=arr[i];
    }
    }
    return str;
};

console.log(truncateSentence(s, k))
