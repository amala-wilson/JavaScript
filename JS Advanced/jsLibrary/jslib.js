/* Assignment 1: JavaScript Library */
var _ = {
   map: function(arr, mapCallBack) {
       for(var i=0;i<arr.length;i++){
           arr[i] = mapCallBack(arr[i]);
       }
       return arr;
   },
   reduce: function(arr, redCallBack) {
       let memo = arr[0];
       for(var i=1;i<arr.length;i++){
           memo = redCallBack(memo, arr[i]);
       }
       return memo;
   },
   find: function(arr, fCallBack) {
       let value;   
       for(var i=0;i<arr.length;i++){
            if(fCallBack(arr[i])){
                value = arr[i];
                break;
            }
       }
       return value;
   },
   filter: function(arr, filCallBack) { 
       filList = [];
       for(var i=0; i<arr.length;i++){
           let num = arr[i];
           if(filCallBack(num)){
               filList.push(num);
            }
        }
        return filList;
   },
   reject: function(arr, rCallBack) { 
       rejList = [];
       for(var i=0; i<arr.length;i++){
           let num = arr[i];
           if(!rCallBack(num)){
               rejList.push(num);
            }
        }
        return rejList;
   }
 }
// you just created a library with 5 methods!

// Filter
var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(evens);
// Map
var maps = _.map([1, 2, 3, 4, 5, 6], function(num){ return num * 3; });
console.log(maps);
// Reduce
var sum = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);
console.log(sum);
// Find
var even = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(even);
// Reject
var odds = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(odds);