import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import HomeView from '../../src/views/HomeView.vue';

describe('suíte de testes de HomeView', () => {
  test('deverá renderizar todos os títulos e parágrafos corretamente', () => {
    const wrapper = mount(HomeView);

    // Verifica os títulos
    expect(wrapper.text()).toContain('Home');
    expect(wrapper.text()).toContain('Por que criei esta ferramenta?');
    expect(wrapper.text()).toContain('O que foi feito (com muito café)?');
    expect(wrapper.text()).toContain('O que ofereço?');

    // Verifica trechos de parágrafos
    expect(wrapper.text()).toContain('Acredito que a tecnologia tem o poder de transformar o dia a dia');
    expect(wrapper.text()).toContain('Desenvolvi uma aplicação moderna e intuitiva que automatiza a geração');
    expect(wrapper.text()).toContain('Se quiser, você também poderá conferir o código deste projeto na página');
  });

  test('deverá renderizar os links corretamente', () => {
    const wrapper = mount(HomeView, {
      global: {
        mocks: {
          repositorioUrl: 'https://github.com/meu-repositorio-mock',
          linkedInUrl: 'https://linkedin.com/in/meu-perfil-mock',
          facebookUrl: 'https://facebook.com/meu-perfil-mock',
        },
      },
    });

    const leiautesArquivoUrl = wrapper.find(
      'a[href="https://www.bb.com.br/site/pro-seu-negocio/aplicativos-leiautes-de-arquivos/"]'
    );
    const repositorioUrl = wrapper.find('a[href="https://github.com/meu-repositorio-mock"]');
    const linkedInLink = wrapper.find('a[href="https://linkedin.com/in/meu-perfil-mock"]');
    const facebookLink = wrapper.find('a[href="https://facebook.com/meu-perfil-mock"]');

    expect(leiautesArquivoUrl.exists()).toBe(true);
    expect(repositorioUrl.exists()).toBe(true);
    expect(linkedInLink.exists()).toBe(true);
    expect(facebookLink.exists()).toBe(true);
  });
});
