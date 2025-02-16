function checkDigit(str){

    if(typeof str !== 'string') return 'invalid';

    for(let i=0; i<str.length; i++){
        if(str[i] >= '0' && str[i] <= '9') return true;
    }
    return false;
}

const str = '*&@';

const ans = checkDigit(str);
console.log(ans);