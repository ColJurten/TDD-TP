import { addition } from './sum';

export function multiplication(numA: number, numB: number): number {


    if (numA < 0) {
        const absA = Number(String(numA).slice(1));
        const sub = multiplication(absA, numB);
        if (sub === 0) return 0;
        const str = String(sub);
        if (str[0] === '-') return Number(str.slice(1));
        return Number('-'.concat(str));
    }

    if (numB < 0) {
        return multiplication(numB, numA);
    }

    let result = 0;
    let counter = 0;
    while (counter < numB) {
        result = addition(result, numA);
        counter = addition(counter, 1);
    }
    return result;

}