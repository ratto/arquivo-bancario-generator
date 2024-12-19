<script setup lang="ts"></script>

<template>
  <div id="home-view">
    <h1 class="d-sr-only">Página Inicial</h1>
    <p>
      Em meu último emprego precisávamos criar arquivos bancários, nos leiautes CNAB240 ou RCB001, para testar, tanto no
      desenvolvimento, quanto na fase de QA, o processamento desse tipo de arquivo no sistema. Quem desenvolve sistemas
      para prefeituras e governo do estado, fintechs ou qualquer outro que precise processar pagamentos realizados aos
      bancos sabe a dificuldade que é gerar um arquivo desses na mão (sim, fazíamos na mão mesmo!).
    </p>
    <p>
      Uma vez levei mais de duas horas para criar um arquivo desses e realizar o teste. Mais de duas horas para
      assegurar o funcionamento correto de um processamento de apenas um arquivo. Isso me deixou bastante frustrado,
      porém, foi a motivação necessária para desenvolver um simples gerador de arquivos bancários.
    </p>
    <p>
      Meus testes desse tipo passaram a me tomar alguns minutos para realizar diversos casos de teste diferentes,
      utilizando diferentes arquivos.
    </p>
    <p>
      Mas não gosto de guardar essas inovações para mim, tanto gerei arquivos para facilitar o trabalho de meus colegas,
      como dividi o meu código com aqueles que me pediam. O problema é que alguns deles não tinha expertise com o node,
      e a dificuldade de criar um build de dev no Node para utilizar o aplicativo superava a dificuldade de criar um
      arquivo desses na mão. Deixei todo o meu código "javascriptzinho" com os meus colegas depois de sair da empresa.
    </p>
    <p>
      Então decidi criar esta versão com tecnologias mais recentes, para ajudar não só os meus antigos colegas - e agora
      amigos - como toda a comunidade de desenvolvedores e QAs que precisam gerar arquivos em diferentes leiautes para
      testar em seus próprios sistemas. E, mantendo a mesma filosofia, também disponibilizo todo o código em meu
      <a href="https://github.com/ratto/arquivo-bancario-generator" target="_blank">github</a>. Fique a vontade para
      utilizá-lo!
    </p>
    <p>Espero que esta aplicação lhe ajude tanto o quanto me ajudou!</p>
  </div>
</template>
