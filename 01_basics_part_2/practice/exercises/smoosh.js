/**
 * Задача 1: написать функцию smoosh, которая принимает массив, "выравнивает" вложенные массивы
 * в одноуровневый массив и возвращает новый плоский массив.
 * Например:
 * smoosh([1, 2, [3, 4], 5])
 * > [1, 2, 3, 4, 5]
 * Входной массив может содержать массивы любого уровня вложенности.
 * Например: [[1, 2], [3, [4, [5]]]]
 *
 * Задача 2: написать функцию squeeze (по аналогии со smoosh) таким образом,
 * чтобы она модифицировала исходный массив, а не возвращала новый.
 *
 * Задача 3*: для функций smoosh и squeeze добавить валидацию входного параметра.
 * В случае, если на вход передан не массив функция должна выбросить исключение
 * с сообщением 'argument should be an array'.
 */

function smoosh(array) {
  let resultArray = [];

  if (!Array.isArray(array)) {
    throw new Error('argument should be an array');
  }

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      resultArray = resultArray.concat(smoosh(array[i]));
    } else {
      resultArray.push(array[i]);
    }
  }

  return resultArray;
}

function squeeze(array) {
  let cacheArray = smoosh(array);

  for (let i = 0; i < cacheArray.length; i++) {
    array[i] = cacheArray[i];
  }

  return array;
}

export { smoosh, squeeze };
