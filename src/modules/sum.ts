export function sumSmallNumbers(a,b){
    if(a > 9 || a < 0 || b > 9 || b < 0){
        throw new Error("Your are cheating !")
    }
    return a + b;  
};

export function sum(numA: number, numB: number){
    return sumSmallNumbers(numA, numB);
};

export function addition(a: number, b: number){
    if (a  < 0 || b < 0){
        throw new Error("Your numbers must be positive !")
    }
    return a + b;
};
