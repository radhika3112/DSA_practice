var toLowerCase = function(s) {
    let cap="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let low="abcdefghijklmnopqrstuvwxyz";
let str2="";

for(let i=0;i<=s.length;i++)
{
    let char=s[i];
    for(let j=0;j<low.length;j++)
    {
       if(char===cap[j]||s[i]===low[j])
       {
        str2+=low[j];
       }
    }
}
return str2
};
