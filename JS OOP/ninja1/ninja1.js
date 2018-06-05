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
}

var ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();