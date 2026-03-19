import { substraction } from '../modules/substraction';
import { expect, describe, it } from 'vitest';

describe('substraction', () => {
    it('should return 1 when 3 - 2', () => {
        expect(substraction(3, 2)).toBe(1);
    });
    it('should throw an error when a is less than b', () => {
        expect(() => substraction(2, 3)).toThrow("sorry you can't substract to get a negative result");
    });
    it('should throw an error when the result is less than 0', () => {
        expect(() => substraction(5, 6)).toThrow("sorry you can't substract to get a negative result");
    });
    it('should throw an error when the result is greater than 9', () => {
        expect(() => substraction(10, 1)).toThrow("you are cheating tring to substract big numbers here");
    });
});
