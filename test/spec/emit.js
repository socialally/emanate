var EventEmitter = require('event-emitter')
  , expect = require('chai').expect;

describe('Event emitter:', function() {

  it('should emit event', function(done) {
    var ee = new EventEmitter();
    var evt = 'event';
    function onEvent(str, num){
      expect(str).to.eql('foo');
      expect(num).to.eql(16);
      ee.removeAllListeners();
      done();
    }
    // chainable
    expect(ee.on(evt, onEvent)).to.equal(ee);
    expect(ee.emit(evt, 'foo', 16)).to.eql(true);
  });

  it('should ignore non-existent even (emit)', function(done) {
    var ee = new EventEmitter();
    function onEvent(){}
    ee.emit('missing');
    done();
  });

});
