var EventEmitter = require('event-emitter')
  , expect = require('chai').expect;

describe('Event emitter:', function() {

  it('should emit event once', function(done) {
    var ee = new EventEmitter();
    var evt = 'event';
    function onEvent(str, num){
      expect(str).to.eql('foo');
      expect(num).to.eql(16);
      expect(this.listeners(evt).length).to.eql(0);
      done();
    }

    // chainable
    expect(ee.once(evt, onEvent)).to.equal(ee);
    ee.emit(evt, 'foo', 16);
  });

});
