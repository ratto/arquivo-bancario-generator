import { describe, test, expect } from 'vitest';
import { routes } from '../../src/views/routes';

describe('Testes para o arquivo routes.ts', () => {
  const sut = routes;

  test.each([
    {
      routePath: '/',
      routeName: 'home',
      componentName: 'HomeView',
    },
    {
      routePath: '/sobre',
      routeName: 'sobre',
      componentName: 'AboutView',
    },
    {
      routePath: '/form-arquivo',
      routeName: 'arquivo',
      componentName: 'ArquivoView',
    },
  ])('deverá conter a rota $routeName corretamente configurada', ({ routePath, routeName, componentName }) => {
    const testRoute = sut.find((route) => route.name === routeName);

    expect(testRoute).toBeDefined();
    expect(testRoute?.path).toBe(routePath);
    expect(testRoute?.component.__name).toBe(componentName);
  });

  test('deverá conter a rota de erro para catchAll corretamente configurada', () => {
    const errorRoute = routes.find((route) => route.path === '/:catchAll(.*)');

    expect(errorRoute).toBeDefined();
    expect(errorRoute?.name).toBe('erro');
  });

  test('deverá conter exatamente 4 rotas', () => {
    expect(routes.length).toBe(4);
  });
});
