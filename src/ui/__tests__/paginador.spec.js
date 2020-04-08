import mostrarPaginador from '../paginador.js';

test('muestra el paginador en la pagina 3', () => {
  document.body.innerHTML = '<div id="paginador"></div>';
  const mockCallback = jest.fn(() => {});
  mostrarPaginador(400, 3, '#', '#', mockCallback);
  const expectedItems = 400 / 20 + 2;
  expect(document.querySelector('#paginador').childElementCount).toBe(
    expectedItems
  );
  expect(document.querySelector('#paginador').children[3].classList).toContain(
    'active'
  );
  document.querySelector('#paginador').children[3].click();
  expect(mockCallback.mock.calls.length).toBe(1);
});

test('muestra el paginador, comprueba la clase del boton anterior en la primer pagina', () => {
  document.body.innerHTML = '<div id="paginador"></div>';
  mostrarPaginador(400, 1, '#', false);
  const expectedItems = 400 / 20 + 2;
  expect(document.querySelector('#paginador').childElementCount).toBe(
    expectedItems
  );
  expect(document.querySelector('#paginador').children[0].classList).toContain(
    'disabled'
  );
});

test('muestra el paginador,comprueba la clase del boton siguiente en la ultima pagina', () => {
  document.body.innerHTML = '<div id="paginador"></div>';
  mostrarPaginador(400, 21, false, '#');
  const expectedItems = 400 / 20 + 2;
  expect(document.querySelector('#paginador').childElementCount).toBe(
    expectedItems
  );
  expect(document.querySelector('#paginador').lastChild.classList).toContain(
    'disabled'
  );
});
