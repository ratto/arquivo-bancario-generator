import { describe, expect, it, vi } from 'vitest';
import { router } from '../src/router';

vi.mock('../src/views/routes', () => ({
  routes: [
    { path: '/foo', name: 'foo', component: { template: '<div>Foo</div>' } },
    { path: '/bar', name: 'bar', component: { template: '<div>Bar</div>' } },
  ],
}));

describe('router suite', () => {
  it('should create a router instance with the correct routes', () => {
    const sut = router;

    expect(sut).toBeDefined();
    expect(router.options.routes).toEqual([
      { path: '/foo', name: 'foo', component: { template: '<div>Foo</div>' } },
      { path: '/bar', name: 'bar', component: { template: '<div>Bar</div>' } },
    ]);
  });
});
