// Before you begin coding, be sure that you:
// a. Cleaned up the coffee_data.js file DONE 
// b. Connect the coffee_data.js file to this index.js file. DONE
const coffeeMenu = require("./coffee_data_starter")
// Prompt 2:
// Print an array of all the drinks.
const printDrinkName = (item) => {
    return item.name
}
console.log(coffeeMenu.map(printDrinkName))
// Prompt 3
// Print an array of drinks that cost 5 and under.
const printUnder5 = (item) => {
    return item.price <= 5
}

console.log(coffeeMenu.filter(printUnder5))
// Prompt 4
// Print an array of drinks that are priced at an even number.
const printEven = (item) => {
    return item.price % 2 === 0
}
console.log(coffeeMenu.filter(printEven))
// Prompt 5
// Print the total if you were to order one of every drink.

const printArrayPrices = (item) => {
    return item.price
}
const totalPrice = coffeeMenu.map(printArrayPrices)

const printTotalPrice = (acc, currentValue) => {
    return acc + currentValue
}

console.log(totalPrice.reduce(printTotalPrice))
// Prompt 6
// Print an array with all the drinks that are seasonal.
const printArraySeasonal = (item) => {
    return item.seasonal === true
}

const seasonalDrinks = coffeeMenu.filter(printArraySeasonal)
console.log(seasonalDrinks)
// Prompt 7
// Print all the seasonal drinks with the words "with imported beans" after the item name.
// For example: "affogato with imported beans"
const printArraySeasonalText = (item) => {
    return item.name + " with imported beans"
}

const seasonalDrinksText = seasonalDrinks.map(printArraySeasonalText)

console.log(seasonalDrinksText)

