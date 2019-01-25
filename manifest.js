function clone (o) { return JSON.parse(JSON.stringify(o)); };

let defaultEnv = {
  appJS: [
    'app/assets/js/Plans.js',
    'app/assets/js/main.js'
  ]
};

let envs = {
  local: clone(defaultEnv),
  test: clone(defaultEnv),
  staging: clone(defaultEnv),
  production: clone(defaultEnv),
}

module.exports = envs[process.env.NODE_ENV] || envs.local;
