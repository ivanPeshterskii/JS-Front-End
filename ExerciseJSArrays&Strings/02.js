function solve(array, step){
    let result = array.filter((_,index) => index % step === 0);

    return result;
}
console.log(solve(['5','20','31','4','20'],2));