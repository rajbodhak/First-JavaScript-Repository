
    const expenses = [
        { description: "Grocery Shopping", amount: 45.30, date: "2024-06-21" },
        { description: "Electricity Bill", amount: 60.75, date: "2024-06-22" },
        { description: "Internet Bill", amount: 25.00, date: "2024-06-23" },
        { description: "Dining Out", amount: 32.50, date: "2024-06-24" },
        { description: "Public Transport", amount: 15.00, date: "2024-06-25" },
        { description: "Movie Ticket", amount: 12.00, date: "2024-06-26" },
        { description: "Gym Membership", amount: 50.00, date: "2024-06-27" },
    ];

    //Filter 

    const highExpenses = expenses.filter( (expence) => expence.amount > 25);
    console.log(highExpenses);

    //Map

    const descriptions = expenses.map((expence) => expence.description);
    console.log(descriptions);

    //Reduce
    
    const totalAmount = expenses.reduce((total, expense) => total + expense.amount, 0);
    console.log(totalAmount);
