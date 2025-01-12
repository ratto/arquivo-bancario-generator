<script setup lang="ts">
const leiautesArquivoUrl = 'https://www.bb.com.br/site/pro-seu-negocio/aplicativos-leiautes-de-arquivos/';
const repositorioUrl = import.meta.env.VITE_REPOSITORIO_URL;
const facebookUrl = import.meta.env.VITE_FACEBOOK_URL;
const linkedInUrl = import.meta.env.VITE_LINKEDIN_URL;
</script>

<template>
  <div id="home-view">
    <h1 class="d-sr-only">Home</h1>
    <h2>Por que criei esta ferramenta?</h2>
    <p>
      Acredito que a tecnologia tem o poder de transformar o dia a dia, tornando tarefas complexas mais simples, rápidas
      e acessíveis. No universo da automação bancária, enfrentamos um desafio comum: a criação manual de
      arquivos-retorno. Esse processo não é apenas lento e tedioso, mas também propenso a erros humanos, consumindo
      tempo precioso que poderia ser dedicado a tarefas mais importantes.
    </p>
    <p>
      Essa frustração me motivou a criar algo melhor. Algo que ajudasse não só na minha rotina, mas também na de outros
      profissionais que lidam com processamento de pagamentos e integração bancária.
    </p>
    <h2>O que foi feito (com muito café)?</h2>
    <p>
      Desenvolvi uma aplicação moderna e intuitiva que automatiza a geração de arquivos-retorno bancários. Com base em
      entradas específicas, esta ferramenta cria arquivos no leiaute RCB001, utilizado em pagamentos realizados nas
      modalidades de débito em conta através da internet e BB Crediário Internet (pode conferir no
      <a :href="leiautesArquivoUrl" target="_blank">website do Banco do Brasil</a>).
    </p>
    <p>
      Esta solução foi projetada para garantir precisão e agilidade, eliminando a necessidade de gerar esses arquivos
      manualmente. Utilizei as mais recentes tecnologias, como Vue.js, Vite e Vuetify, para criar uma experiência fluida
      e eficiente. Além disso, já implementei o darkmode (viu, Erick?!).
    </p>
    <h2>O que ofereço?</h2>
    <p>
      Este Gerador de Arquivos-Retorno é uma ferramenta poderosa que transforma um trabalho que antes poderia levar uma
      hora ou mais em uma tarefa concluída em minutos. Além de poupar tempo, esta solução reduz erros e simplifica o
      desenvolvimento e os testes de processamento de pagamentos, contribuindo para um fluxo de trabalho mais produtivo
      e confiável.
    </p>
    <p>
      Este projeto nasceu da experiência prática e do desejo de compartilhar soluções que realmente fazem a diferença.
      Hoje, esta ferramenta está disponível para você, pronta para ajudá-lo a otimizar processos, economizar tempo e
      focar no que realmente importa.
    </p>
    <p>
      Se quiser, você também poderá conferir o código deste projeto na página
      <a :href="repositorioUrl" target="_blank">do repositório em meu Github</a>. Estou aberto à feedbacks em meu
      <a :href="linkedInUrl" target="_blank">LinkedIn</a> ou <a :href="facebookUrl" target="_blank">Facebook</a>.
    </p>
  </div>
</template>
