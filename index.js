const calculateTotalCost = (totalAmount, numTransactions) => {
  const transactionFee = 3;
  const interestRate = 0.001;
  const totalTransactionFee = numTransactions * transactionFee;
  const interestFee = totalAmount * interestRate;
  return totalAmount + totalTransactionFee + interestFee;
};

const totalAmount = 1000;
const numTransactions = 10;
console.log(calculateTotalCost(totalAmount, numTransactions))


