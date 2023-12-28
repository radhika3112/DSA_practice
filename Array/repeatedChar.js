let s = "abccbaacz";


function repeatedCharacter(s) {
    let obj = { }
   for (let i = 0; i < s.length; i++) { 
       if (s[i] in obj){ 
           return s[i]
       }
       else{
       obj[s[i]] = 0;
   }
}

console.log(repeatedCharacter(s))
};
