function solve(groupSize, groupType, weekDay) {
    let singlePrice = 0;
    let totalPrice = 0;
    
    // Find single price
    switch (groupType) {
        case 'Students':
            if (weekDay === 'Friday') {
                singlePrice = 8.45;
            } else if (weekDay === 'Saturday') {
                singlePrice = 9.80;
            } else if (weekDay === 'Sunday') {
                singlePrice = 10.46;
            }
            break;
        case 'Business':
            if (weekDay === 'Friday') {
                singlePrice = 10.90;
            } else if (weekDay === 'Saturday') {
                singlePrice = 15.60;
            } else if (weekDay === 'Sunday') {
                singlePrice = 16;
            }
            break;
        case 'Regular':
            if (weekDay === 'Friday') {
                singlePrice = 15;
            } else if (weekDay === 'Saturday') {
                singlePrice = 20;
            } else if (weekDay === 'Sunday') {
                singlePrice = 22.50;
            }
            break;
    }

    // Find total price
    totalPrice = singlePrice * groupSize;

    // Apply discount
    if (groupType === 'Students' && groupSize >= 30) {
        totalPrice = totalPrice * 0.85
    } 

    if (groupType === 'Business' && groupSize >= 100) {
        totalPrice -= singlePrice * 10;
    }

    if (groupType === 'Regular' && groupSize >= 10 && groupSize <= 20) {
        totalPrice *= 0.95;
    } 

    // Print result
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

solve(30,
    "Students",
    "Sunday"
);

console.log('-------------------');

solve(40,
"Regular",
"Saturday"
);
