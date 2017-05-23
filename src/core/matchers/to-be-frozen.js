/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2014-2017 Mickael Jeanroy
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

import {pp} from '../jasmine/pp.js';
import {isFrozen} from '../util/is-frozen.js';

/**
 * Check that the tested value is a frozen object.
 *
 * Note that this matcher assume that a primitve object (`null`, `undefined,  ``number`, `string`
 * or `boolean`) is a frozen object (according to the ES2015 specification).
 *
 * *Important*: if the browser does not support `Object.isFrozen` (such as IE8), the object
 * will be considered as *not* frozen except for primitive object.
 *
 * @message Expect [actual] (not) to be frozen
 * @example
 *   expect(0).toBeFrozen();
 *   expect('').toBeFrozen();
 *   expect(true).toBeFrozen();
 *   expect(null).toBeFrozen();
 *   expect(undefined).toBeFrozen();
 *   expect(Object.freeze({id: 1})).toBeFrozen();
 *   expect({id: 1}).not.toBeFrozen();
 *   expect([]).not.toBeFrozen();
 *
 * @param {Object} ctx Test context.
 * @return {Object} The test result.
 * @since 0.5.0
 */
export function toBeFrozen({actual}) {
  return {
    pass: isFrozen(actual),
    message: `Expect ${pp(actual)} {{not}} to be frozen`,
  };
}
