//You are given a positive integer array nums.

//The element sum is the sum of all the elements in nums.
//The digit sum is the sum of all the digits (not necessarily distinct) that appear in nums.
//Return the absolute difference between the element sum and digit sum of nums.

//Note that the absolute difference between two integers x and y is defined as |x - y|.

 

//Example 1:

//Input: nums = [1,15,6,3]
//Output: 9

function differenceOfSum(nums) {
   
let elementSum=0;
let digitSum=0;
for(let i=0;i<nums.length;i++){
    elementSum+=nums[i];
    if(nums[i]>=10)
    {
        let x=nums[i].toString();
        for(j=0;j<x.length;j++)
        {
            digitSum+=parseInt(x[j])
        }
    }
    else{
        digitSum+=nums[i];
    }
 
 }
    
 let diff=0;
 if(elementSum>=digitSum)
 {
    diff=elementSum-digitSum;
 }
 else{
    diff=digitSum-elementSum;
 }
 return diff
};
