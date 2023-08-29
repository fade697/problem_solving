function isPrime (number){
    if (number<=1){
        console.log("the number is nor prime");
    }
    if (number ==2){
        console.log("the number is prime");
    }
    let number1=number/2;

    for (let i=2;i<=number1;i++){
        if (number%i==0){
            console.log("the number is not prime");
        }else{
            console.log("the number is prime");
        }

    }

}
const number=4;
isPrime(number);