export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

export function getRandomBox(number) {
  return Math.floor(Math.random() * (number - 0) + 0);
}

export const getRandomMonty = Math.ceil(Math.random() * (6 - 0) + 0) - 1;
