class Enemy extends Character {
	constructor(chName, health, mana, skills, fraction, description) {
		super(chName, health, mana, skills);
		this.fraction = fraction;
		this.description = description;
	}
}