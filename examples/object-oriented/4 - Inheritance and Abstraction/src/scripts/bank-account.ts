import { AccountType } from './enums';

export abstract class BankAccount {
    private _balance = 0;
    id: number;
    title: string;
    //abstract member: in child this property must be defined as well
    abstract accountType: AccountType;

    constructor(accountSettings: any) {
        this.id = accountSettings.id;
        this.title = accountSettings.title;
        this.balance = accountSettings.balance;
    }

    deposit(amount: number) {
        this.balance += amount;
    }

    withdrawal(amount: number) {
        this.balance -= amount;
    }
    //abstract function does not have a body, the implementation is up to the child class
    abstract getAccountInfo(): any;

    get balance() {
        return this._balance;
    }

    set balance(val: number) {
        if (val >= 0) {
            this._balance = val;
        }
        else {
            throw Error('Balance cannot be negative!');
        }
    }

} 
