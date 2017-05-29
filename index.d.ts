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

type CustomDate = Date | number | string;
type MatcherResult = boolean;

interface PredicateFunction<T> {
  (current: T, index?: number, collection?: T[]);
}

interface SortFunction<T> {
  (o1: T, o2: T);
}

interface ArrayLike {
  length: number;
}

// Extend the `jasmine` namespace with:
// - New custom matchers.
// - New spy utilities (spyAll, etc.).
declare namespace jasmine {
  function spyIf(obj: any, methodName: string): jasmine.Spy;

  function spyAll(obj: any): void;
  function spyAllExcept(obj: any, excepts: string | string[]): void;
  function spyEach(obj: any, excepts: string | string[]): void;

  function resetAll(obj: any): void;
  function resetAllExcept(obj: any, excepts: string | string[]): void;
  function resetEach(obj: any, excepts: string | string[]): void;

  interface Matchers<T> {
    // Types
    toBeABoolean(): MatcherResult;
    toBeADate(): MatcherResult;
    toBeAFunction(): MatcherResult;
    toBeAMap(): MatcherResult;
    toBeANumber(): MatcherResult;
    toBeASet(): MatcherResult;
    toBeAnArray(): MatcherResult;
    toBeAString(): MatcherResult;
    toBeNil(): MatcherResult;
    toBeNull(): MatcherResult;
    toBeIterable(): MatcherResult;

    // Any
    toBeInstanceOf(expected: any): MatcherResult;
    toBeEmpty(): MatcherResult;
    toBeOneOf(expected: any[]): MatcherResult;
    toEqualOneOf(expected: any[]): MatcherResult;
    toHaveSize(size: number): MatcherResult;
    toHaveSameSizeAs(obj: any): MatcherResult;

    // Strings
    toBeAnEmptyString(): MatcherResult;
    toEndWith(suffix: string): MatcherResult;
    toStartWith(prefix: string): MatcherResult;
    toEqualIgnoringCase(expected: string): MatcherResult;

    // Numbers
    toBeEvenNumber(): MatcherResult;
    toBeOddNumber(): MatcherResult;
    toBeFloat(): MatcherResult;
    toBeInRange(lower: number, upper: number): MatcherResult;
    toBeInteger(): MatcherResult;
    toBeNegative(): MatcherResult;
    toBePositive(): MatcherResult;
    toBeZero(): MatcherResult;
    toBeNumeric(): MatcherResult;

    // Booleans
    toBeTrue(): MatcherResult;
    toBeFalse(): MatcherResult;

    // Arrays & Collections
    toContainsDistinctValues(): MatcherResult;
    toContainsOnlyFalsyValues(): MatcherResult;
    toContainsOnlyTruthyValues(): MatcherResult;
    toVerify(msg: string, predicate: PredicateFunction<T>): MatcherResult;
    toHaveSome(msg: string, predicate: PredicateFunction<T>): MatcherResult;
    toHaveLength(length: number): MatcherResult;
    toHaveSameLengthAs(collection: ArrayLike): MatcherResult;
    toBeSorted(sortFn?: SortFunction<T>): MatcherResult;

    // Objects
    toHaveKeys(...keys: string[]);
    toHaveValues(...values: any[]);
    toHaveFunctions(...keys: string[]);
    toBePartiallyEqualTo(expected: {[key: string]: any}): MatcherResult;

    // Dates
    toBeDateAfterNow(): MatcherResult;
    toBeDateBeforeNow(): MatcherResult;
    toBeDateCloseToNow(): MatcherResult;
    toBeDateAfter(lower: CustomDate): MatcherResult;
    toBeDateBefore(upper: CustomDate): MatcherResult;
    toBeDateCloseTo(date: CustomDate, max?: number): MatcherResult;
    toBeSameDay(date: CustomDate): MatcherResult;
    toBeToday(): MatcherResult;

    // DOM
    toBeDOMElement(): MatcherResult;
    toBeDOMElementWithId(id: string): MatcherResult;
    toBeDOMElementWithClasses(classes: string | string[]): MatcherResult;
    toBeDOMelementWithAttributes(attributes: {[name: string]: string}): MatcherResult;

    // Spies
    toHaveBeenCalledOnce(): MatcherResult;
    toHaveBeenCalledOnceWith(...params: any[]);
  }
}
