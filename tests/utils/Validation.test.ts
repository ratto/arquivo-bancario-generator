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
    it('should return true if value is lesser then maxLength', () => {
      const sut = maxLength('123abc', 8);

      expect(sut).toBe(true);
    });

    it('should return true if value equals maxLenght', () => {
      const sut = maxLength('123abc', 6);

      expect(sut).toBe(true);
    });

    it('should give a message with maxLength whenever value passes maxLength value', () => {
      const length = 5;
      const sut = maxLength('123abc', length);

      expect(typeof sut).toBe('string');
      expect(sut).toBe(`Não pode ultrapassar ${length} caracteres`);
    });
  });
});
