/* eslint-disable no-undef */
const orderTotal = require('./order-total');

const emptyFunction = () => {};

it('calls API correctly', () => {
  let isFakeFetchCalled = false;
  const fakeFetch = (url) => {
    expect(url).toBe('https://api.openweathermap.org/geo/1.0/direct')
    isFakeFetchCalled = true;
  };
  orderTotal(fakeFetch, {
    country: 'DE',
    items: [{ name: 'Dragon waffles', price: 20, quantity: 2 }],
  }).then((result) => {
    expect(isFakeFetchCalled).toBe(true);
  });
});

it('Quantity', () =>
  orderTotal(emptyFunction, {
    items: [{ name: 'Dragon candy', price: 2, quantity: 3 }],
  }).then((result) => expect(result).toBe(6)));

it('No quantity specified', () =>
  orderTotal(emptyFunction, {
    items: [{ name: 'Dragon candy', price: 3 }],
  }).then((result) => expect(result).toBe(3)));

it('Happy path (Example 1)', () =>
  orderTotal(emptyFunction, {
    items: [
      { name: 'Dragon food', price: 8, quantity: 1 },
      { name: 'Dragon cage (small)', price: 800, quantity: 1 },
    ],
  }).then((result) => expect(result).toBe(808)));

it('Happy path (Example 2)', () =>
  orderTotal(emptyFunction, {
    items: [
      { name: 'Dragon collar', price: 20, quantity: 1 },
      { name: 'Dragon chew toy', price: 40, quantity: 1 },
    ],
  }).then((result) => expect(result).toBe(60)));
