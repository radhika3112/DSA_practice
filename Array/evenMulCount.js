let arr=[10,2,3,5,40,7];
let count=0;
for(let i=0;i<arr.length;i++)
{
  if(arr[i]%2==0)
  {
    arr[i]=arr[i]*2;
    count++;
    console.log(arr[i]);
  }
}
console.log(count);
