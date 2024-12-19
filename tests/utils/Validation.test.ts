import { describe, expect, it } from 'vitest';
import { isRequired, maxLength } from '../../src/utils/Validations';

describe('Validations suite', () => {
  describe('isRequired tests', () => {
    it('should return true if not empty', () => {
      const sut = isRequired('abc');

      expect(sut).toBe(true);
    });

    it('should return a string when empty', () => {
      const sut = isRequired('');

      expect(typeof sut).toBe('string');
    });

    it('should return a string when only spaces were input', () => {
      const sut = isRequired('  ');

      expect(typeof sut).toBe('string');
    });
  });

  describe('maxLength tests', () => {
    const max = 4;
    const sut = maxLength(max);

    it.each(['abc', '1234', ''])('should be true within length limit', (value) => {
      expect(sut(value)).toBe(true);
    });

    it.each(['abcdefg', '123456'])('should return an error message whenever the max limit is crossed', (value) => {
      expect(typeof sut(value)).toBe('string');
      expect(sut(value)).toBe(`Não pode ultrapassar ${max} caracteres`);
    });
  });
});
