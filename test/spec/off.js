var EventEmitter = require('event-emitter')
  , expect = require('chai').expect;

describe('Event emitter:', function() {

  it('should remove listener', function(done) {
    var ee = new EventEmitter();
    function onEvent(){}

    var evt = 'event';
    ee.on(evt, onEvent);

    // chainable
    expect(ee.off(evt, onEvent)).to.equal(ee);

    expect(ee._events[evt]).to.be.an('array')
    expect(ee._events[evt].length).to.be.eql(0);
    done();
  });

  it('should ignore non-existent listener', function(done) {
    var ee = new EventEmitter();
    function onEvent(){}

    var evt = 'event';

    // chainable
    expect(ee.off(evt, onEvent)).to.equal(ee);

    expect(ee._events[evt]).to.eql(undefined);
    done();
  });

});
