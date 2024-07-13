import inquirer from "inquirer";
import chalk from "chalk";
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
const player = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "Enter your name",
    },
]);
console.log(player.name);
const opponent = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        message: "Select your opponent",
        choices: ["Alien", "Skeleton", "Zombie"],
    },
]);
console.log(opponent.select);
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);
async function data() {
    let game = true;
    do {
        if (opponent.select === "Alien") {
            console.log(`${chalk.bold.green(p1.name)} vs ${chalk.bold.red(o1.name)}`);
            let ask = await inquirer.prompt([
                {
                    name: "opt",
                    type: "list",
                    message: "Choose your option",
                    choices: ["Attack", "Drink Portion", "Run For Your Life ..."],
                },
            ]);
            if (ask.opt === "Attack") {
                let num = Math.floor(Math.random() * 2);
                if (num === 0) {
                    p1.fuelDecrease();
                    console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                    console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                    if (p1.fuel <= 0) {
                        console.log(chalk.green.bold.italic("You loose better luck next time"));
                        process.exit();
                    }
                }
                if (num <= 0) {
                    o1.fuelDecrease();
                    console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                    console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                    if (o1.fuel <= 0) {
                        console.log(chalk.red.bold.italic("You win"));
                        process.exit();
                    }
                }
            }
            if (ask.opt === "Drink Portion") {
                console.log(chalk.bold.italic.green(`you drink health portion your fuel is ${p1.fuel}`));
            }
            if (ask.opt === "Run For Your Life ...") {
                console.log(chalk.red.bold.italic("You loose,  better luck next time"));
            }
        }
        if (opponent.select === "Skeleton") {
            console.log(`${chalk.bold.green(p1.name)} vs ${chalk.bold.red(o1.name)}`);
            let ask = await inquirer.prompt([
                {
                    name: "opt",
                    type: "list",
                    message: "Choose your option",
                    choices: ["Attack", "Drink Portion", "Run For Your Life ..."],
                },
            ]);
            if (ask.opt === "Attack") {
                let num = Math.floor(Math.random() * 2);
                if (num === 0) {
                    p1.fuelDecrease();
                    console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                    console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                    if (p1.fuel <= 0) {
                        console.log(chalk.green.bold.italic("You loose better luck next time"));
                        process.exit();
                    }
                }
                if (num <= 0) {
                    o1.fuelDecrease();
                    console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                    console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                    if (o1.fuel <= 0) {
                        console.log(chalk.red.bold.italic("You win"));
                        process.exit();
                    }
                }
            }
            if (ask.opt === "Drink Portion") {
                console.log(chalk.bold.italic.green(`you drink health portion your fuel is ${p1.fuel}`));
            }
            if (ask.opt === "Run For Your Life ...") {
                console.log(chalk.red.bold.italic("You loose,  better luck next time"));
            }
        }
        if (opponent.select === "Zombie") {
            console.log(`${chalk.bold.green(p1.name)} vs ${chalk.bold.red(o1.name)}`);
            let ask = await inquirer.prompt([
                {
                    name: "opt",
                    type: "list",
                    message: "Choose your option",
                    choices: ["Attack", "Drink Portion", "Run For Your Life ..."],
                },
            ]);
            if (ask.opt === "Attack") {
                let num = Math.floor(Math.random() * 2);
                if (num === 0) {
                    p1.fuelDecrease();
                    console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                    console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                    if (p1.fuel <= 0) {
                        console.log(chalk.green.bold.italic("You loose better luck next time"));
                        process.exit();
                    }
                }
                if (num <= 0) {
                    o1.fuelDecrease();
                    console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                    console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                    if (o1.fuel <= 0) {
                        console.log(chalk.red.bold.italic("You win"));
                        process.exit();
                    }
                }
            }
            if (ask.opt === "Drink Portion") {
                console.log(chalk.bold.italic.green(`you drink health portion your fuel is ${p1.fuel}`));
            }
            if (ask.opt === "Run For Your Life ...") {
                console.log(chalk.red.bold.italic("You loose,  better luck next time"));
            }
        }
        const { adventure } = await inquirer.prompt([
            {
                name: "adventure",
                type: "confirm",
                message: "Do you want play again ?",
                default: true
            }
        ]);
        game = adventure;
    } while (game);
}
data();
