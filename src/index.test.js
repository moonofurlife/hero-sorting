import { sortHeroes } from './index';

const input = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

const output = [
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
  { name: 'мечник', health: 10 },
];

test('should sort heroes by health', () => {
  expect(sortHeroes(input)).toEqual(output);
});

test('should not use toBe for objects', () => {
  expect(sortHeroes(input)).not.toBe(output);
});
