class Hero extends Character {
	constructor(chName, health, mana, skills, race, lvl) {
		super(chName, health, mana, skills);
		this.race = race;
		this.lvl = lvl;
	}
}