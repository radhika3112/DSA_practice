let s = "11111222223";
let k = 3;

function digitSum (s, k) {
     
    while(s.length>k){
   let new_s="";
    for(let i=0; i<s.length; i += k){
        let num=0;
for(let j=i;j<i+k;j++){
if(s[j]!=undefined){
num += (+(s[j]))
  }
}
new_s += num;
    }
    s=new_s
}
return s;
};


console.log(digitSum (s, k))
