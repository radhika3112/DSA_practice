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
