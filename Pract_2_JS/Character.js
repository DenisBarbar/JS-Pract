class Character {
	constructor(chName, health, mana, skills) {
		this.chName = chName;
		this.health = health;
		this.mana = mana;
		this.skills = skills;
	}
	isAlive(){
		if (this.health <= 0) console.log(`${this.chName} has died!`);
	}

	accurateShot(target) {
		const cost = 3;
		const damage = 20;
		if (this.mana >= cost){
			this.mana = this.mana - cost;
			target.health = target.health - damage;
			if (target.health < 0) target.health = 0;
			console.log(`${this.chName} attacs ${target.chName} with Accurate Shot and deals ${damage} damage`);
			logging();
		} else console.log(`Not enougth mana!`);
	}
	silverArrow(target) {
		const cost = 6;
		const damage = 45;
		if (this.mana >= cost) {
			this.mana = this.mana - cost;
			target.health = target.health - damage;
			if (target.health < 0) target.health = 0;
			console.log(`${this.chName} attacs ${target.chName} with Silver Arrow and deals ${damage} damage`);
			logging();
		} else console.log(`Not enought Mana!`);
	}
	dragonBreath(target) {
		const cost = 10;
		const damage = 70;
		if (this.mana >= cost){
			this.mana = this.mana - cost;
			target.health = target.health - damage;
			if (target.health < 0) target.health = 0;
			console.log(`${this.chName} attacs ${target.chName} with Dragon Breath and deals ${damage} damage`);
			logging();
		} else console.log(`Not enougth mana!`);
	}
	claws(target) {
		const cost = 5;
		const damage = 40;
		if (this.mana >= cost){
			this.mana = this.mana - cost;
			target.health = target.health - damage;
			if (target.health < 0) target.health = 0;
			console.log(`${this.chName} attacs ${target.chName} with Claws and deals ${damage} damage`);
			logging();
		} else console.log(`Not enougth mana!`);
	}
}