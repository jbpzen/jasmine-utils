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
import {pp} from 'src/core/jasmine/pp.js';
import {toBeFrozen} from 'src/core/matchers/to-be-frozen.js';

describe('toBeFrozen', () => {
  it('should check that number object is frozen', () => {
    const actual = 0;
    const result = toBeFrozen({actual});
    expect(result).toEqual({
      pass: true,
      message: `Expect 0 {{not}} to be frozen`,
    });
  });

  it('should check that string object is frozen', () => {
    const actual = '';
    const result = toBeFrozen({actual});
    expect(result).toEqual({
      pass: true,
      message: `Expect '' {{not}} to be frozen`,
    });
  });

  it('should check that null is frozen', () => {
    const actual = null;
    const result = toBeFrozen({actual});
    expect(result).toEqual({
      pass: true,
      message: `Expect null {{not}} to be frozen`,
    });
  });

  it('should check that undefined is frozen', () => {
    const actual = undefined;
    const result = toBeFrozen({actual});
    expect(result).toEqual({
      pass: true,
      message: `Expect undefined {{not}} to be frozen`,
    });
  });

  /*
  it('should check that result of Object.freeze is frozen', () => {
    assumeIsFrozen();

    const actual = Object.freeze({id: 1});
    const result = toBeFrozen({actual});
    expect(result).toEqual({
      pass: true,
      message: `Expect Object({ id: 1 }) {{not}} to be frozen`,
    });
  });
  */

  it('should check that simple object is not frozen', () => {
    assumeIsFrozen();

    const actual = {id: 1};
    const result = toBeFrozen({actual});
    expect(result).toEqual({
      pass: false,
      message: `Expect Object({ id: 1 }) {{not}} to be frozen`,
    });
  });

  it('should check that simple array is not frozen', () => {
    assumeIsFrozen();

    const actual = [];
    const result = toBeFrozen({actual});
    expect(result).toEqual({
      pass: false,
      message: `Expect [  ] {{not}} to be frozen`,
    });
  });

  it('should check that simple map is not frozen', () => {
    assumeIsFrozen();
    assumeMap();

    const actual = new Map();
    const result = toBeFrozen({actual});
    expect(result).toEqual({
      pass: false,
      message: `Expect ${pp(actual)} {{not}} to be frozen`,
    });
  });

  it('should check that simple set is not frozen', () => {
    assumeIsFrozen();
    assumeSet();

    const actual = new Set();
    const result = toBeFrozen({actual});
    expect(result).toEqual({
      pass: false,
      message: `Expect ${pp(actual)} {{not}} to be frozen`,
    });
  });
});
