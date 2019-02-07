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
		if (this.skills.indexOf('accurateShot') != -1){
			const cost = 3;
			const damage = 20;
			if (this.mana >= cost){
				this.mana = this.mana - cost;
				target.health = target.health - damage;
				if (target.health < 0) target.health = 0;
				console.log(`${this.chName} attacs ${target.chName} with Accurate Shot and deals ${damage} damage`);
				logging();
			} else console.log(`Not enougth mana!`);
		} else console.log(`Cant cast it!`);
	}
	silverArrow(target) {
		if (this.skills.indexOf('silverArrow') != -1){
			const cost = 6;
			const damage = 45;
			if (this.mana >= cost) {
				this.mana = this.mana - cost;
				target.health = target.health - damage;
				if (target.health < 0) target.health = 0;
				console.log(`${this.chName} attacs ${target.chName} with Silver Arrow and deals ${damage} damage`);
				logging();
			} else console.log(`Not enought Mana!`);
		} else console.log(`Cant cast it!`);
	}
	dragonBreath(target) {
		if (this.skills.indexOf('dragonBreath') != -1){
			const cost = 10;
			const damage = 70;
			if (this.mana >= cost){
				this.mana = this.mana - cost;
				target.health = target.health - damage;
				if (target.health < 0) target.health = 0;
				console.log(`${this.chName} attacs ${target.chName} with Dragon Breath and deals ${damage} damage`);
				logging();
			} else console.log(`Not enougth mana!`);
		} else console.log(`Cant cast it!`);
	}
	claws(target) {
		if (this.skills.indexOf('dragonBreath') != -1){
			const cost = 5;
			const damage = 40;
			if (this.mana >= cost){
				this.mana = this.mana - cost;
				target.health = target.health - damage;
				if (target.health < 0) target.health = 0;
				console.log(`${this.chName} attacs ${target.chName} with Claws and deals ${damage} damage`);
				logging();
			} else console.log(`Not enougth mana!`);
		} else console.log(`Cant cast it!`);
	}
}