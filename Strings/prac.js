let str="IN_PROGRESS";
let x=str.split("_").join(" ");
let i=x.slice(0,1);
let j=x.slice(1,2).toLowerCase();
let k=i+j;
let a=x.slice(3,4);
let b=x.slice(4,str.length).toLowerCase();
let c=a+b;
console.log(k,c);

