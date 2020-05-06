let money = +prompt("Ваш бюджет на месяц?", 0),
    time = prompt("Введите дату в формате YYYY-MM-DD", "2020-01-01");

let appData = {
    "budget": money,
    "date": time,
    "expenses": {},
    "optionalExpenses": {},
    "incomde": [],
    "savings": false,
};

for (let i = 0; i < 2; i++) {
    let expenseType = prompt("Введите обязательную статью расходов в этом месяце", ""),
        expenseValue = prompt("Во сколько обойдется?", 0);
    if ( (typeof(expenseType) != null) && (typeof(expenseValue) != null) 
        && expenseValue != '' && expenseType != '' 
        && expenseType.length < 50 ) {
        appData.expenses[expenseType] = expenseValue;
    } else {
        i--;
    }
}

// WHILE
// let i = 0;
// while (i < 2) {
//     let expenseType = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         expenseValue = prompt("Во сколько обойдется?", 0);
//     if ( (typeof(expenseType) != null) && (typeof(expenseValue) != null) 
//         && expenseValue != '' && expenseType != '' 
//         && expenseType.length < 50 ) {
//         appData.expenses[expenseType] = expenseValue;
//     } else {
//         i--;
//     }
//     i++;
// }



// DO...WHILE
// let i = 0;
// do {
//     let expenseType = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         expenseValue = prompt("Во сколько обойдется?", 0);
//     if ( (typeof(expenseType) != null) && (typeof(expenseValue) != null) 
//         && expenseValue != '' && expenseType != '' 
//         && expenseType.length < 50 ) {
//         appData.expenses[expenseType] = expenseValue;
//     } else {
//         i--;
//     }
//     i++;
// }
// while(i < 2);

appData.moneyPerDay = appData.budget / 30.0;
alert("Бюджет на один день: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Min");
} else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
    console.log("Avg");
} else if (appData.moneyPerDay >= 2000) {
    console.log("Max");
} else {
    console.log("Error");
}
