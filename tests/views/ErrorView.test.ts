import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import ErrorView from '../../src/views/ErrorView.vue';

describe('ErrorView.vue', () => {
  test('deverá renderizar a view corretamente', () => {
    const wrapper = mount(ErrorView);

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('h1').text()).toBe('Erro');
  });
});
