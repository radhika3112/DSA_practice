let nums = [13,25,83,77];


function separateDigits(nums) {
    let arr=[];
    for(let i=0;i<nums.length;i++){
        let str=nums[i]+"";
        for(let j=0;j<str.length;j++){
            arr.push(str[j])
        }
    }
    return arr
};


console.log(separateDigits(nums))
