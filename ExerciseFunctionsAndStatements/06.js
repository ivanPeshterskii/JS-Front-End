function solve(logIn) {

    const isLengthValid = isLengthValidFunc(logIn);
    const hasLettersAndDigits = doesContainLettersAndDigits(logIn);
    const hasAtLeastTwoDigits = doesContainAtLeastTwoDigits(logIn);

    if (isLengthValid && hasAtLeastTwoDigits && hasLettersAndDigits) {
        console.log('Password is valid');
    }

    function isLengthValidFunc(password) {
        if (password.length >= 6 && password.length <= 10) {
            return true;
        } else {
            console.log('Password must be between 6 and 10 characters');
            return false;
        }
    }

    function doesContainLettersAndDigits(password) {
        let regex = /^[A-Za-z0-9]+$/;

        if (!regex.test(password)) {
            console.log('Password must consist only of letters and digits');
            return false;
        }

        return true;
    }

    function doesContainAtLeastTwoDigits(password) {
        let count = 0;

        for (let char of password) {
            if (char >= '0' && char <= '9') {
                count++;
            }
        }

        if (count < 2) {
            console.log('Password must have at least 2 digits');
            return false;
        }

        return true;
    }
}

solve('logIn');
solve('MyPass123');
solve('Pa$s$s');