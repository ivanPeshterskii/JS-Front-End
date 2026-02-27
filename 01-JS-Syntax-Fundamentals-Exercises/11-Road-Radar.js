function solve(speed, area) {
    const speedLimit = getSpeedLimit(area);

    if (speed > speedLimit) {
        const difference = speed - speedLimit;
        const status = getSeverityStatus(difference);

        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
        return;
    }

    console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);

    function getSpeedLimit(area) {
        switch (area) {
            case 'city':
                return 50;
            case 'residential':
                return 20;
            case 'interstate':
                return 90;
            case 'motorway':
                return 130;
        }
    }

    function getSeverityStatus(difference) {
        let status = '';

        if (difference > 40) {
            status = 'reckless driving' 
        } else if (difference > 20) {
            status = 'excessive speeding';
        } else {
            status = 'speeding';
        }

        return status;
    }
}

solve(40, 'city');
solve(21, 'residential');
solve(120, 'interstate');
solve(200, 'motorway');
