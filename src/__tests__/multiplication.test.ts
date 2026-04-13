import { expect, describe, it, test } from 'vitest';
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


describe("Multiplication", () => {
  describe("Classic", () => {
    test("small numbers", () => {
      expect(multiplication(2, 3)).toBe(6);
    });

    test("big numbers", () => {
      expect(multiplication(10, 10)).toBe(100);
    });
  });

  const positiveNumber = 2
  const negativeNumber = -positiveNumber
  describe("same sign", () => {

    test("positives", () => {
      expect(multiplication(positiveNumber, positiveNumber)).toBeGreaterThan(0);
    });

    test("negatives", () => {
      expect(multiplication(negativeNumber, negativeNumber)).toBeGreaterThan(0);
    });
  });

  describe("different sign", () => {
    test("positives", () => {
      expect(multiplication(positiveNumber, negativeNumber)).toBeLessThan(0);
    });

    test("negatives", () => {
      expect(multiplication(negativeNumber, positiveNumber)).toBeLessThan(0);
    });
  });

  describe("zero", () => {
    const anyNumber = 3
      test("start with zero", () => {
        expect(multiplication(0, anyNumber)).toBe(0);
      });

      test("end with zero", () => {
        expect(multiplication(anyNumber, 0)).toBe(0);
      });

      test("zero only", () => {
        expect(multiplication(0, 0)).toBe(0);
      });
  });

  describe("one", () => {
    const anyNumber = 3
      test("start with one", () => {
        expect(multiplication(1, anyNumber)).toBe(anyNumber);
      });

      test("end with one", () => {
        expect(multiplication(anyNumber, 1)).toBe(anyNumber);
      });

      test("one only", () => {
        expect(multiplication(1, 1)).toBe(1);
      });
  });
});