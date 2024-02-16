const sumDigits = function (x) {
    if (x<0) x=x*-1;
    let sum=0;
    while (x>0) {
        sum=sum+x%10;
        x = Math.floor (x/10);
    }
    return `The sum of digits = ${sum}`;
}

console.log(sumDigits(134256));

const LuckyNumber = function (x) {
    if (x<0) x=x*-1;
    let sum1=0, sum2=0;
    while (x>0) {
        sum1=sum1+x%10;
        x = Math.floor (x/10);
        sum2=sum2+x%10;
        x = Math.floor (x/10);
    }
    return sum1-sum2;
}
res = LuckyNumber(134256);
console.log(res?'The number is unlucky':'The number is lucky');



