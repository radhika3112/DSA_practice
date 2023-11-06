input:let arr=[-5,-4,-3,-2,0,2,4,6,8]

function sum(data)
{
for(let i=0;i<data.length;i++)
{
  for(let j=0;j<data.length;j++)
  {
    if(data[i] + data[j]===0)
    {
      return [arr[i],arr[j]];
    }
  }
}
}

console.log(sum(arr));
