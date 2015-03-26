var EventEmitter = require('event-emitter')
  , expect = require('chai').expect;

describe('Event emitter:', function() {
  var ee = new EventEmitter();

  it('should emit event', function(done) {
    var evt = 'event';
    function onEvent(str, num){
      expect(str).to.eql('foo');
      expect(num).to.eql(16);
      ee.removeAllListeners();
      done();
    }

    // chainable
    expect(ee.on(evt, onEvent)).to.equal(ee);
    ee.emit(evt, 'foo', 16);
  });

});
