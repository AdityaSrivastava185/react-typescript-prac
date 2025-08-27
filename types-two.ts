

type TransactionStatusProps = {
    transactionId:string,
    status : 'pending'|'completed'|'error',
    amount:number,
}

// Types can also have the react component as a children inside of the component

// type ReactChildrenProps = { 
//     children: React.ReactNode
// }

const transactionStatus = (props:TransactionStatusProps) => {
    let message;
    if(props.status === 'pending'){
        message = 'Your transaction is still pending.';
    } else if(props.status === 'completed'){
        message = 'Your transaction has been completed successfully.';
    } else {
        message = 'There was an error with your transaction.';
    }
    console.log(`Transaction ID: ${props.transactionId}`);
    console.log(`Status: ${props.status}`);
    console.log(`Amount: ${props.amount}`);
    console.log(`Message: ${message}`);
}

transactionStatus({
    transactionId:'1138fhvjfj939993u8hhf',
    status:'pending',
    amount:100,
})