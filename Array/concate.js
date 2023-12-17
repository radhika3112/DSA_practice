//Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).



var getConcatenation = function(nums) {
   
let ans=[];
for(let i=0;i<nums.length;i++)
{
    ans[i]=nums[i];
}
for(let i=0;i<nums.length;i++)
{
    ans[nums.length+i]=nums[i]
}
return ans; 
}
