//Given a string s consisting of words and spaces, return the length of the last word in the string.

//A word is a maximal substring consisting of non-space characters only.

 

//Example 1:

//Input: s = "Hello World"
//Output: 5
//Explanation: The last word is "World" with length 5.

var lengthOfLastWord = function(s) {
    let x=s.trim();
    let t=x.split(" ");
   let m=t.length-1;
   return t[m].length;
};
