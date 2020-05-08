let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", 0);
    time = prompt("Введите дату в формате YYYY-MM-DD", "2020-01-01");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", 0);
    }
}
start();

let appData = {
    "budget": money,
    "date": time,
    "expenses": {},
    "optionalExpenses": {},
    "incomde": [],
    "savings": true,
};


function chooseExpenses() {
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
}
chooseExpenses();


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

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("Min");
    } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
        console.log("Avg");
    } else if (appData.moneyPerDay >= 2000) {
        console.log("Max");
    } else {
        console.log("Error");
    }
}
detectLevel();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30.0).toFixed();
    alert("Бюджет на один день: " + appData.moneyPerDay);
}
detectDayBudget();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");
        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с депозита: " + appData.monthIncome);
    }
}
checkSavings();

function chooseOptExpenses() {
    for (let i = 1; i <= 3; i++) {
        let optExpense = prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i] = optExpense;
    }
}
chooseOptExpenses();
