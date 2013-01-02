var MIN = 0x10000,
    MAX = 0xFFFFF;

module.exports.solution = function () {
    var x, y, z, buffer;
    var count = 0;

    x = MIN;
    for (y = x+1; y < MAX; y++) {
        z = x+y;
        if (z > MAX) {
            break;
        }
        buffer = z.toString(16);
        if (buffer[4] == '1') {
            count++;
        }
    }

    var result = count;

    while (count > 0) {
        x++;

        buffer = x.toString(16);
        if (buffer[4] == '1' || buffer[4] == '9') {
            count--;
        }

        result += count;
    }

    return result;
};

module.exports.result = 13153165312;
