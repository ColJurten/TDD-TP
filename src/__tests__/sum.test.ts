import { sumSmallNumbers, addition } from '../modules/sum';
import { expect, describe, it, test } from 'vitest';

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

describe("addition of big numbers", () => {
  describe("result", () => {
    test("with two small numbers", () => {
      expect(addition(1, 3)).toEqual(4);
    });

    test("same length", () => {
      expect(addition(10, 20)).toEqual(30);
    });

    describe("diffenrent length", () => {
      test("with one small numbers", () => {
        expect(addition(1, 10)).toEqual(11);
      });

      test("with big numbers", () => {
        expect(addition(10, 100)).toEqual(110);
      });
    });

    test("negatives", () => {
      expect(addition(-10, -100)).toEqual(-110);

      - 10 + (-100)
      - (10 + 100)
    });

    test("differents sign", () => {
      expect(() => addition(-10, 9)).toThrowError();
    });

    describe("retenues", () => {
      test("simple avec dernier chiffre = 0", () => {
        expect(addition(15, 15)).toEqual(30);
      })
      test("simple avec dernier chiffre = 1", () => {
        expect(addition(15, 16)).toEqual(31);
      })
      test("retenue avec nombres négatifs", () => {
        expect(addition(-15, -16)).toEqual(-31);
      })

      test("double retenue", () => {
        expect(addition(1, 99)).toEqual(100);
      })

      test("triple retenue", () => {
        expect(addition(999, 1)).toEqual(1000);
      })
    });
  });
});

describe("special capacities with fast addition", () => {
  describe("deux nombres égaux à 0", () => {
    test("deux nombres égaux à 0 positifs", () => {
      expect(addition(0, 0)).toEqual(0);
    });

    test("deux nombres égaux à 0 négatifs", () => {
      expect(addition(-0, -0)).toEqual(0);
    });

    test("deux nombres égaux à 0 avec un premier 0 négatif", () => {
      expect(addition(-0, 0)).toEqual(0);
    });
    
    test("deux nombres égaux à 0 avec un deuxième 0 négatif", () => {
      expect(addition(0, -0)).toEqual(0);
    });
  });

  describe("zero addition", () => {
    test("zero en première position", () => {
      const tresGrandNombre = 89283
      expect(addition(0, tresGrandNombre)).toEqual(tresGrandNombre);
    });
    test("zero en deuxième position", () => {
      expect(addition(10, 0)).toEqual(10);
    })
  });

  describe("nombres contraires", () => {
    const nombre = 89283948973847384734874398743987489743847837483748
    test("nombres contraires premier positif", () => {
      expect(() => addition(nombre, -nombre)).toThrowError();
    });

    test("nombres contraires premier négatif", () => {
      expect(() => addition(-nombre, nombre)).toThrowError();
    });
  });

  test("negatives", () => {
    const nombreNégatif = -1
    const sommeDuNombreEnPositif = 1 + 1
    const sommeNégative = -sommeDuNombreEnPositif
    expect(addition(nombreNégatif, nombreNégatif)).toEqual(sommeNégative);

    // expect(addition(-1, -1)).toEqual(-(1 + 1));

  });

  test("mixed", () => {
    expect(() => addition(10, -11)).toThrowError();
  });

  test("not possible", () => {
    expect(addition(10, 11)).toEqual(21);
  });
});