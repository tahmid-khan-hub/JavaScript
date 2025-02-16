function checkDigit(str){

    if(typeof str !== 'string') return 'invalid';

    for(let i=0; i<str.length; i++){
        if(str[i] >= '0' && str[i] <= '9') return true;
    }
    return false;
}

const str = '*&@';

const ans = checkDigit(str);
// console.log(ans);









function calculateFinalScore(student){
    // whelther input is object or not
    if(typeof student !== 'object') return 'Invalid Input';

    // if marks >= 80 true otherwise false
    let totalMarks = student.testScore + student.schoolGrade;
    if(student.isFFamily === true) totalMarks += 20;

    if(totalMarks >= 80) return true;
    else return false;
}

const student = {
    name:'Rajib',
    testScore:15,
    schoolGrade:25,
    isFFamily:true,
}

const output = calculateFinalScore(student);
// console.log(output);








function waitingTime(waitingTimes, serialNumber){
    // invalid input
    if(!Array.isArray(waitingTimes) || typeof serialNumber !== 'number') return 'Invalid Input';

    let sum = 0;
    const n = waitingTimes.length;
    for(let i of waitingTimes){
        sum += i;
    }

    const avg = parseInt(sum / n);
    const remaingNumber = (serialNumber - 1) - n;
    return avg * remaingNumber;

}

const waitingTimes = [6,2,5,2,8];
const serialNumber = 6;

const timeRequired = waitingTime(waitingTimes, serialNumber);
console.log(timeRequired);