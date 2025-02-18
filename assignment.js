
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

function  validProposal( person1 , person2 ) {

    if(typeof person1 !== 'object' || typeof person2 !== 'object') return 'Invalid';

    let flag = false;
    if((person1.gender === 'female' && person2.gender === 'male')||
    (person1.gender === 'male' && person2.gender === 'female')){
        flag = true;
    }

    let ageDifference = Math.abs(person1.age - person2.age);
    if(flag === true && ageDifference <= 7) return true;
    else return false;

}

function  calculateSleepTime( times ) {
    
    let sum = 0;
    for(let i = 0; i < times.length; i++){
        if(typeof times[i] !== 'number') return 'Invalid';
        sum += times[i];
    }

    let hr = 0, min = 0, sec = 0;

    if(sum >= 3600){
        hr = parseInt(sum / 3600);
        sum -= (hr * 3600);
    }

    if(sum < 60) sec = sum;

    else if(sum >= 60){
        min = parseInt(sum / 60);
        sum -= (min * 60);
    }
    sec = sum;

    return '{ hour:'+ hr + ',' + 'minute:'+ min + ','+ 'second:'+ sec + ' }';
}