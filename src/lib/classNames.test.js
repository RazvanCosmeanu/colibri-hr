import classNames from './classNames';

const stringFixture = 'classname';
const numberFixture = 42069;
const truthyKeyObjectFixture = { truthyClass: true };
const falseyKeyObjectFixture = { falseyClass: false };

describe('classNames', () => {
  it('should return the concatenated args if they are strings or numbers', () => {
    expect(classNames(stringFixture, numberFixture)).toBe(
      `${stringFixture} ${numberFixture}`,
    );
  });

  it('should ignore null or undefined args', () => {
    expect(classNames(null, undefined, stringFixture)).toBe(stringFixture);
  });

  it('if args are objects, their keys should be appended to the classname if their values are truthy', () => {
    expect(
      classNames(stringFixture, truthyKeyObjectFixture, falseyKeyObjectFixture),
    ).toBe(`${stringFixture} truthyClass`);
  });
});
