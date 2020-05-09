const sumOfLeftLeaves = require('./index');

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

const deserialize = function(data) {
  if (data.length === 0) {
      return null;
  }
  var root = new TreeNode(data[0]);
  var queue = [root];
  for (var i=1; i < data.length; i++) {
      var parent = queue.shift();

      if (data[i] !== null) {
          var left = new TreeNode(parseInt(data[i]));
          parent.left = left;
          queue.push(left);
      }
      if (data[++i] !== null && i !== data.length) {
          var right = new TreeNode(parseInt(data[i]));
          parent.right = right;
          queue.push(right);
      }
  }

  return root;
};

test('sumOfLeftLeaves exists', () => {
  expect(sumOfLeftLeaves).toBeDefined()
});

test('sumOfLeftLeaves handles empty BTs', () => {
  expect(sumOfLeftLeaves([])).toEqual(0)
});

describe('sumOfLeftLeaves works on Tree 1', () => {
  let arrOne = [3,9,20,null,null,15,7]
  let BT;

  beforeEach(()=> {
    BT = deserialize(arrOne)
  })

  test('sumOfLeftLeaves adds the left leaves', () => {
    expect(sumOfLeftLeaves(BT)).toEqual(24)
  });
})

describe('sumOfLeftLeaves works on Tree 2', () => {
  let arrTwo = [1,null,2,3]
  let BT;

  beforeEach(()=> {
    BT = deserialize(arrTwo)
  })

  test('sumOfLeftLeaves adds the left leaves', () => {
    expect(sumOfLeftLeaves(BT)).toEqual(3)
  });
})

describe('sumOfLeftLeaves works on Tree 3', () => {
  let arrThree = [5,4,7,3,null,2,null,-1,null,9]
  let BT;

  beforeEach(()=> {
    BT = deserialize(arrThree)
  })

  test('sumOfLeftLeaves adds the left leaves', () => {
    expect(sumOfLeftLeaves(BT)).toEqual(8)
  });
})
