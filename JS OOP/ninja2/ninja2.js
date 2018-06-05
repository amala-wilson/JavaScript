function Ninja(name){
    // Ninja attributes
    // public attributes
    this.name = name;
    this.health = 100;
    // private attributes
    var speed = 3;
    var strength = 3;

    // This should log that Ninja's name to the console
    this.sayName = function(){
        console.log("My ninja name is "+this.name);
    }

    // This should show the Ninja's Strength and Speed, as well as their health.
    this.showStats = function(){
        console.log("Name: "+this.name+", Strength: "+strength+", Speed: "+speed+", Health: "+this.health);
    }

    // This should add +10 Health to the Ninja
    this.drinkSake = function(){
        this.health += 10;
    }

    // Get Strength
    this.getStrength = function(){
        return strength;
    }
}

var ninja1 = new Ninja("Bill Gates");
var ninja2 = new Ninja("Goemon");
Ninja.prototype.punch = function(ninja){
    if(ninja instanceof Ninja){
        ninja.health -= 5;
        console.log(ninja.name+" was punched by "+this.name+" and lost 5 Health!")
    }
    else{
        console.log("Passed in argument not instance of object Ninja")
    }
}
Ninja.prototype.kick = function(ninja){
    if(ninja instanceof Ninja){
        strength = ninja.getStrength();
        totalKicks = strength * 5;
        while(strength > 0){
            ninja.health -= 5;
            strength--;
        }
        console.log(ninja.name+" was kicked by "+this.name+" and lost "+totalKicks+" Health!")
    }
    else{
        console.log("Passed in argument not instance of object Ninja")
    }
}
ninja1.punch(ninja2);
ninja1.kick(ninja2);
ninja2.punch("Hi there!");
