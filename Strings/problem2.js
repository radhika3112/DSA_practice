let s = "PAYPALISHIRING";
let numRows = 4;

function convert(s, numRows) {
    if (numRows === 1) {
       return s;
   }
   let str="";
   let n=(2*numRows)-2;
   for(let i=0;i<numRows;i++){
       for(let j=0;j+i<s.length;j+=n){
         if(i==0 || i==numRows-1){
           str+=s[j+i]
         }
         else{
           if(j+i<s.length){
             str+=s[j+i];
             
           }
           if(j+n-i<s.length){
             str+=s[j+n-i];
           }
         }
       }
   }
 return str;
};

console.log(convert(s, numRows))
