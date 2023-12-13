//Linear search

let arr=[20,30,40,50]
let pos=undefined;

function linearSearch(x)
{
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]==x)
        {
            pos=i;
            return `Elemnt found at position ${pos}`;
        }
    }
    return "elem not found"
}

console.log(linearSearch(40))
