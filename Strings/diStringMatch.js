let s = "IDID";

function diStringMatch(s) {
    let I=0;
    let D=s.length;
    let arr=[];
    for(let i=0;i<=s.length;i++){
        if(s[i]==="I"){
       arr.push(I);
       I++;
        }
        else{
            arr.push(D);
            D--;
        }
    }
    return arr
};

console.log(diStringMatch(s))
