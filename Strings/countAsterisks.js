let s = "l|*e*et|c**o|*de|";


function countAsterisks(s) {

    let arr=s.split("|");
    let count=0;
    for(let i=0;i<arr.length;i=i+2){
        for(let j=0;j<arr[i].length;j++){
      if(arr[i][j]==="*"){
          count++;
        }
    }
    }
    return count
};


console.log(countAsterisks(s))
