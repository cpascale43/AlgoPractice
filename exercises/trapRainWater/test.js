const trapRainWater = require('./index')

test('trapRainWater exists', () => {
  expect(trapRainWater).toBeDefined()
});

test('trapRainWater works on an empty array', () => {
  expect(trapRainWater([])).toEqual(0)
});

test('trapRainWater works on an elevation map with some water', () => {
  expect(trapRainWater([0,1,0,2,1,0,1,3,2,1,2,1])).toEqual(6)
});

test('trapRainWater works on an elevation map with a lot of water', () => {
  expect(trapRainWater([100000, 0, 2000, 4, 80, 3, 124, 5])).toEqual(2285)
});

test('trapRainWater works on an elevation map with no water', () => {
  expect(trapRainWater([0, 2, 0])).toEqual(0)
});
