/**
 * Create a function that returns the name of the winner in a fight between two fighters.

Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

Your function also receives a third argument, a string, with the name of the fighter that attacks first.

Example:
  declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"
  
  Lew attacks Harry; Harry now has 3 health.
  Harry attacks Lew; Lew now has 6 health.
  Lew attacks Harry; Harry now has 1 health.
  Harry attacks Lew; Lew now has 2 health.
  Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.
function Fighter(name, health, damagePerAttack) {
        this.name = name;
        this.health = health;
        this.damagePerAttack = damagePerAttack;
        this.toString = function() { return this.name; }
}
*/
function declareWinner(fighter1, fighter2, firstAttacker) {
    //designate 2nd attacker then first
    const goesSecond = firstAttacker === fighter1.name ? fighter2 : fighter1;

    const goesFirst = goesSecond.name === fighter1.name ? fighter2 : fighter1;
    let count = 0;

    //Need to loop somehow until a fighter's health is <= 0
    //While fighter1's health is >0 and fighter2's health is >0
    do
    {
        //subtract health from secondAttacker or 1st attacker
        if(count % 2 === 0)
        {
            goesSecond.health -= goesFirst.damagePerAttack;
        }else{
            goesFirst.health -= goesSecond.damagePerAttack;
        }
        count++
    }while(goesFirst.health > 0 && goesSecond.health > 0)

    return goesFirst.health <= 0 ? goesSecond.name : goesFirst.name;
  }

  function Fighter(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
    this.toString = function() { return this.name; }
}

console.log(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew"));
console.log(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Harry"));
console.log(declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harry"));
console.log(declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harald"));
