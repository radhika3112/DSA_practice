let arr1=[1,2,3,4,5];
for(let i=0;i<arr1.length/2;i++)
{
    let m=arr1.length-1;
   let temp=arr1[i];
   arr1[i]=arr1[m-i];
   arr1[m-i]=temp;
}
console.log(arr1);
