function getNotification(str){
    let nameArray = str.split('@');
    // return nameArray;
    let userName = nameArray[0];
    let domainName = nameArray[1];

    const output = userName + 'sent you an email from'+domainName;
    return output;
}

const str = 'zihad.ph@gmail.com';

const ans = getNotification(str);
console.log(ans);


