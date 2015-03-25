var EventEmitter = require('../../lib/event-emitter')
  , expect = require('chai').expect;

function onEvent(){}

describe('Event emitter:', function() {
  var ee = new EventEmitter();

  it('should add listener', function(done) {
    var evt = 'event';
    ee.on(evt, onEvent);
    expect(ee._events[evt]).to.be.an('array')
    expect(ee._events[evt].length).to.be.eql(1);
    done();
  });

  it('should remove listener', function(done) {
    var evt = 'event';
    ee.off(evt, onEvent);
    expect(ee._events[evt]).to.be.an('array')
    expect(ee._events[evt].length).to.be.eql(0);
    done();
  });

  it('should remove all listeners', function(done) {
    var evt = 'event';
    ee.on(evt, onEvent);
    ee.removeAllListeners(evt);
    expect(ee._events[evt]).to.be.an('array')
    expect(ee._events[evt].length).to.be.eql(0);
    done();
  });
});
