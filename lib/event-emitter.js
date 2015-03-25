'use strict';

var EventEmitter = function() {}

var proto = EventEmitter.prototype;

/**
 *  Add a listener for an event.
 *
 *  @param event The event name.
 *  @param listener The event listener function.
 */
function addListener(event, listener) {
  this._events = this._events || {};
  this._events[event] = this._events[event] || [];
  this._events[event].push(listener);
  return this;
}

/**
 *  Registers a listener to be invoked once.
 *
 *  @param event The event name.
 *  @param listener The listener function.
 */
function once(event, listener) {
  function g() {
    this.removeListener(event, g);
    listener.apply(this, arguments);
  }
  g.listener = listener;
  this.on(event, g);
  return this;
}

/**
 *  Remove all listeners for an event.
 *
 *  @param event The event name.
 */
function removeAllListeners(event) {
  if(event) {
    this._events[event] = [];
  }else{
    this._events = {};
  }
  return this;
}

/**
 *  Remove a listener for an event.
 *
 *  @param event The event name.
 *  @param listener The event listener function.
 */
function removeListener(event, listener) {
  this._events = this._events || {};
  if(event in this._events === false) {
    return this;
  }
  this._events[event].splice(this._events[event].indexOf(listener), 1);
  return this;
}

/**
 *  Returns an array of listeners for the specified event.
 */
function listeners(event) {
  this._events = this._events || {};
  return this._events[event] || [];
}

/**
 *  Execute each of the listeners in order with the supplied arguments.
 *
 *  Returns true if event had listeners, false otherwise.
 *
 *  @param event The event name.
 *  @param args... The arguments to pass to event listeners.
 */
function emit(event /* , args... */) {
  this._events = this._events || {};
  var list = this._events[event] || [];
  for(var i = 0; i < listeners.length; i++){
    list[i].apply(this, Array.prototype.slice.call(arguments, 1))
  }
  return list.length > 0;
}

proto.addListener = addListener;
proto.removeAllListeners = removeAllListeners;
proto.removeListener = removeListener;
proto.listeners = listeners;
proto.emit = emit;
// jquery style alias: one()
proto.once = proto.one = once;

// aliases
proto.on = proto.addListener;
proto.off = proto.removeListener;

module.exports = EventEmitter;
