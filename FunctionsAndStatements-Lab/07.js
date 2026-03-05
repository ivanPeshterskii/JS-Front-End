function solve(n1, n2, n3) {
    let negativeCount = 0;


    if(n1 < 0) negativeCount++;

    if(n2 < 0) negativeCount++;

    if(n3 < 0) negativeCount++;

    if(negativeCount % 2 == 0) {
        console.log('Positive');
    } else {
        console.log('Negative');
    }
}
solve(5,12,-15);