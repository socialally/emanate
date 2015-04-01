## EventEmitter

The event emitter class is the base class that provides event dispatching. It is designed to mimic the [node event emitter](http://nodejs.org/api/events.html#events_class_events_eventemitter).

### Methods

#### emitter.addListener(event, listener)

Adds a listener to the end of the listeners array for the specified event.

Returns emitter, so calls can be chained.

Aliased via the `on` method.

#### emitter.removeListener(event, listener)

Remove a listener from the listener array for the specified event. Caution: changes array indices in the listener array behind the listener.

Returns emitter, so calls can be chained.

Aliased via the `off` method.

#### emitter.once(event, listener)

Adds a one time listener for the event. This listener is invoked only the next time the event is fired, after which it is removed.

Returns emitter, so calls can be chained.

#### emitter.removeAllListeners([event])

Removes all listeners, or those of the specified event.

Returns emitter, so calls can be chained.

#### emitter.listeners(event)

Returns an array of listeners for the specified event.

#### emitter.emit(event, [arg1], [arg2], [...])

Execute each of the listeners in order with the supplied arguments.

Returns true if event had listeners, false otherwise.
