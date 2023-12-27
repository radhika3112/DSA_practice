let gain = [-5,1,5,0,-7];


function largestAltitude(gain) {
    let arr=[0];
    let max=0;
    for(let i=0;i<gain.length;i++){
        arr.push(arr[i]+gain[i]);
    }
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i]
        }
    }
    return max
};


console.log(largestAltitude(gain))
