const bankAccountFactory = (num) => {
  let bank = 0

  if(num) {
    bank = num
  }

  const bankManager = {
    checkBalance() {
      return bank
    },
    add(amount) {
      bank += amount
      console.log(`$${amount} added.`)
    },
    subtract(amount) {
      bank -= amount
      console.log(`$${amount} subtracted.`)
    }
  }
  return bankManager
};

module.exports = {
  bankAccountFactory,
};
