#!/usr/bin/env node
import inquirer from "inquirer"
let totalBalance:number = 20000
const pinNumber:number = 2999
let pinEntered = await inquirer.prompt([{
    name:"pin",
    message:"Enter your pin number",
    type:"number",

}])
//console.log(pinEntered.pin)
if(pinEntered.pin == pinNumber){
    let atmQuestions = await inquirer.prompt([{
        name:"accountType",
        message:"Select your account type",
        type:"list",
        choice:[
            "Current Account",
            "Savings Account",

        ]
    },
    {
        name:"transMethod",
        message:"Select your transaction method",
        type:"list",
        choices:[
            "Cash Withdrawal",
            "Fast Cash"
        ]
}
]);
if(atmQuestions.transaction == "cash withdhrawal"){
    let cashwithdrawAmount = await inquirer.prompt([{
        name:"withdrawal",
        message:"Enter the account you want to withdraw",
        type:"number",
    }]);
    //Greater than or equal to operator
    if(totalBalance >= cashwithdrawAmount.withdrawal){
        totalBalance == cashwithdrawAmount.withdrawal
        console.log(`Your Total Balance is:${totalBalance}`)
    }else(
        console.log(`Insufficent Balance`)
    )
}else{
    let fastCashAmount = await inquirer.prompt([{
        name:"fastCash",
        message:"Select the account youwant to withdraw",
        type:"list",
        choices:[
            "1000",
            "3000",
            "5000",
        ]
    }])
    if(totalBalance >= fastCashAmount.fastCash){
        totalBalance == fastCashAmount.fastCash
        console.log(`Your Total Balance is :${totalBalance}`)
    }else{
        console.log(`Insufficient Balance`)
    }
}




}