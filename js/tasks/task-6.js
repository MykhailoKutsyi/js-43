// todo Example 6 - Методы строк и чейнинг
/*
 * Напиши скрипт который рассчитывает индекс массы тела человека. Для этого необходимо разделить вес в килограммах на квадрат высоты человека в метрах.

 * Вес и высота хранятся в переменных weight и height, но не как числа, а в виде строк (специально для задачи). Нецелые числа могут быть заданы в виде 24.7 или 24,7, то есть в качестве разделителя дробной части может быть запятая.

* Индекс массы тела необходимо округлить до одной цифры после запятой;

 */

const weight = '88,3';
const height = '1.75';

const weightNormalized = weight.replace(',', '.');
const heightNormalized = height.replace(',', '.');

// const bmi = weightNormalized / (heightNormalized * heightNormalized);
const bmi = weightNormalized / (Math.pow(heightNormalized, 2));

console.log(bmi.toFixed(1)); // 28.8
