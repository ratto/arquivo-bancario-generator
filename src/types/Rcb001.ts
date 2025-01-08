import Banco from './Banco';

// Registro Detalhe de Arquivo-Retorno
export type RegistroDetalhe = {
  codRegistro: number;
  bancoCreditado: Banco;
  dataPagamento: string;
  dataCredito: string;
  codigoBarras: string;
  valorRecebido: number;
  valorTarifa: number;
  prefAgenciaRecebedora: number;
  meioArrecadacao: number;
  autenticacaoEletronica?: string;
  formaRecebimento: number;
};

export type Rcb001 = {
  // Registro Header de Arquivo-Retorno
  numConvenio: number;
  seqRetornoIntercambio: number;
  nomeEmpresa: string;
  codBanco: number;
  nomeBanco: string;
  dataGeracaoArquivo: string;
  seqArquivo: number;
  versaoLeiaute: number;
  codComercioEletronico?: string;

  registrosDetalhe: Array<RegistroDetalhe>;
};
