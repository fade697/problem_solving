const arry1=['jsdbcjbv'];
const arry2=['sjdbwsj'];

commonCharacters(arry1,arry2);

function commonCharacters(str1,str2){
    const arry3=[];
    for (let i=0;i<str1.length;i++){
        for (let j=0;j<=str2.length;j++){
            if (str1[i]==str2[j]){
                arry3.push(str1[i]);
            }
        }
    }
}