/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  const totalAmountSpentInCategory = [];
  if (transactions.length === 1) {
    totalAmountSpentInCategory.push({
      category: transactions[0].category,
      totalSpent: transactions[0].price,
    });
    return totalAmountSpentInCategory;
  }
  transactions.forEach((transaction) => {
    const indexOfCategory = totalAmountSpentInCategory.findIndex(
      (totalAmountByCategory) =>
        totalAmountByCategory.category === transaction.category
    );
    if (indexOfCategory !== -1) {
      totalAmountSpentInCategory[indexOfCategory].totalSpent +=
        transaction.price;
    } else {
      totalAmountSpentInCategory.push({
        category: transaction.category,
        totalSpent: transaction.price,
      });
    }
  });
  return totalAmountSpentInCategory;
}

const transactions = [
  {
    itemName: "rice",
    category: "grocery",
    price: 80,
  },
  {
    itemName: "rice",
    category: "bakery",
    price: 80,
  },
  {
    itemName: "rice",
    category: "grocery",
    price: 80,
  },
  {
    itemName: "rice",
    category: "bakery",
    price: 80,
  },
  {
    itemName: "rice",
    category: "meat",
    price: 80,
  },
];
// calculateTotalSpentByCategory(transactions);
module.exports = calculateTotalSpentByCategory;
