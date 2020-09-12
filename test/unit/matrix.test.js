import { assertEquals } from 'https://deno.land/std/testing/asserts.ts';
 
import { transpose } from '../../helper/matrix.js';
 
Deno.test('transpose matrix', () => {
 
  const expectedTransposeMatrix = [
    [1,4,7],
    [2,5,8],
    [3,6,9]
  ]

  const matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ]
  assertEquals(transpose(matrix), expectedTransposeMatrix);
});