import { sumSmallNumbers, addition } from '../modules/sum';
import { expect, describe, it } from 'vitest';

describe('sumSmallNumbers', () => {
    it('should return 2 when 1 + 1', () => {
        expect(sumSmallNumbers(1, 1)).toBe(2);
    });

    it('should throw an error when a is negative', () => {
        expect(() => sumSmallNumbers(-1, 1)).toThrow('Les nombres doivent être positifs');
    });

    it('should throw an error when b is negative', () => {
        expect(() => sumSmallNumbers(1, -1)).toThrow('Les nombres doivent être positifs');
    });

    it('should throw an error when a is greater than 9', () => {
        expect(() => sumSmallNumbers(10, 1)).toThrow('Les nombres doivent être inférieurs à 10');
    });

    it('should throw an error when b is greater than 9', () => {
        expect(() => sumSmallNumbers(1, 10)).toThrow('Les nombres doivent être inférieurs à 10');
    });
});

describe('addition', () => {
    it('should return 5 when 2 + 3', () => {
        expect(addition(2, 3)).toBe(5);
    });

    it('should throw an error when a is negative', () => {
        expect(() => addition(-1, 1)).toThrow('Your numbers must be positive !');
    });

    it('should throw an error when b is negative', () => {
        expect(() => addition(1, -1)).toThrow('Your numbers must be positive !');
    });

    it('should return 123 when 87 + 36', () => {
        expect(addition(87, 36)).toBe(123);
    });

    it('should return 100 when 99 + 1', () => {
        expect(addition(99, 1)).toBe(100);
    });

    it('should return 1000 when 999 + 1', () => {
        expect(addition(999, 1)).toBe(1000);
    });

    it('should return 579 when 123 + 456', () => {
        expect(addition(123, 456)).toBe(579);
    });

    it('should return 0 when 0 + 0', () => {
        expect(addition(0, 0)).toBe(0);
    });

    it('should return 87 when 87 + 0', () => {
        expect(addition(87, 0)).toBe(87);
    });

    it('should return 198 when 99 + 99', () => {
        expect(addition(99, 99)).toBe(198);
    });
});