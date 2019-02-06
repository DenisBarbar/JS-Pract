function logging (){
	console.log(Player.chName, Player.health, Player.mana);
	Player.isAlive();
	console.log(Comp.chName, Comp.health, Comp.mana);
	Comp.isAlive();
}

let Player = new Hero ("Elven Archer", 100, 10, ["accurateShot", "silverArrow"], "elf", 1);
console.log(Player);
let Comp = new Enemy ("Dragon", 1000, 150, ["dragonBreath", "claws"], "dragons", "Big and scarry");
console.log(Comp);
console.log("Battle Begins");
Player.accurateShot(Comp);
Comp.claws(Player);
Player.silverArrow(Comp);
Comp.claws(Player);
Player.accurateShot(Comp);
Comp.dragonBreath(Player);