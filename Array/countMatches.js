let items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]];
let ruleKey = "color";
let ruleValue = "silver";


function countMatches(items, ruleKey, ruleValue) {
    let count=0;
    let obj={
         "type": 0,
    "color": 1,
    "name": 2
    };
    let index=obj[ruleKey]
    for(let i=0;i<items.length;i++){
            if(items[i][index]===ruleValue){
                count++;
            }
        }
    return count;
};


console.log(countMatches(items, ruleKey, ruleValue))
