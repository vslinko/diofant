var bigint = require('bigint');

module.exports.solution = function () {
    var prime = bigint(0);
    var length = 0;
    var buffer;
    var count = 0;

    for (var i = 0; i < 10000000; i++) {
        prime = prime.nextPrime();
        buffer = prime.toString();

        for (var s = length % 2 + 1; s < buffer.length; s += 2) {
            if (buffer[s] == '0') {
                count++;
            }
        }

        length += buffer.length;
    }

    return count;
};

module.exports.result = 3237989;
