import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import ArquivoView from '../../src/views/ArquivoView.vue';

describe('ArquivoView.vue', () => {
  it('deverá renderizar a view corretamente', () => {
    const wrapper = mount(ArquivoView);

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('h1').text()).toBe('Arquivos de Retorno');
  });
});
