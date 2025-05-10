import { describe, expect, test, vi } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import App from '../src/App.vue';

describe('App.vue test suite', () => {
  const sut = App;

  test('renders the component correctly', () => {
    const wrapper = shallowMount(sut);

    expect(wrapper.exists()).toBe(true);
  });
});
