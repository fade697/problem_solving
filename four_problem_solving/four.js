const arrOfNumber=[1,2,2,3,4,5,6,6];
const arrtUniq=[];
arrtUniq=uniqArryOfNumber(arrOfNumber);


function uniqArryOfNumber(arry){
    const arry1=[];
    for (let i=0;i<arry.length;i++){
        if (arry[i]!=arry[i+1]){
        arry1.push (arry[i+1]);

        }
    }
}