/* JS Math */
/*
    The following code implements different functionalities offered by the Math Object in JavaScript
*/
/* Math 1 */
function zero_negativity(someArr){
    negativeExists = true;

    for(var i=0;i<someArr.length;i++){
        if(Math.sign(someArr[i]) == -1){
            negativeExists = false;
        }
    }

    return negativeExists;
}

let negTest = zero_negativity([4, 67, -9, 0, 22, -8, -7, 11]);
console.log(negTest);
let posTest = zero_negativity([4, 67, 9, 0, 22, 8, 7, 11]);
console.log(posTest);

/* Math 2 */
function is_even(someNum){
    if ((someNum % 2) == 0){
        return true;
    }
    else{
        return false;
    }
}

let evenChk = is_even(8);
console.log(evenChk);
let oddChk = is_even(33);
console.log(oddChk);

/* Math 3 */
function how_many_even(someArr){
    even_count = 0;

    for(var i=0;i<someArr.length;i++){
        if ((someArr[i] % 2) == 0){
            even_count += 1;
        }
    }
    return even_count;
}

let count = how_many_even([4, 67, -9, 0, 22, -8, -7, 11]);
console.log(count);

/* Math 4 */
function create_dummy_array(n){
    var arr = []
    
    for(var i=0;i<n;i++){
        arr.push(Math.trunc(Math.random()*10));
    }

    return arr;
}

let randomArr = create_dummy_array(5);
console.log(randomArr);

/* Math 5 */
function random_choice(someArr){
    var idx = Math.trunc(Math.random()*(someArr.length));
    return someArr[idx];
}

let randomElement = random_choice([4, 67, -9, 0, 22, -8, -7, 11]);
console.log(randomElement);