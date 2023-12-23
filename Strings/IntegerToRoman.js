let num = 3;


function intToRoman(num) {
     let result="";
    let ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
   let tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
   let hrds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
   let thous = ["", "M", "MM", "MMM"];
   result+=thous[Math.floor(num / 1000)] + hrds[Math.floor((num % 1000) / 100)] + tens[Math.floor((num % 100) / 10)] + ones[num % 10];

   return result;
};

console.log(intToRoman(num))
