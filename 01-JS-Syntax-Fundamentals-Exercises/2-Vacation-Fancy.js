function solve(groupSize, groupType, weekDay) {
    let totalPrice = 0;

    // Find single price
    let singlePrice = getSinglePrice(groupType, weekDay);

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

    function getSinglePrice(groupType, weekDay) {
        switch (groupType) {
            case 'Students':
                return getStudentPrice(weekDay);
            case 'Business':
                return getBusinessPrice(weekDay);
            case 'Regular':
                return getRegularPrice(weekDay);
        }
    }

    function getStudentPrice(weekDay) {
        if (weekDay === 'Friday') {
            return 8.45;
        } else if (weekDay === 'Saturday') {
            return 9.80;
        } else if (weekDay === 'Sunday') {
            return 10.46;
        }
    }

    function getBusinessPrice(weekDay) {
        if (weekDay === 'Friday') {
            return 10.90;
        } else if (weekDay === 'Saturday') {
            return 15.60;
        } else if (weekDay === 'Sunday') {
            return 16;
        }
    }

    function getRegularPrice(weekDay) {
        if (weekDay === 'Friday') {
            return 15;
        } else if (weekDay === 'Saturday') {
            return 20;
        } else if (weekDay === 'Sunday') {
            return 22.50;
        }
    }
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
