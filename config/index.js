'use strict';

require('dotenv').config();

function clone (o) { return JSON.parse(JSON.stringify(o)); }

let defaultEnv = {
    env:  process.env.NODE_ENV || 'local',
    app: {
        port: (process.env.PORT || 8000)
    }
};

var envs = {
    local: clone(defaultEnv),
    test: clone(defaultEnv)
};

module.exports = envs[process.env.NODE_ENV] || envs.local;