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

import {assumeIsFrozen} from '../detect/assume-is-frozen.js';
import {assumeMap} from '../detect/assume-map.js';
import {assumeSet} from '../detect/assume-set.js';
import {isFrozen} from 'src/core/util/is-frozen.js';

describe('isFrozen', () => {
  it('should return true with a primitive object', () => {
    expect(isFrozen(null)).toBe(true);
    expect(isFrozen(undefined)).toBe(true);
    expect(isFrozen('')).toBe(true);
    expect(isFrozen(0)).toBe(true);
    expect(isFrozen(true)).toBe(true);
  });

  /*
  it('should return true with a frozen object', () => {
    assumeIsFrozen();

    const o = Object.freeze({id: 1});
    expect(isFrozen(o)).toBe(true);
  });
  */

  it('should return true with a non frozen object', () => {
    assumeIsFrozen();

    expect(isFrozen({})).toBe(false);
    expect(isFrozen([])).toBe(false);
  });

  it('should return false with a non frozen map', () => {
    assumeIsFrozen();
    assumeMap();
    expect(isFrozen(new Map())).toBe(false);
  });

  it('should return false with a non frozen set', () => {
    assumeIsFrozen();
    assumeSet();
    expect(isFrozen(new Set())).toBe(false);
  });
});
