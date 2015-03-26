var EventEmitter = require('event-emitter')
  , expect = require('chai').expect;

describe('Event emitter:', function() {
  var ee = new EventEmitter();
  function onEvent(){}

  it('should add listener', function(done) {
    var evt = 'event';

    // chainable
    expect(ee.on(evt, onEvent)).to.equal(ee);

    expect(ee.listeners(evt)).to.be.an('array')
    expect(ee.listeners(evt).length).to.be.eql(1);
    ee.removeAllListeners();
    done();
  });

});
