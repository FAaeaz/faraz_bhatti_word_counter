#! /use/bin/env node 
import inqiurer from 'inquirer';
const answers = await inqiurer.prompt([
    {
        name: 'sentence',
        type: 'input',
        message: 'Enter your sentence to count the words:'
    }
]);
const words = answers.sentence.trim().split("");
console.log(words);
console.log(`your sentence word count is ${words.length}`);
