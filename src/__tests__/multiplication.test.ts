import { expect, describe, it } from 'vitest';
import { multiplication } from '../modules/mutiplication';


describe('multiplication - STEP 1: nombres positifs', () => {
    it('should return 6 when 2 * 3', () => {
        expect(multiplication(2, 3)).toBe(6);
    });

    it('should return 20 when 4 * 5', () => {
        expect(multiplication(4, 5)).toBe(20);
    });

    it('should return 0 when 0 * 5', () => {
        expect(multiplication(0, 5)).toBe(0);
    });

    it('should return 0 when 5 * 0', () => {
        expect(multiplication(5, 0)).toBe(0);
    });

    it('should return 1 when 1 * 1', () => {
        expect(multiplication(1, 1)).toBe(1);
    });

    it('should return 132 when 12 * 11', () => {
        expect(multiplication(12, 11)).toBe(132);
    });
});


describe('multiplication - STEP 2: numA négatif', () => {
    it('should return -12 when -3 * 4', () => {
        expect(multiplication(-3, 4)).toBe(-12);
    });

    it('should return -7 when -1 * 7', () => {
        expect(multiplication(-1, 7)).toBe(-7);
    });

    it('should return -132 when -12 * 11', () => {
        expect(multiplication(-12, 11)).toBe(-132);
    });
});

describe('multiplication - STEP 3: numB négatif et deux négatifs', () => {
    it('should return -12 when 3 * -4', () => {
        expect(multiplication(3, -4)).toBe(-12);
    });

    it('should return 12 when -3 * -4', () => {
        expect(multiplication(-3, -4)).toBe(12);
    });

    it('should return 100 when -10 * -10', () => {
        expect(multiplication(-10, -10)).toBe(100);
    });
});