import mostrarPokemon from '../pokemon.js';
import fixture from '../../__tests__/pokedex.fixture.js';
import pokemon from '../../../cypress/fixtures/bulbasaur.json';

test('muestra un pokemon', () => {
  document.body.innerHTML = fixture;
  mostrarPokemon(pokemon);
  expect(document.querySelector('#pokemon-nombre').textContent).toBe(
    pokemon.name
  );
  expect(document.querySelector('#pokemon-id').textContent).toBe(
    pokemon.id.toString()
  );
  expect(document.querySelector('#pokemon-imagen').src).toBe(
    pokemon.sprites.front_default
  );
  expect(document.querySelector('#tipos').childElementCount).toBe(
    pokemon.types.length
  );
  expect(document.querySelector('#habilidades').childElementCount).toBe(
    pokemon.abilities.length
  );
  expect(document.querySelector('#movimientos').childElementCount).toBe(
    pokemon.moves.length
  );
});
