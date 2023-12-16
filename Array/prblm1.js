var smallerNumbersThanCurrent = function(nums) {
    let arr=[];
    for(let i=0;i<nums.length;i++){
        let c=0;
        for(let j=0;j<nums.length;j++){
            if(nums[i]>nums[j]){
              c++;
            }
        }
        arr.push(c)
    }
   
   return arr
};
