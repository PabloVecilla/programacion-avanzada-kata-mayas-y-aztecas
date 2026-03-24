// 1. Construye las siguientes clases:

//     **Warrior**:
class Warrior {
    constructor (name, life, power) { // constructor(life, power)
        this.name = name; 
        this.life = life; 
        this.power = power; 
    }
    attack () {              //     `attack`: Devuelve _power_ del guerrero
        console.log("El guerrero " + this.name + " ataca con " + this.power); 
        return this.power; 
    }
    defend (damage) {           //     `defend(damage)`: resta el _damage_ a _life_. Después, imprime el valor de la vida restante.
        this.life -= damage; 
        console.log("El guerrero " + this.name + " defiende el ataque y recibe daño de " + damage + " su vida ahora es: " + this.life); 
    }
}

//     **Maya: extiende de la clase Warrior**
class Maya extends Warrior {
    constructor (name, life, power) {
        super(name, life, power); 
    }
    drinkColaCao() {        //     `drinkColaCao`: Suma 10 al poder.
        this.power += 10; 
        console.log("El guerrero " + this.name + " bebe Cola Cao, ahora su poder es: " + this.power); 
    }
}

//     **Aztec: extiende de la clase Warrior**
class Aztec extends Warrior {
    constructor (name, life, power) {
        super(name, life, power); 
    }
    drinkNesquik() {        //     `drinkNesquik`: Suma 10 a la vida.
        this.life += 10; 
        console.log("El guerrero " + this.name + " bebe Nesquik, ahora su vida es: " + this.life); 
    }
}


// 3. Realiza la siguiente cadena de intercambio de golpes.
let aztecWarrior = new Aztec ("Tzilacatzin", 100, 30); 
let mayanWarrior = new Maya ("Kaibil Balam", 85, 40); 

//     - Azteca bebe nesquik
aztecWarrior.drinkNesquik(); 

//     - Maya bebe Cola Cao
mayanWarrior.drinkColaCao(); 

//     - Maya ataca a azteca. Azteca defiende.
const mayaAttack = mayanWarrior.attack(); 
aztecWarrior.defend(mayaAttack); 

//     - Azteca ataca a maya. Maya defiende.
const aztecAtack = aztecWarrior.attack();
mayanWarrior.defend(aztecAtack); 

/* IMPROVEMENTS:: function whoWins */
let mayanLife = mayanWarrior.life; 
let aztecLife = aztecWarrior.life

function whoWins (aztecLife, mayanLife) {
    if (aztecLife > mayanLife || mayanLife <= 0) console.log(aztecWarrior.name + " WINS!"); 
    else if (aztecWarrior.life < mayanWarrior.life || aztecLife <= 0) console.log(mayanWarrior.name + " WINS!"); 
    else console.log("EMPATE"); 
} whoWins (aztecLife, mayanLife); 