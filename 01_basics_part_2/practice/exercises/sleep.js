/**
 * Задание: написать функцию sleep, которая приостанавливает работу потока на
 * время переданное в аргументе. Время задаётся в секундах с точностью до 1 сек.
 * Если передан не валидный аргумент функция должна сразу завершить своё
 * выполнение и вернуть undefined.
 */

export default function sleep(sec) {
  if (typeof sec !== "number" || sec % 1 !== 0 || sec < 0) {
    return undefined;
  }

  let cache = 0;
  let delay = Date.now() + sec * 1000;

  while (delay > cache) {
    let timeNow = Date.now();

    if (delay === timeNow) {
      return;
    }

    cache++;
  }
}
