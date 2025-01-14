# Gerador de Arquivos Bancários

Um gerador de arquivos-retorno bancários que automatiza e simplifica a criação de leiautes bancários, como RCB001, CNAB240 e CNAB400.
Você pode utilizá-lo [aqui](https://gerador-arquivos-bancarios.netlify.app/), sem precisar instalar ou realizar qualquer outra tarefa técnica.

---

## 🧐 Por que este projeto existe?

Este projeto nasceu para resolver um problema real: a necessidade de criar manualmente arquivos-retorno bancários, um processo que era demorado, repetitivo e propenso a erros. Agora, com o Gerador de Arquivos Bancários, é possível gerar esses arquivos com precisão e rapidez, ajudando desenvolvedores e empresas a otimizar o processamento de pagamentos e a integração bancária.

---

### 🌱 Notas de Versão: Patinho Feio (versão 1.0.0)

Esta versão é uma prova de conceito, um meio de testar possibilidades e tecnologias para criar uma nova ferramenta que realizasse o seu propósito: gerar arquivos de retorno.
Não houve cuidado com os princípios SOLID, foi escrita na metodologia _Go Horse_ e possui uma fraca cobertura de testes. A partir de agora irei mudar o rumo deste patinho feio, na direção da utilização de boas práticas da engenharia de software, para que, em próximas versões, seja aplicado o TDD.
O objetivo para a próxima versão será:

- **Melhorar a cobertura de testes:** atingir pelo menos **85% de cobertura de código em testes unitários**.
- **Modularizar componentes:** a principal ferramenta está estática na `ArquivoView.vue` e deverá ser completamente componentizada.
- **Corrigir erros de interface:** corrigir alguns pequenos bugs na interface de usuário, como os valores dos campos **Valor Recebido** e **Valor da Tarifa** e o abrir/fechar do cadastro de registros detalhe.

---

## ✨ Principais recursos

- **Geração automatizada de arquivos** no leiaute **RCB001** (em breve disponibilizarei mais leiautes).
- Interface intuitiva e moderna, construída com **Vue.js** e **Vuetify**.
- Suporte a configurações personalizadas para atender às necessidades específicas de cada projeto.
- Ideal para o desenvolvimento e os testes de processamento de pagamentos.
- Darkmode... por sua culpa, Erick! XD

---

## 🚀 Tecnologias utilizadas

### Front-end

- **[Vue.js](https://vuejs.org/) 3.0:** Framework JavaScript para construção de interfaces dinâmicas e reativas.
- **[Vuetify](https://vuetifyjs.com/):** Framework baseado no Material Design, para construção de interfaces responsivas e acessíveis.
- **[Pinia](https://pinia.vuejs.org/):** Gerenciamento de estado simples e eficiente para Vue.js.
- **[Vue Router](https://router.vuejs.org/):** Gerenciamento de rotas, permitindo navegação entre as páginas da aplicação.

### Ferramentas de desenvolvimento

- **[Vite](https://vitejs.dev/):** Ambiente de desenvolvimento rápido e moderno.
- **[Vitest](https://vitest.dev/):** Framework de testes unitários, com suporte nativo para Vue.js.
- **[ESLint](https://eslint.org/):** Ferramenta de linting para garantir a padronização e qualidade do código.
- **[Prettier](https://prettier.io/):** Formatador de código para manter o estilo consistente.

### Outras bibliotecas e utilitários

- **[dotenv](https://github.com/motdotla/dotenv):** Gerenciamento de variáveis de ambiente.
- **[i18n](https://github.com/mashpie/i18n-node) e [Vue I18n](https://vue-i18n.intlify.dev/):** Suporte a internacionalização.

---

## 🛠️ Instalação e uso

### Pré-requisitos

Certifique-se de que você tem o **Node.js** (versão 16 ou superior) instalado em sua máquina.

### Clonando o repositório

```bash
git clone https://github.com/ratto/arquivo-bancario-generator.git
cd arquivo-bancario-generator
```

### Instalando dependências

```bash
npm install
```

### Iniciando o ambiente de desenvolvimento

```bash
npm start
```

### Gerando build para produção

```bash
npm run build
```

### Rodando testes

```bash
npm test
```

### Rodando a cobertura de testes

```bash
npm run coverage
```

---

## 📂 Estrutura do projeto

- **src/:** Código-fonte principal da aplicação.
  - **components/:** Componentes Vue.js reutilizáveis.
  - **views/:** Páginas principais da aplicação.
  - **store/:** Configurações do Pinia para gerenciamento de estado.
  - **assets/:** Arquivos estáticos, como imagens e estilos.
- **tests/:** Testes unitários escritos com Vitest e vue test-utils.
- **public/:** Arquivos públicos servidos diretamente no build.

---

## 🤝 Contribuindo

Sinta-se à vontade para contribuir com este projeto! Para começar:

1. Faça um fork do repositório.
2. Crie uma branch para sua feature ou correção: `git checkout -b minha-feature`.
3. Faça os commits das suas alterações: `git commit -m 'Adiciona nova funcionalidade'`.
4. Envie para a branch principal: `git push origin minha-feature`.
5. Abra um Pull Request.

---

## 📝 Licença

Este projeto é licenciado sob a MIT License.

---

## 📧 Contato

Caso tenha dúvidas ou sugestões, entre em contato pelo meu GitHub, [LinkedIn](https://www.linkedin.com/in/pedro-tosta-paixao/), [Facebook](https://www.facebook.com/rattopedro/) ou abra uma issue neste repositório.

---

## ❤️ Apoie este projeto

Este projeto foi criado com dedicação para ajudar profissionais a economizar tempo e evitar frustrações ao lidar com arquivos bancários. Se você gostou da ferramenta e ela está sendo útil para o seu trabalho, considere fazer uma doação.

Sua contribuição me ajudará a:

- Manter e melhorar a aplicação com novos recursos.
- Garantir suporte contínuo e atualizações.
- Investir mais tempo no desenvolvimento de projetos úteis para a comunidade.
- Comprar mais café para codificar mais ferramentas incríveis e úteis.

### 🌟 Como doar

Você pode fazer uma doação pelo PayPal clicando no botão abaixo:

[![Doe pelo PayPal](https://img.shields.io/badge/PayPal-Donate-blue.svg)](https://www.paypal.com/donate/?hosted_button_id=8RE442ASFC2PS)

---

Mesmo que você não possa doar agora, seu apoio compartilhando o projeto com amigos ou colegas já faz uma grande diferença. Obrigadão! 🙌
