Uppercase to lowercase

let str="RADHIKA";
let cap="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let low="abcdefghijklmnopqrstuvwxyz";
let str2="";

for(let i=0;i<str.length;i++)
{
    let char=str[i];
    for(let j=0;j<low.length;j++)
    {
       if(char===cap[j])
       {
        str2+=low[j];
       }
    }
}
console.log(str2)
