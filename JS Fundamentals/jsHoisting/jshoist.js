/* Predicting output of the following: */
/*
    1.
    console.log(hello);
    var hello = ‘world’;

    Output:
    undefined
*/

/*
    2.
    var needle = ‘haystack’;
    test();


    function test(){
        var needle = ‘magnet’;
        console.log(needle);
    }

    Output:
    magnet
*/

/*
    3. 
    var brendan = ‘super cool’;
    function print(){
        brendan = ‘only okay’;
        console.log(brendan);
    }
    console.log(brendan);

    Output:
    super cool
*/

/*
    4.
    var food = ‘chicken’;
    console.log(food);
    eat();
    function eat(){
        food = ‘half-chicken’;
        console.log(food);
        var food = ‘gone’;
    }

    Output:
    chicken
    half-chicken
*/

/*
    5.
    mean();
    console.log(food);
    var mean = function() {
        food = "chicken";
        console.log(food);
        var food = "fish";
        console.log(food);
    }
    console.log(food);

    Output:
    Error
*/

/*
    6.
    console.log(genre);
    var genre = "disco";
    rewind();
    function rewind() {
        genre = "rock";
        console.log(genre);
        var genre = “r&b";
        console.log(genre);
    }
    console.log(genre);

    Output:
    undefined
    rock
    r&b
    disco
*/

/*
    7.
    dojo = “san jose";
    console.log(dojo);
    learn();
    function learn() {
        dojo = "seattle";
        console.log(dojo);
        var dojo = "burbank";
        console.log(dojo);
    }
    console.log(dojo);

    Output:
    Error
    Error
    burbank
    Error
*/

var MyObjConstructor = function(name){
  var myPrivateVar = "Hello"; // just to show that it is hard to see this private var easily
  this.name = name; // but you can see the name!
  this.method = function(){
    console.log( "I am a method");
  };
}
var obj1 = new MyObjConstructor('object1');
var obj2 = new MyObjConstructor('object2');
console.log(obj1);
obj1.newProperty = "newProperty!";
obj1.__proto__.anotherProperty = "anotherProperty!";
console.log(obj1.anotherProperty); // anotherProperty!
console.log(obj1.newProperty); // newProperty!
// What about obj2?
console.log(obj2.newProperty); // undefined
console.log(obj2.anotherProperty); // anotherProperty! <= THIS IS THE COOL PART!