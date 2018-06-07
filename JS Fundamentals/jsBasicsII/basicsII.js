/* JavaScript Basics II */
/*
    The following code is written such that it passes various testcases when the function magic_multiply(var, var) is called
*/
function magic_multiply(x, y){
    if ((typeof(x) == 'number') && (typeof(y) == 'number')){
        x = x * y;
    }
    else{
        if (Array.isArray(x)){
            for(var i=0;i<x.length;i++){
                x[i] = x[i] * y;
            }
        }
        else if (Array.isArray(y)){
            for(var j=0;j<x.length;j++){
                x = x * y[j];
            }
        }
        else if (typeof(x) == 'string'){
            randomStr = "";
            for(var k=0;k<y;k++){
                randomStr = randomStr + x;
            }
            x = randomStr;
        }
        else{
            x = "Error: Can not multiply by string"
        }
    }
    return x;
}

/* Tests */
let test1 = magic_multiply(5, 2);
console.log(test1);
let test2 = magic_multiply(0, 0);
console.log(test2);
let test3 = magic_multiply([1, 2, 3], 2);
console.log(test3);
let test4 = magic_multiply(7, "three");
console.log(test4);
let test5 = magic_multiply("Brendo", 4);
console.log(test5);
let test6 = magic_multiply(-5, 4);
console.log(test6);
let test7 = magic_multiply(-10, -4);
console.log(test7);