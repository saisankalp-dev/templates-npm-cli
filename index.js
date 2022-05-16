#!/usr/bin/env node

import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import gradient from "gradient-string";
import inquirer from "inquirer";
import { createSpinner } from "nanospinner";

let name;
let type;

const sleep = (ms=2000) => new Promise((r) => setTimeout(r,ms))

function heading() {
    const title = 'npm-cli-template'
    figlet(title, (err,data) => {
        console.log(gradient.instagram.multiline(data))
    })
}

async function welcome() {
    const title = chalkAnimation.neon('Welcome to npm cli template \n')
    heading()
    await sleep()
    title.stop()
    console.log(`
        ${chalk.bgGray("This is a template to create your own cli")}
        This is amazing!!!
    `)
}

async function askText() {
    const answer = await inquirer.prompt({
        name: 'name',
        type: 'input',
        message: 'What is your name?',
        default() {
            return 'sankalp'
        }
    })

    name = answer.name
}

async function askOptions() {
    const answer = await inquirer.prompt({
        name: 'type',
        type: 'list',
        message: 'Select type',
        choices: [
            'option 1',
            'option 2',
            'option 3',
            'option 4',
        ]
    })

    type = answer.type
    handleAnswer(answer.type)
}

async function handleAnswer(answer) {
    const spinner = createSpinner('Initialising...').start()
    await sleep()
    if (answer === 'option 3') {
        spinner.success({text: 'Success !!'})
    } else {
        spinner.error({text: 'Error !!'})
    }
    process.exit(1)
}

await welcome()
await askText()
await askOptions()