export class CheckingAccount {

    private _balance:number = 0;

    //constructor is a method that can be called when a new instance of class is created
    //it contructs the object before it gets assigned to the new object -- initialization
    //Typescript allows only one constructor
    //it can have parameters
    
    
    constructor(public title:string){
        
    }

    get balance(){
        return this._balance
    }

    set balance(val:number){
        this._balance=val
    }

    deposit(amount:number){
        this.balance += amount  //using this._balance will overwrite the set block so we want to use the output of the set block this.balance
    }

    withdrawal(amount:number){
        this.balance -= amount
    }

}





