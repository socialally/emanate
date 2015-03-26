var EventEmitter = require('event-emitter')
  , expect = require('chai').expect;

describe('Event emitter:', function() {

  it('should return empty array (listeners)', function(done) {
    var ee = new EventEmitter();
    expect(ee.listeners('missing')).to.eql([]);
    done();
  });

});
