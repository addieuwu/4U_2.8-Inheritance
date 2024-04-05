/**
 * ICS4U - Mr. Brash
 *  
 * 2.8 - Inheritance & Super! 🦸🏻
 * 
 * Read the README.md file (right-click it and select Open Preview)
 * 
 * Author: 
 */

'use strict';

// The lib.round() function is available
const lib = require("./library.js");


class BankAccount {
  nickname;
  #type;
  #balance;

  constructor(nickname, type, balance) {
    this.nickname = nickname;
    this.#type = type;
    this.#balance = balance;
  }

  balance() {return this.#balance}

  debit(amt) {
    if (this.#balance > 0 && amt > this.#balance) {
      this.#balance = lib.round(this.#balance - amt, 2);
      return true;
    } else {
      return false;
    }
  }

  credit(amt) {
    if (this.#balance > 0 && amt > this.#balance) {
      this.#balance = lib.round(this.#balance + amt, 2);
      return true;
    } else {
      return false;
    }
  }
}


class SavingsAccount extends BankAccount {
  #interestRate = 0.03;

  constructor(nickname) {
    super(nickname, "Savings Account");
  }

  get interestRate() {return this.#interestRate}

  set changeInterestRate(amt) {
    if (amt > 0 && amt < 1) {this.#interestRate = amt}
  }

  applyInterest
}


class CheckingAccount extends BankAccount {
  #transactionFee = 0.5;

  constructor(balance) {
    super("Classic Checking", "Checking Account", balance);

  }

  get transactionFee() {return this.#transactionFee}

  set changeTransactionFee(fee) {
    if (fee > 0.01 && fee <= 2.00) {this.transactionFee = fee;}
  }


  
}
