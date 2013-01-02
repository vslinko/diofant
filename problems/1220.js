var _ = require('lodash');

module.exports.solution = function () {
    var s = '11';
    var i, m;

    for (var i = 0; i < 8; i++) {
        m = String(Number(_.max(s)) + 1);
        s = _.map(s, function (c) { return m + c; }).join('') + m;
    }

    return Number(s[299] + s[300]);
};

module.exports.result = 79;
