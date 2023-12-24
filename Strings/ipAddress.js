//Given a valid (IPv4) IP address, return a defanged version of that IP address.

//A defanged IP address replaces every period "." with "[.]".

 

//Example 1:

//Input: address = "1.1.1.1"
//Output: "1[.]1[.]1[.]1"



var defangIPaddr = function(address) {
     let str="";
    for(let i=0;i<address.length;i++){
       if(address[i]=="."){
           str+="[.]";
       }
       else{
           str+=address[i];
       }
    }
    return str;
};
