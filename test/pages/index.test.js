import React from 'react'
import Home from '../../pages/index'

test('xkcd', () => {
  return fetchData().then(data => {
    expect(data).toBe('xkcd');
  });
});