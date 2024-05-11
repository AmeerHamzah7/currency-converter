#! /usr/bin/env node
import inquirer from "inquirer"
import chalk from "chalk"

console.log(chalk.green.bold(`\nWelcome to currency_converter tool developed by Hamza\n`))

//list of currencies and their exchange rates
let exchangeRates:any = {
    "USD": 1,  //base currency
    "GBP": 0.8,
    "PKR": 278,
    "AUD": 1.51,
    "CAD": 1.37
}

//ask user to convert from a currency to the currency
let conversion = await inquirer.prompt([
    {
        name: "fromCurrency",
        type: "list",
        message: "Select a currency to convert from",
        choices: ["USD", "GBP", "PKR", "AUD", "CAD"]
    },
    {
        name: "toCurrency",
        type: "list",
        message: "Select a currency to get conversion",
        choices: ["USD", "GBP", "PKR", "AUD", "CAD"]
    },
    {
        name: "amount",
        type: "number",
        message: "Please enter the amount to get conversion:"
    }
]);

//performing the currency conversion
let fromCurrencyy = exchangeRates[conversion.fromCurrency]
let toCurrencyy = exchangeRates[conversion.toCurrency]
let amount = conversion.amount

//currencyCoversion formula to calculate converted value
let baseAmount = amount / fromCurrencyy
let conversionAmount = baseAmount * toCurrencyy

//print the conversion amount
console.log(chalk.blue.bold(`Conversion = ${conversionAmount.toFixed(2)}`));