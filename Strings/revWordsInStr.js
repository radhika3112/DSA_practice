
//Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

 

//Example 1:

//Input: s = "Let's take LeetCode contest"
//Output: "s'teL ekat edoCteeL tsetnoc"





var reverseWords = function(s) {
    let t=s.split(" ");
let j=[];
for(let i=0;i<t.length;i++)
{
   j.push(t[i].split("").reverse().join(""))
}
return j.join(" ")
};
