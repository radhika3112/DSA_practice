let arr1=[3,2,4,5,6,7];
function x(a)
{
    let max=a[0];
for(let i=0;i<arr1.length;i++)
{
    
    if(max<a[i])
    {
        max=a[i];
    }

}
console.log(max);
}

x(arr1);
