/*  _  _  _  _  _  _     _                                                                                 _          
   (_)(_)(_)(_)(_)(_)   (_)                                                                               (_)         
   (_)          _  _    (_) _  _  _       _  _  _     _  _  _  _      _  _  _        _  _  _   _  _  _  _  _          
   (_) _  _    (_)(_)   (_)(_)(_)(_)_  _ (_)(_)(_) _ (_)(_)(_)(_)_   (_)(_)(_) _   _(_)(_)(_)_(_)(_)(_)(_)(_)         
   (_)(_)(_)      (_)   (_)        (_)(_)         (_)(_)        (_)   _  _  _ (_) (_)       (_)           (_)         
   (_)            (_)   (_)        (_)(_)         (_)(_)        (_) _(_)(_)(_)(_) (_)       (_)           (_)         
   (_)          _ (_) _ (_) _  _  _(_)(_) _  _  _ (_)(_)        (_)(_)_  _  _ (_)_(_)_  _  _(_)_  _  _  _ (_) _       
   (_)         (_)(_)(_)(_)(_)(_)(_)     (_)(_)(_)   (_)        (_)  (_)(_)(_)  (_) (_)(_)(_) (_)(_)(_)(_)(_)(_)                                                                                                                            
*/

/**
 * Genera la secuencia de fibonacci
 * dado el limite, utilizando while loop
 * @param {number} limit limite de la secuencia
 * @returns {Array<number>} secuencia de Fibonacci
 */
function fibonacciSequenceWithWhile(limit) {
  const sequence = [0, 1];

  while (sequence.length <= limit) {
    sequence.push(
      sequence[sequence.length - 1] + sequence[sequence.length - 2]
    );
  }

  return sequence;
}
fibonacciSequenceWithWhile(5); // [0, 1, 1, 2, 3, 5]

/**
 * Genera la secuencia de fibonacci
 * dado el limite, utilizando for loop
 * @param {number} limit limite de la secuencia
 * @returns {Array<number>} secuencia de Fibonacci
 */
function fibonacciSequenceWithFor(limit) {
  const sequence = [0, 1];

  for (let i = 2; i <= limit; i++) {
    sequence[i] = sequence[sequence.length - 1] + sequence[sequence.length - 2];
  }

  return sequence;
}
fibonacciSequenceWithFor(5); // [0, 1, 1, 2, 3, 5]
console.log(fibonacciSequenceWithWhile(5));
console.log(fibonacciSequenceWithFor(15).length);

/**
 * Obtener el numero de la serie de fibonacci
 * segun el numero proporcionado
 * @param {*} n valor para identificar el numero de la serie
 * @returns {number} numero de fibonacci segun el indice
 */
const fibonacciWithRecursivity = (n) => {
  if (n < 2) return n;
  return fibonacciWithRecursivity(n - 2) + fibonacciWithRecursivity(n - 1);
};

console.log(fibonacciWithRecursivity(5)); // 5
