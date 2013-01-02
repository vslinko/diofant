var bigint = require('bigint');

module.exports.solution = function () {
    var x = bigint(32)
                .pow(32)
                .add(Math.pow(4, 4))
                .sub(1)
                .mul(Math.pow(16, 16))
                .add(Math.pow(8, 8))
                .sub(1);

    return x.toString(2).split('1').length - 1;
};

module.exports.result = 33;
