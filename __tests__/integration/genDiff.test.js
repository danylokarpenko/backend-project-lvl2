import { readFileSync } from 'fs';
import { trim } from 'lodash';
import genDiff from '../../src/';


const expacted = trim(readFileSync('./__tests__/__fixtures__/expacted/flatJson.diff', 'utf8'));
describe('Plain json', () => {
  test('Must compare', () => {
    const data = genDiff(
      './__tests__/__fixtures__/compareFiles/before.json',
      './__tests__/__fixtures__/compareFiles/after.json'
    );
    expect(data).toBe(expacted);
  });

  test('Must be wrong', () => {
    const data = genDiff(
      './__tests__/__fixtures__/compareFiles/before.json',
      './__tests__/__fixtures__/compareFiles/before.json'
    );
    expect(data).not.toBe(expacted);
  });
});
