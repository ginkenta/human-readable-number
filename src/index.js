module.exports = function toReadable (number) {
    if(!Number(number)) return 'zero';
    const numb = {
        'oneTen': ['',' one', ' two', ' three', ' four', ' five', ' six', ' seven', ' eight', ' nine',
                  ' ten', ' eleven', ' twelve', ' thirteen', ' fourteen', ' fifteen', ' sixteen', 
                  ' seventeen', ' eighteen', ' nineteen'],
        'tenHundr': ['',' twenty', ' thirty', ' forty', ' fifty', ' sixty', ' seventy', ' eighty', ' ninety'],
        'hundr': ' hundred',
    }
    let arrNum = number.toString().split('').map( a => Number(a));
    const befLastDigit = arrNum.length - 2,
          lastDigit = arrNum.length - 1,
          lastTwoDigit = Number(number.toString().slice(befLastDigit));
    let lastNumb;

    if (arrNum.length === 1) 
        return numb['oneTen'][number].replace(/^[\s\uFEFF\xA0]+/g, '');

    if (arrNum[befLastDigit] < 2) {
      lastNumb = numb['oneTen'][lastTwoDigit];
    } else if(arrNum[lastDigit] > 0){
      lastNumb = numb['tenHundr'][arrNum[befLastDigit]-1] + numb['oneTen'][arrNum[lastDigit]];
    } else {
      lastNumb = numb['tenHundr'][arrNum[befLastDigit]-1];
    }
    
    if (arrNum.length === 3) 
        return numb['oneTen'][arrNum[0]].replace(/^[\s\uFEFF\xA0]+/g, '')  + numb['hundr']  + lastNumb;
        
    return lastNumb.replace(/^[\s\uFEFF\xA0]+/g, '');
}
