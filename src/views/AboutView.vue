<script setup lang="ts">
const donateUrl = 'https://www.paypal.com/donate/?hosted_button_id=8RE442ASFC2PS';
const repositorioUrl = 'https://github.com/ratto/arquivo-bancario-generator';
</script>

<template>
  <div id="about-view">
    <h1>Sobre a Aplicação</h1>
    <p>
      Bem-vindo(a) ao gerador de arquivos-retorno! Este projeto foi desenvolvido para oferecer uma experiência moderna,
      eficiente e responsiva, utilizando as mais recentes tecnologias web.
    </p>
    <h2>Detalhes da Aplicação</h2>
    <p>
      Esta é uma aplicação web progressiva (PWA) desenvolvida com <strong>Vue.js</strong>, garantindo performance e
      flexibilidade na construção de interfaces dinâmicas e interativas. Utilizei o <strong>Vuetify</strong>, um
      poderoso framework baseado no Material Design, para criar uma interface de usuário elegante e intuitiva, que
      facilita a navegação e a usabilidade.
    </p>
    <p>
      Para garantir um desenvolvimento rápido e eficiente, usei o <strong>Vite</strong> como boilerplate principal. Esta
      ferramenta proporciona um ambiente de desenvolvimento otimizado e rápido, ideal para criar aplicações modernas.
    </p>
    <h2>Qualidade e Testes</h2>
    <p>
      Nosso compromisso com a qualidade é reforçado pelo uso de <strong>Vitest</strong>, em conjunto com o vue
      <strong>test-utils</strong>, para a criação de testes unitários robustos. Isso nos permite entregar uma aplicação
      confiável e livre de bugs.
    </p>
    <h2>Funcionalidades e Bibliotecas</h2>
    <p>A aplicação é complementada por uma série de bibliotecas que adicionam funcionalidades importantes:</p>
    <ul>
      <li><strong>Pinia:</strong> Gerenciamento de estado simples e eficiente.</li>
      <li><strong>Vue Router:</strong> Navegação otimizada entre páginas.</li>
      <li>
        <strong>Vue I18n e i18n:</strong> Suporte multilíngue, permitindo que a aplicação alcance usuários de diferentes
        locais e idiomas.
      </li>
      <li><strong>Sass:</strong> Estilização avançada com suporte a variáveis e mixins.</li>
    </ul>
    <h2>Código Limpo e Padronizado</h2>
    <p>
      Adotei boas práticas de desenvolvimento utilizando ferramentas como <strong>ESLint</strong> e
      <strong>Prettier</strong> para garantir um código limpo, legível e padronizado.
    </p>
    <h2>Nosso Compromisso</h2>
    <p>
      Este projeto foi desenvolvido com foco no funcionamento da ferramenta, utilizando as tecnologias mais recentes
      para o frontend. Porém, isso não quer dizer que deixarei a experiência de lado: para mim, o usuário final vem em
      primeiro lugar e ressalto o compromisso em proporcionar uma ótima experiência para estes. Estou sempre aberto a
      feedbacks para melhorar continuamente.
    </p>
    <h2>O Café de Cada Dia</h2>
    <i>Transformo café em código!</i>
    <p>
      Eu simplesmente adoro café. É o meu combustível para desenvolver ferramentas incríveis! E, como sabem, um bom café
      está ficando caro.
    </p>
    <p>
      Brincadeiras a parte, infelizmente este tem sido um período bem difícil em minha vida profissional. Tenho 3
      crianças para cuidar e preciso muito de sua ajuda neste momento.
    </p>
    <p>
      Como havia dito, esta ferramenta é gratuita; você pode utilizar a ferramenta ou o repositório que está no
      <a :href="repositorioUrl" target="_blank">meu github</a>, porém, preciso de doações para que eu possa investir
      mais tempo neste projeto, melhorando a qualidade e colocando novos leiautes de arquivos-retorno.
    </p>
    <a :href="donateUrl" target="_blank">
      Clique aqui para realizar a sua doação através do meu Paypal e me ajude a comprar mais café!
    </a>
  </div>
</template>
