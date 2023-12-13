let str="roar";
let msg="It is a palindrome string";
for(let i=0;i<str.length/2;i++)
{
  if(str[i]!==str[str.length-1-i])
  {
    msg ="It is not a palindrome";
  }
}

console.log(`${str} is ${msg}`);





let str="raar";
let str2="";

for(let i=str.length-1;i>=0;i--)
{
    str2+=str[i];
}
console.log(str2)
if(str==str2)
{
    console.log("string is palindrome")
}
else{
    console.log("string is not a palindrome")
}
