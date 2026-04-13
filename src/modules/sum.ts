export function sumSmallNumbers(a: number, b: number) {
    if (a < 0 || b < 0) {
        throw new Error("Les nombres doivent être positifs");
    }

    if (a > 9 || b > 9) {
        throw new Error("Les nombres doivent être inférieurs à 10");
    }
    return a + b;  
};

export function sum(numA: number, numB: number){
    return sumSmallNumbers(numA, numB);
};

export function addition(a: number, b: number): number {

    // return sumSmallNumbers(a, b);

    if (a < 0 || b < 0) {
        throw new Error("Your numbers must be positive !");
    }

    // return sumSmallNumbers(a, b);

    const digitsA = String(a).split('').reverse();
    const digitsB = String(b).split('').reverse();
    const maxLength = digitsA.length > digitsB.length ? digitsA.length : digitsB.length;

    let carry = 0;
    let result = '';

    for (let i = 0; i < maxLength; i++) {
        const digitA = i < digitsA.length ? Number(digitsA[i]) : 0;
        const digitB = i < digitsB.length ? Number(digitsB[i]) : 0;

        let digitSum: number;

        if (carry > 0) {
            const withCarry = sumSmallNumbers(digitA, carry);
            if (withCarry > 9) {
                digitSum = digitB;
                carry = 1;
                result = String(digitSum).concat(result);
                continue;
            } else {
                digitSum = sumSmallNumbers(withCarry, digitB);
            }
        } else {
            digitSum = sumSmallNumbers(digitA, digitB);
        }

        if (digitSum > 9) {
            const sumStr = String(digitSum);
            carry = Number(sumStr[0]);
            result = sumStr[1].concat(result);
        } else {
            carry = 0;
            result = String(digitSum).concat(result);
        }
    }

    if (carry > 0) {
        result = String(carry).concat(result);
    }

    return Number(result);
}

