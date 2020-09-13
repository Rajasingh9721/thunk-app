export const onWithdraw = (amt)=>{
    return {type:"WITHDRAW",value:amt};
};


export const onDeposit = (amt)=>{
    return (dispatch)=>{
        setTimeout(()=>{
            dispatch(onDepositSync(amt));
        },5000);
    }
}

export const onDepositSync = (amt)=>{
    return {type:"DEPOSIT",value:amt};
}