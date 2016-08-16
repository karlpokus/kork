var ts = 0,
    rate = 0;

function reset() {
  var d = new Date();
  ts = d.getTime();
}

function limit(req, res, next) {
  var d = new Date();
    
  if (d.getTime() - ts > rate) { // reset && go ahead
    reset();
    return next();
  } else { // wait && reset && go ahead
    setTimeout(function(){
      reset();
      return next();
    }, rate);
  }
}

module.exports = function(r){
  rate = r;
  reset();
  
  return limit;
}


/*
// Old API for reference

module.exports = {
  ts: 0,
  rate: 0,
  init: function(rate) { // allow 1 req/rate (ms)
    this.rate = rate;
    this.reset();
    return this;
  },
  reset: function() {
    var d = new Date();
    this.ts = d.getTime();
  },
  limit: function(req, res, next) {
    var d = new Date(),
        self = this;
    
    if (d.getTime() - this.ts > this.rate) { // reset && go ahead      
      this.reset();
      return next();
    } else { // wait && reset      
      setTimeout(function(){
        self.reset();
        return next();
      }, self.rate);
    }
  }
};
*/
