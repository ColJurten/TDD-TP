import { multiplications, power } from '../modules/multiplication';
import { expect, describe, it } from 'vitest';

describe('multiplications', () => {
    it('should return 6 when 2 * 3', () => {
        expect(multiplications(2, 3)).toBe(6);
    });
});

describe('power', () => {
    it('should return 8 when 2 ** 3', () => {
        expect(power(2, 3)).toBe(8);
    });
});