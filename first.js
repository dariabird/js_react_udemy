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

for (var i = 0; i < 2; i++) {
    let expenseType = prompt("Введите обязательную статью расходов в этом месяце", ""),
        expenseValue = +prompt("Во сколько обойдется?", 0);
    appData.expenses[expenseType] = expenseValue;
}

alert("Бюджет на один день: " + appData.budget / 30.0);
