var EventEmitter = require('event-emitter')
  , expect = require('chai').expect;

describe('Event emitter:', function() {
  var ee = new EventEmitter();
  function onEvent(){}

  it('should remove all listeners', function(done) {
    var evt = 'event';
    ee.on(evt, onEvent);
    ee.removeAllListeners(evt);
    expect(ee._events[evt]).to.be.an('array')
    expect(ee._events[evt].length).to.be.eql(0);
    done();
  });

});

