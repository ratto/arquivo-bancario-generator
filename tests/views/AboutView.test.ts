// src/views/test_AboutView.vue
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import AboutView from '../../src/views/AboutView.vue';

describe('AboutView.vue', () => {
  it('deverá renderizar os títulos', () => {
    const wrapper = mount(AboutView);
    expect(wrapper.text()).toContain('Sobre a Aplicação');
    expect(wrapper.text()).toContain('Detalhes da Aplicação');
    expect(wrapper.text()).toContain('Qualidade e Testes');
    expect(wrapper.text()).toContain('Funcionalidades e Bibliotecas');
    expect(wrapper.text()).toContain('Código Limpo e Padronizado');
    expect(wrapper.text()).toContain('Nosso Compromisso');
    expect(wrapper.text()).toContain('O Café de Cada Dia');
  });

  it('deverá renderizar os principais textos', () => {
    const wrapper = mount(AboutView);
    expect(wrapper.text()).toContain(
      'Bem-vindo(a) ao gerador de arquivos-retorno! Este projeto foi desenvolvido para oferecer uma experiência moderna, eficiente e responsiva, utilizando as mais recentes tecnologias web.'
    );
    expect(wrapper.text()).toContain('Transformo café em código!');
  });

  it('deverá renderizar as bibliotecas usadas', () => {
    const wrapper = mount(AboutView);
    const libraries = [
      'Pinia: Gerenciamento de estado simples e eficiente.',
      'Vue Router: Navegação otimizada entre páginas.',
      'Vue I18n e i18n: Suporte multilíngue, permitindo que a aplicação alcance usuários de diferentes locais e idiomas.',
      'Sass: Estilização avançada com suporte a variáveis e mixins.',
    ];
    libraries.forEach((library) => {
      expect(wrapper.text()).toContain(library);
    });
  });

  it('deverá renderizar os links corretamente', () => {
    const wrapper = mount(AboutView, {
      global: {
        mocks: {
          donateUrl: 'https://example.com/donate',
          repositorioUrl: 'https://github.com/meu-repositorio-mock',
        },
      },
    });

    const donateLink = wrapper.find('a[href="https://example.com/donate"]');
    const repoLink = wrapper.find('a[href="https://github.com/meu-repositorio-mock"]');

    expect(donateLink.exists()).toBe(true);
    expect(repoLink.exists()).toBe(true);
  });
});
