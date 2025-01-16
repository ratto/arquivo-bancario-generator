import { describe, test, expect } from 'vitest';
import { FormaRecebimento, MeioArrecadacao } from '../../src/enums/Rcb001Enums';

describe('suíte de testes de Rcb001Enums.ts', () => {
  describe('testes do MeioArrecadacao', () => {
    const sut = MeioArrecadacao;

    test('deverá retornar os valores corretos para cada chave', () => {
      expect(sut.CAIXA).toBe(1);
      expect(sut.ELETRONICA).toBe(2);
      expect(sut.INTERNET).toBe(3);
    });

    test('deverá retornar a chave correta para cada valor', () => {
      expect(sut[1]).toBe('CAIXA');
      expect(sut[2]).toBe('ELETRONICA');
      expect(sut[3]).toBe('INTERNET');
    });
  });

  describe('testes do FormaRecebimento', () => {
    const sut = FormaRecebimento;

    test('deverá retornar os valores corretos para cada chave', () => {
      expect(sut.DINHEIRO).toBe(1);
      expect(sut.CHEQUE).toBe(2);
      expect(sut.NAO_IDENTIFICADA).toBe(3);
    });

    test('deverá retornar a chave correta para cada valor', () => {
      expect(sut[1]).toBe('DINHEIRO');
      expect(sut[2]).toBe('CHEQUE');
      expect(sut[3]).toBe('NAO_IDENTIFICADA');
    });
  });
});
