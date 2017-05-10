/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2014-2017 Mickael Jeanroy <mickael.jeanroy@gmail.com>
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
import {isDOMElement} from '../util/is-dom-element.js';
import {isString} from '../util/is-string.js';
import {isNil} from '../util/is-nil.js';

/**
 * Check that the tested object is DOM element with an expected tag name.
 * The tag name is optional, if not set this matcher will juste check that the actual
 * object is a DOM element.
 *
 * @message
 *   Expect [actual] (not) to be a DOM element
 *   Expect [actual] (not) to be [tagName] element but was [actualTagName]
 *
 * @example
 *   const span = document.createElement('span');
 *   expect(span).toBeDOMElement();
 *   expect(span).toBeDOMElement('span');
 *   expect(span).toBeDOMElement('SPAN');
 *   expect(span).not.toBeDOMElement('div');
 *
 * @param {Object} ctx Test context.
 * @param {string} tagName Expected tag name (optional).
 * @return {Object} Test result.
 * @since 0.1.0
 */
export function toBeDOMElement(ctx, tagName) {
  const actual = ctx.actual;
  const isElement = isDOMElement(actual);

  let msg = `Expect ${pp(actual)} {{not}} to be a DOM element`;
  let ok = isElement;

  // Add more details to the message if it is appropriate.
  if (isString(tagName)) {
    msg = `Expect ${pp(actual)} {{not}} to be ${pp(tagName.toUpperCase())} element`;
    ok = ok && tagName.toUpperCase() === actual.tagName.toUpperCase();

    if (isElement) {
      msg += ` but was ${pp(actual.tagName.toUpperCase())}`;
    }
  } else {
    ok = ok && isNil(tagName);
  }

  return {
    pass: ok,
    message: msg,
  };
}
