const isCousins = require('./index')

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

test('isCousins exists', () => {
  expect(isCousins).toBeDefined()
});

test('isCousins handles empty BTs', () => {
  expect(isCousins([])).toEqual(false)
});

describe('isCousins works on Tree 1', () => {
  let arrOne = [1,2,3,4]
  let BT;

  beforeEach(()=> {
    BT = deserialize(arrOne)
  })

  test('isCousins returns false if two nodes are not cousins', () => {
    expect(isCousins(BT, 4, 3)).toEqual(false)
  });
})

describe('isCousins works on Tree 1', () => {
  let arrTwo = [1,2,3,null,4,null,5]
  let BT;

  beforeEach(()=> {
    BT = deserialize(arrTwo)
  })

  test('isCousins returns true if two nodes are cousins', () => {
    expect(isCousins(BT, 5, 4)).toEqual(true)
  });
})
