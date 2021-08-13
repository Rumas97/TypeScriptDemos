//interfaces enforce consistency across different classes in an application
//interfaces can be used to identify the type of data that you pass to a constructor or method
//interface code does not make it to production (no impact on script or bundel size)vs class code that makes it to production

export interface DepositWithdrawal{
    deposit(amount:number):void
    withdrawal(amount:number):void

    //the classes that implement this interface now will have to have these methods in it
}


//generic types AKA placeholders. T stands for type
//in case you dont know or want to specify the type generics is useful. It gives flexibility to someone using this interface
export interface AccountInfo<TRoutingNumber, TBankNumber>{
    routingNumber:TRoutingNumber
    bankNumber:TBankNumber
}

export interface AccountSettings {
    id: number;  
    title: string;     
    balance : number;          
    interestRate?: number;  //? is optional

    //here it was possible to supply those generic type parameters 
    accountInfo?: AccountInfo<string, number>;
}  


export interface Account extends AccountSettings, DepositWithdrawal{}

/* export interface AccountInfo<TRouteNumber, TBankNumber> {
    routingNumber: TRouteNumber;
    bankNumber: TBankNumber;
}

export interface DepositWithdrawal {
    deposit(amount: number): void;
    withdrawal(amount: number): void;
} 

export interface AccountSettings {
    id: number;  
    title: string;     
    balance : number;          
    interestRate?: number;
    accountInfo?: AccountInfo<string, number>;
}  

export interface Account extends AccountSettings, DepositWithdrawal { } */
