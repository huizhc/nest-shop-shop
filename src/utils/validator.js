/***********************策略对象**************************/
var strategies = {
  isNotEmpty: function (value, errorMsg) {
    if (value === '' || value === undefined) {
      return errorMsg;
    }
  },
  minLength: function (value, length, errorMsg) {
    if (value.length < length) {
      return errorMsg;
    }
  },
  maxLength: function (value, length, errorMsg) {
    if (value.length > length) {
      return errorMsg;
    }
  },
  isMobile: function (value, errorMsg) {
    if (!/^\+?\d[\d -]{8,12}\d/.test(value)) {
      return errorMsg;
    }
  },
  isEntCode: function (value, errorMsg) {
    if (!/^\w{4,16}$/.test(value)) {
      return errorMsg;
    }
  }
};
/***********************Validator 类**************************/
var Validator = function () {
  this.cache = [];
};
Validator.prototype.add = function (value, rules) {
  var self = this;
  for (var i = 0, rule; rule = rules[i++];) {
    (function (rule) {
      var strategyAry = rule.strategy.split(':');
      var errorMsg = rule.errorMsg;
      self.cache.push(function () {
        var strategy = strategyAry.shift();
        strategyAry.unshift(value);
        strategyAry.push(errorMsg);
        return strategies[strategy].apply(null, strategyAry);
      });
    })(rule)
  }
};
Validator.prototype.start = function () {
  for (var i = 0, validatorFunc; validatorFunc = this.cache[i++];) {
    var errorMsg = validatorFunc();
    if (errorMsg) {
      return errorMsg;
    }
  }
};
export default Validator