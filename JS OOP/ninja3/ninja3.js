/* Ninja Class III */
/* Part 1 */
class Ninja{
    constructor(name){
        this.name=name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;

    }
    // This should log that Ninja's name to the console.
    sayName(){
        console.log("My ninja name is "+this.name);
    }
    // This should show the Ninja's Strength and Speed, as well as their health.
    showStats(){
        console.log("Name: "+this.name+", Strength: "+this.strength+", Speed: "+this.speed+", Health: "+this.health);
    }
    // This should add +10 Health to the Ninja
    drinkSake(){
        this.health += 10;
    }
}

/* Part 2 */
class Sensei extends Ninja{
    constructor(name){
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }
    // speakWisdom() method
    speakWisdom(){
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }
}

let ninja1 = new Ninja("Bill Gates");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();

let super_sensi = new Sensei("Master Splinter");
super_sensi.speakWisdom();
super_sensi.showStats();
