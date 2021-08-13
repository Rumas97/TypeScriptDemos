import { BankAccount } from './bank-account';
import { AccountType } from './enums';

//inheritance of the BankAccount
export class CheckingAccount extends BankAccount {
    accountType = AccountType.Checking;
} 