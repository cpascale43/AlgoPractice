// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  constructor() {
    // this.events = {
    //   'eventname1': ['callback1', 'callback2', 'callback3'],
    //   'eventname2': ['callback4']
    // }
    this.events = {};
  }
  // Register an event handler
  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    if (this.events[eventName]) {
      this.events[eventName].map(func => func())
    }
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    this.events[eventName] = [];
  }
}

module.exports = Events;
