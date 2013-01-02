var assert = require('assert'),
    fs = require('fs');


fs.readdirSync(__dirname + '/../problems').forEach(function (file) {
    var result = /^(\d+)\.js$/.exec(file);

    if (result) {
        var id = Number(result[1]);
        var problem = require('../problems/' + id);

        describe('Problem #' + id, function () {
            it('has solution', function () {
                assert(problem.solution);
            });

            it('has result', function () {
                assert(problem.result);
            });

            it('solution should return right result', function () {
                assert.equal(problem.solution(), problem.result);
            });
        });
    }
});
