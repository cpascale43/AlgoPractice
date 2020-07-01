// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
  // initialize both pointers at first element
  // then move fast forward n spaces
  // move slow and fast forward
  // ask is fast pointing at the last element of the list?
  // if no, move both forward one more time
  // if yes, as soon as fast is pointing at the last element,
  // that means slow must be n elements behind it and pointing at our answer

  let slow = list.getFirst();
  let fast = list.getFirst();

  while (n > 0) {
    fast = fast.next;
    n--;
  }

  while (fast.next) {
      slow = slow.next;
      fast = fast.next;
  }

  return slow;
}

module.exports = fromLast;
