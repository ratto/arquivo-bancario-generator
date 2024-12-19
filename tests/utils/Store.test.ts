import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { createPinia, setActivePinia } from 'pinia';
import { useConfigStore } from './../../src/utils/Store';

describe('Store test suite', () => {
  let store;

  beforeEach(() => {
    setActivePinia(createPinia());
    store = useConfigStore();
  });

  afterEach(() => {
    store.$dispose();
  });

  it('should initialize with the correct default state', () => {
    expect(store.drawerOpen).toBe(false);
  });

  it('should return the correct state value from the getter', () => {
    expect(store.drawerStatus).toBe(false);

    store.drawerOpen = true;

    expect(store.drawerStatus).toBe(true);
  });

  it('should toggle drawer state with the toggleDrawer action', () => {
    expect(store.drawerOpen).toBe(false);

    store.toggleDrawer();

    expect(store.drawerOpen).toBe(true);

    store.toggleDrawer();

    expect(store.drawerOpen).toBe(false);
  });
});
