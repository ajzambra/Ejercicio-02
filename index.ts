import './style.css';

const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>Calculadora</h1>`;

document.getElementById('sumar').addEventListener('click', () => {
  /**
   *  Actividades:
   *    Cambie el tipo unknown por HTMLInputElement
   *
   *  Referencia:
   *
   *    What is a type in TypeScript
   *    https://www.typescripttutorial.net/typescript-tutorial/typescript-types/
   *
   *    Type casting using the as keyword
   *    https://www.typescripttutorial.net/typescript-tutorial/type-casting/
   */

  let elemento1: unknown = document.getElementById('numero1') as unknown;
  let elemento2: unknown = document.getElementById('numero2') as unknown;

  /*
   *
   *  Actividades:
   *    Cambie el tipo unknown por number.
   *    Utilice la función parseInt para convertir a número cada valor de elemento1 y elemento2.
   *
   *  Referencia:
   *
   *    The number type
   *    https://www.typescripttutorial.net/typescript-tutorial/typescript-number/
   */

  let numero1: unknown = elemento1.value;

  let numero2: unknown = elemento2.value;

  let resultado = numero1 + numero2;

  document.getElementById('resultado').innerText =
    'El resultado de la suma es: ' + resultado.toString();
});
