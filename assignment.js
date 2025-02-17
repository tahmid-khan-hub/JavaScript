
function calculateVAT( price ) {

    if(price < 0 || typeof price !== 'number') return 'Invalid';
    
    return price * (7.5/100);
}

function  validContact( contact ) {

    if(typeof contact !== 'string') return 'Invalid';

    if(contact[0] !== '0' || contact[1] !== '1' || contact.length !== 11){
        return false;
    }
    
    for(let i = 0; i < contact.length; i++){
        if(contact[i] === ' ') return false;
    }
    return true;
}

function  willSuccess( marks ) {

    if(!Array.isArray(marks)) return 'Invalid';
    if(marks.length === 0) return false;

    let pass = 0, fail = 0;
    for(let i = 0; i < marks.length; i++){
        if(marks[i] >= 50) pass++;
        else fail++;
    }
    if(pass > fail) return true;
    else return false;
}


