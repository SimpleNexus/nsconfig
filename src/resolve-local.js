'use strict';
var nsconfName = require('./nsconf-name'),
    fs = require('fs'),
    path = require('path');

module.exports = function () {
    function parent(pathstr) {
        var out = '';
        var pathobj = path.parse(pathstr);
        var split = pathobj.dir.split('/');
        for (var it = 0; it < split.length - 1; it++)
            out += split[it] + '/';
        return out + pathobj.base;
    }

    var pathobj = path.parse(process.cwd() + '/' + nsconfName);
    var trial = pathobj.dir + '/' + pathobj.base;
    for (var it = 0; it < 5; it++) {
        if (fs.existsSync(trial)) {
            module.exports.CONF_CWD = path.parse(trial).dir;
            return trial;
        }
        trial = parent(trial);
    }

    return '';
};
