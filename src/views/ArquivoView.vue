<script setup lang="ts">
import { ref, useTemplateRef } from 'vue';
import {
  VTextField,
  VForm,
  VTable,
  VRow,
  VCol,
  VSelect,
  VCard,
  VCardActions,
  VExpansionPanels,
  VExpansionPanel,
  VExpansionPanelText,
} from 'vuetify/components';
import { VDateInput } from 'vuetify/labs/VDateInput';
import { isRequired, maxLength } from '../utils/Validations';
import { Rcb001, RegistroDetalhe } from '../types/Rcb001';
import { FormaRecebimento, MeioArrecadacao } from '../enums/Rcb001Enums';

const formArquivo = useTemplateRef('form-arquivo');
const arquivo = ref<Rcb001>({ registrosDetalhe: [] as RegistroDetalhe[] } as Rcb001);
const openDialog = ref(false);
const registroDetalhe = ref<RegistroDetalhe>({ bancoCreditado: {} } as RegistroDetalhe);
const registroAtual = ref<number | null>(null);
const arquivoTexto = ref<String[]>([]);

const meiosArrecadacao = [
  { type: MeioArrecadacao.CAIXA, label: 'Caixa' },
  { type: MeioArrecadacao.ELETRONICA, label: 'Eletrônica' },
  { type: MeioArrecadacao.INTERNET, label: 'Internet' },
];
const formasRecebimento = [
  { type: FormaRecebimento.DINHEIRO, label: 'Dinheiro' },
  { type: FormaRecebimento.CHEQUE, label: 'Cheque' },
  { type: FormaRecebimento.NAO_IDENTIFICADA, label: 'Não identificada' },
];

function cancelRegistroDetalhe(): void {
  registroDetalhe.value = { bancoCreditado: {} } as RegistroDetalhe;
}

function deleteRegistroDetalhe(index: number): void {
  arquivo.value.registrosDetalhe.splice(index, 1);
}

function resetArquivo(): void {
  arquivo.value.registrosDetalhe = [] as RegistroDetalhe[];
}

function editRegistroDetalhe(index: number): void {
  registroAtual.value = index;
  registroDetalhe.value = Object.create(arquivo.value.registrosDetalhe[index]);
}

function generateArquivo(): void {
  arquivoTexto.value = new Array<String>();
  arquivoTexto.value[0] = generateHead();
  generateRegistros();
  arquivoTexto.value.push(generateTrailler());
}

function generateHead(): string {
  const numConvenio: string = arquivo.value.numConvenio.toString().padStart(6, '0');
  const seqRetornoIntercambio: string = arquivo.value.seqRetornoIntercambio.toString().padStart(9, '0');
  const nomeEmpresa: string = arquivo.value.nomeEmpresa.toUpperCase().padEnd(20);
  const codBanco: string = arquivo.value.codBanco.toString().padStart(3, '0');
  const nomeBanco: string = arquivo.value.nomeBanco.toUpperCase().padEnd(20);
  const dataGeracaoArquivo: string = normalizarData(arquivo.value.dataGeracaoArquivo).replaceAll('/', '');
  const seqArquivo: string = arquivo.value.seqArquivo.toString().padStart(6, '0');
  const codComercioNaoEletronico: string = !!arquivo.value.codComercioNaoEletronico
    ? arquivo.value.codComercioNaoEletronico.padStart(8, '0')
    : `        `;

  return `A2${numConvenio} ${seqRetornoIntercambio}    ${nomeEmpresa}${codBanco}${nomeBanco}${dataGeracaoArquivo}${seqArquivo}06                                                             ${codComercioNaoEletronico}`;
}

function generateRegistros(): void {
  arquivo.value.registrosDetalhe.map((registro, i) => {
    if (typeof registro != null) {
      const prefixoAgencia: string = registro.bancoCreditado.prefixoAgencia.toString().padStart(4, '0');
      const dvAgencia: string = registro.bancoCreditado.dvAgencia.toString();
      const numConta: string = registro.bancoCreditado.numConta.toString().padStart(9, '0');
      const dvConta: string = registro.bancoCreditado.dvConta.toString();
      const dataPagamento: string = normalizarData(registro.dataPagamento).replaceAll('/', '');
      const dataCredito: string = normalizarData(registro.dataCredito).replaceAll('/', '');
      const codigoBarras: string = registro.codigoBarras.toString().padStart(44, '0');
      const valorRecebido: string = registro.valorRecebido.toString().padStart(12, '0');
      const valorTarifa: string = registro.valorTarifa.toString().padStart(7, '0');
      const numSeqRegistro: string = (i + 1).toString().padStart(8, '0');
      const prefAgenciaRecebedora: string = registro.prefAgenciaRecebedora.toString().padStart(4, '0');
      const meioArrecadacao: string = registro.meioArrecadacao.toString();
      const formaRecebimento: string = registro.formaRecebimento.toString();
      const autenticacaoEletronica: string = !!registro.autenticacaoEletronica
        ? registro.autenticacaoEletronica.padStart(23, '0')
        : `                       `;

      const registroToText = `G${prefixoAgencia}${dvAgencia}${numConta}${dvConta}     ${dataPagamento}${dataCredito}${codigoBarras}${valorRecebido}${valorTarifa}${numSeqRegistro}${prefAgenciaRecebedora}    ${meioArrecadacao}${autenticacaoEletronica}${formaRecebimento}         `;
      arquivoTexto.value.push(registroToText);
    }
  });
}

function generateTrailler(): string {
  const valorTotal: number = arquivo.value.registrosDetalhe.reduce((totalValue, { valorRecebido, valorTarifa }) => {
    return (totalValue += valorRecebido + valorTarifa);
  }, 0);

  return `Z${(arquivoTexto.value.length + 1).toString().padStart(6, '0')}${valorTotal.toString().padStart(17, '0')}                                                                                                                              `;
}

function normalizarData(date: string): string {
  return new Date(date).toLocaleDateString('pt-br', { dateStyle: 'short' });
}

async function saveRegistroDetalhe(index: number | null): Promise<void> {
  const formIsValid = await formArquivo.value?.validate();

  if (formIsValid?.valid) {
    if (index == null) arquivo.value.registrosDetalhe.push(registroDetalhe.value);
    else arquivo.value.registrosDetalhe.splice(index, 1, registroDetalhe.value);

    registroAtual.value = null;

    registroDetalhe.value = { bancoCreditado: {} } as RegistroDetalhe;
  }
}

async function submit(): Promise<void> {
  const formIsValid = await formArquivo.value?.validate();

  if (formIsValid?.valid) {
    generateArquivo();
    openDialog.value = true;
  }
}
</script>

<template>
  <div id="arquivo-view">
    <h1>Leiaute RCB001</h1>
    <VForm novalidate ref="form-arquivo" @submit.prevent="submit" @reset="resetArquivo">
      <VRow>
        <VCol>
          <VTextField
            type="number"
            color="primary"
            v-model="arquivo.seqRetornoIntercambio"
            label="Sequencial de Retorno"
            :rules="[isRequired, maxLength(9)]"
          />
        </VCol>
        <VCol>
          <VTextField
            type="number"
            color="primary"
            v-model="arquivo.seqArquivo"
            label="Sequencial do Arquivo"
            :rules="[isRequired, maxLength(6)]"
          />
        </VCol>
        <VCol>
          <VDateInput
            v-model="arquivo.dataGeracaoArquivo"
            label="Data de Geração do Arquivo"
            :rules="[isRequired]"
            color="primary"
            show-adjacent-months
          />
        </VCol>
        <VCol>
          <VTextField
            color="primary"
            v-model="arquivo.nomeEmpresa"
            label="Nome da Empresa / Órgão"
            :rules="[isRequired, maxLength(20)]"
          />
        </VCol>
      </VRow>
      <VRow>
        <VCol>
          <VTextField
            type="number"
            color="primary"
            v-model="arquivo.codBanco"
            label="Código do Banco"
            :rules="[isRequired, maxLength(3)]"
          />
        </VCol>
        <VCol>
          <VTextField
            color="primary"
            v-model="arquivo.nomeBanco"
            label="Nome do Banco na Compensação Interbancária"
            :rules="[isRequired, maxLength(20)]"
          />
        </VCol>
        <VCol>
          <VTextField
            type="number"
            color="primary"
            v-model="arquivo.numConvenio"
            label="Número do Convênio"
            :rules="[isRequired, maxLength(6)]"
          />
        </VCol>
      </VRow>
      <VRow>
        <VCol>
          <VTextField
            color="primary"
            v-model="arquivo.codComercioNaoEletronico"
            label="Código de Comércio Eletrônico"
            :rules="[maxLength(8)]"
          />
        </VCol>
      </VRow>

      <VExpansionPanels>
        <VExpansionPanel title="Rergistro Detalhe">
          <VExpansionPanelText>
            <VRow>
              <VCol>
                <VTextField
                  type="number"
                  color="primary"
                  v-model="registroDetalhe.bancoCreditado.prefixoAgencia"
                  label="Agência Creditada"
                  :rules="[isRequired, maxLength(4)]"
                />
              </VCol>
              <VCol>
                <VTextField
                  type="number"
                  color="primary"
                  v-model="registroDetalhe.bancoCreditado.dvAgencia"
                  label="DV da Agência"
                  :rules="[isRequired, maxLength(1)]"
                />
              </VCol>
              <VCol>
                <VTextField
                  type="number"
                  color="primary"
                  v-model="registroDetalhe.bancoCreditado.numConta"
                  label="Conta Corrente"
                  :rules="[isRequired, maxLength(9)]"
                />
              </VCol>
              <VCol>
                <VTextField
                  type="number"
                  color="primary"
                  v-model="registroDetalhe.bancoCreditado.dvConta"
                  label="DV da Conta"
                  :rules="[isRequired, maxLength(1)]"
                />
              </VCol>
            </VRow>
            <VRow>
              <VCol>
                <VDateInput
                  v-model="registroDetalhe.dataPagamento"
                  label="Data do Pagamento"
                  :rules="[isRequired]"
                  color="primary"
                  show-adjacent-months
                />
              </VCol>
              <VCol>
                <VDateInput
                  v-model="registroDetalhe.dataCredito"
                  label="Data do Crédito"
                  :rules="[isRequired]"
                  color="primary"
                  show-adjacent-months
                />
              </VCol>
              <VCol>
                <VTextField
                  type="number"
                  color="primary"
                  v-model="registroDetalhe.valorRecebido"
                  label="Valor Recebido"
                  :rules="[isRequired, maxLength(10)]"
                />
              </VCol>
              <VCol>
                <VTextField
                  type="number"
                  color="primary"
                  v-model="registroDetalhe.valorTarifa"
                  label="Valor da Tarifa"
                  :rules="[isRequired, maxLength(5)]"
                />
              </VCol>
            </VRow>
            <VRow>
              <VCol>
                <VTextField
                  type="number"
                  color="primary"
                  v-model="registroDetalhe.prefAgenciaRecebedora"
                  label="Agência Recebedora"
                  :rules="[isRequired, maxLength(4)]"
                />
              </VCol>
              <VCol>
                <VTextField
                  color="primary"
                  v-model="registroDetalhe.autenticacaoEletronica"
                  label="Autenticação Eletrônica"
                  :rules="[maxLength(23)]"
                />
              </VCol>
              <VCol>
                <VSelect
                  label="Meio de Arrecadação"
                  :items="meiosArrecadacao"
                  v-model:model-value="registroDetalhe.meioArrecadacao"
                  item-title="label"
                  item-value="type"
                />
              </VCol>
              <VCol>
                <VSelect
                  label="Forma de Recebimento"
                  :items="formasRecebimento"
                  v-model:model-value="registroDetalhe.formaRecebimento"
                  item-title="label"
                  item-value="type"
                />
              </VCol>
            </VRow>
            <VRow>
              <VCol>
                <VTextField
                  color="primary"
                  type="number"
                  v-model="registroDetalhe.codigoBarras"
                  label="Código de Barras"
                  :rules="[maxLength(44), isRequired]"
                />
              </VCol>
            </VRow>
            <div class="form-footer d-flex justify-end mt-3">
              <VBtn type="button" @click="cancelRegistroDetalhe" color="secondary" class="mx-1">Cancelar</VBtn>
              <VBtn
                v-show="registroAtual == null"
                type="button"
                @click="saveRegistroDetalhe(null)"
                color="primary"
                class="mx-1"
                >Salvar Registro</VBtn
              >
              <VBtn
                v-show="typeof registroAtual == 'number'"
                type="button"
                @click="saveRegistroDetalhe(registroAtual!)"
                color="primary"
                class="mx-1"
                >Salvar Registro</VBtn
              >
            </div>
          </VExpansionPanelText>
        </VExpansionPanel>
      </VExpansionPanels>

      <div class="my-4">
        <VTable v-if="!!arquivo.registrosDetalhe && arquivo.registrosDetalhe.length > 0">
          <thead>
            <tr>
              <th>Agência Creditada</th>
              <th>Conta Corrente</th>
              <th>Data do Pagamento</th>
              <th>Data do Crédito</th>
              <th>Valor Recebido</th>
              <th>Valor da Tarifa</th>
              <th>Agência Recebedora</th>
              <th>Meio de Arrecadação</th>
              <th>Forma de Recebimento</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(registro, index) in arquivo.registrosDetalhe" :key="index">
              <td>{{ `${registro.bancoCreditado.prefixoAgencia}-${registro.bancoCreditado.dvAgencia}` }}</td>
              <td>{{ `${registro.bancoCreditado.numConta}-${registro.bancoCreditado.dvConta}` }}</td>
              <td>{{ normalizarData(registro.dataPagamento) }}</td>
              <td>{{ normalizarData(registro.dataCredito) }}</td>
              <td>{{ registro.valorRecebido }}</td>
              <td>{{ registro.valorTarifa }}</td>
              <td>{{ registro.prefAgenciaRecebedora }}</td>
              <td>{{ registro.meioArrecadacao }}</td>
              <td>{{ registro.formaRecebimento }}</td>
              <td>
                <div class="d-flex">
                  <VBtn
                    class="mx-1"
                    color="warning"
                    size="x-small"
                    icon="mdi mdi-file-edit"
                    @click="editRegistroDetalhe(index)"
                  />
                  <VBtn
                    class="mx-1"
                    color="red"
                    size="x-small"
                    icon="mdi mdi-delete"
                    @click="deleteRegistroDetalhe(index)"
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </VTable>
        <VAlert v-else class="text-center" color="warning" text="Não existem registros a serem visualizados!" />
      </div>

      <div class="form-footer d-flex justify-end mt-3">
        <VBtn type="reset" color="warning" class="mx-1">Limpar tudo</VBtn>
        <VBtn type="submit" color="primary" class="mx-1">Criar arquivo</VBtn>
      </div>
    </VForm>
    <VDialog v-model="openDialog" width="auto">
      <VCard>
        <VCardText>
          <code v-if="arquivoTexto.length > 0">
            <div v-for="(line, i) in arquivoTexto" :key="i">{{ line.replaceAll(' ', '&nbsp;') }}</div>
          </code>
          <VAlert v-else color="red" class="text-center" text="Erro ao gerar o texto do arquivo-retorno!" />
        </VCardText>
        <VCardActions>
          <VBtn color="primary" @click="openDialog = false">Ok</VBtn>
        </VCardActions>
      </VCard>
    </VDialog>
  </div>
</template>

<style lang="scss" scoped>
.form-footer {
  margin: 0 -0.25rem;
}
</style>
