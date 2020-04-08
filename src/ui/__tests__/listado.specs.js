import {
  actualizarTextoIndicePokemones,
  mostrarListadoPokemones,
} from '../listado.js';
import listadoFixture from '../../../cypress/fixtures/listado-pagina-1.json';

test('actualiza el texto indice de polemones', () => {
  document.body.innerHTML = '<div id="indice"></div>';
  actualizarTextoIndicePokemones('test');
  expect(document.querySelector('#indice').textContent).toContain('test');
});

test('muestra el listado de pokemones', () => {
  document.body.innerHTML = '<div id="indice"></div>';
  const mockCallback = jest.fn(() => {});
  mostrarListadoPokemones(listadoFixture.results, mockCallback);
  expect(document.querySelector('#indice').childElementCount).toBe(
    listadoFixture.results.length
  );
  document.querySelector('#indice').children[3].click();
  expect(mockCallback.mock.calls.length).toBe(1);
});
