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
import {isArray} from '../util/is-array.js';
import {isTruthy} from '../util/is-truthy.js';
import {every} from '../util/every.js';

/**
 * Check that the tested object contains only truthy values.
 * The tested object may be an array or any iterable object (i.e that can be
 * traversed with the `for..of` loop).
 *
 * Note that this matcher works fine with custom equality matchers.
 *
 * @message Expect [actual] (not) to contains only truthy values.
 * @example
 *   expect([1, 2, true, 'foo', {}, []]).toContainsOnlyTruthyValues();
 *
 *   expect([1, 2, false, 'foo', {}, []]).not.toContainsOnlyTruthyValues();
 *   expect([1, 2, true, '', {}, []]).not.toContainsOnlyTruthyValues();
 *   expect([0, 2, true, 'foo', {}, []]).not.toContainsOnlyTruthyValues();
 *
 * @param {Object} ctx Test context.
 * @return {Object} Test result.
 * @since 0.1.0
 */
export function toContainsOnlyTruthyValues(ctx) {
  const actual = ctx.actual;
  return {
    pass: isArray(actual) && every(actual, isTruthy),
    message: `Expect ${pp(actual)} {{not}} to contains only truthy values`,
  };
}
