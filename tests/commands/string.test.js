import faker from 'faker';

import { executeCli } from '../common';
import {
  TYPE_ASCII,
  TYPE_NUMBERS,
  TYPE_LETTERS,
  TYPE_EXTENDED,
  TYPE_BASE_64,
  TYPE_HEX,
} from '../../src/constants';
import {
  asciiRegex,
  numbersRegex,
  lettersRegex,
  extendedRegex,
  base64Regex,
  hexRegex,
} from '../common/regex';

describe('String Command Unit Test', () => {
  test('all options are optional', async () => {
    const result = await executeCli('string');
    expect(result).toBeString();
    expect(result).not.toBeEmpty();
  });

  test('length', async () => {
    const length = faker.random.number({ min: 5, max: 25 });
    const result = await executeCli(`string -l ${length}`);

    expect(result).toBeString();
    expect(result).toHaveLength(length);
  });

  describe('type', () => {
    const assertTypeMatchesRegex = async (type, regex) => {
      const result = await executeCli(`string -t ${type}`);
      expect(result).toMatch(regex);
      return result;
    };

    test('ASCII', async () => {
      await assertTypeMatchesRegex(TYPE_ASCII, asciiRegex);
    });

    test('Numbers', async () => {
      await assertTypeMatchesRegex(TYPE_NUMBERS, numbersRegex);
    });

    test('Letters', async () => {
      await assertTypeMatchesRegex(TYPE_LETTERS, lettersRegex);
    });

    test('Extended', async () => {
      await assertTypeMatchesRegex(TYPE_EXTENDED, extendedRegex);
    });

    test('Base64', async () => {
      const result = await assertTypeMatchesRegex(TYPE_BASE_64, base64Regex);

      // Valid base64 string's length is always divisible by 4
      expect(result.length % 4).toEqual(0);
    });

    test('Hex', async () => {
      await assertTypeMatchesRegex(TYPE_HEX, hexRegex);
    });
  });
});
