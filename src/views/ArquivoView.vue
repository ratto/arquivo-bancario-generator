<script setup lang="ts">
import { ref, useTemplateRef } from 'vue';
import {
  VTextField,
  VForm,
  VRow,
  VCol,
  VSelect,
  VExpansionPanels,
  VExpansionPanel,
  VExpansionPanelText,
} from 'vuetify/components';
import { VDateInput } from 'vuetify/labs/VDateInput';
import { isRequired, maxLength } from '../utils/Validations';
import { Rcb001, RegistroDetalhe } from '../types/Rcb001';
import { FormaRecebimento, MeioArrecadacao } from '../enums/Rcb001Enums';

const formArquivo = useTemplateRef('form-arquivo');
const arquivo = ref<Rcb001>({} as Rcb001);
const registroDetalhe = ref<RegistroDetalhe>({ bancoCreditado: {} } as RegistroDetalhe);

const meiosArrecadacao = [MeioArrecadacao.CAIXA, MeioArrecadacao.ELETRONICA, MeioArrecadacao.INTERNET];
const formasRecebimento = [FormaRecebimento.CHEQUE, FormaRecebimento.DINHEIRO, FormaRecebimento.NAO_IDENTIFICADA];

async function submit() {
  const formIsValid = await formArquivo.value?.validate();

  if (formIsValid?.valid) console.log('submitted');
}
</script>

<template>
  <div id="arquivo-view">
    <h1>Leiaute RCB001</h1>
    <VForm novalidate ref="form-arquivo" @submit.prevent="submit">
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
      </VRow>
      <VRow>
        <VCol>
          <VTextField
            color="primary"
            v-model="arquivo.codComercioEletronico"
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
                <VTextField :model-value="registroDetalhe.seqRegistro" disabled>{{
                  !!arquivo.registrosDetalhe ? arquivo.registrosDetalhe.length + 1 : '1'
                }}</VTextField>
              </VCol>
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
                />
              </VCol>
              <VCol>
                <VSelect
                  label="Forma de Recebimento"
                  :items="formasRecebimento"
                  v-model:model-value="registroDetalhe.formaRecebimento"
                />
              </VCol>
            </VRow>
          </VExpansionPanelText>
        </VExpansionPanel>
      </VExpansionPanels>

      <div class="form-footer d-flex justify-end mt-3">
        <VBtn type="reset" color="warning" class="mx-1">Limpar tudo</VBtn>
        <VBtn type="submit" color="primary" class="mx-1">Criar arquivo</VBtn>
      </div>
    </VForm>
  </div>
</template>

<style lang="scss" scoped>
.form-footer {
  margin: 0 -0.25rem;
}
</style>
