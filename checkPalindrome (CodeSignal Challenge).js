function solution(inputString) {
    let rev = "";
    for(let i=inputString.length - 1;i>=0;i--){
        rev += inputString[i]
    }
    if(rev===inputString){
        return(true)
    } else{
        return(false)
    }

}

console.log(solution("eye"))