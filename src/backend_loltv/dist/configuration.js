"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = configureDIContainer;

var _awilix = require("awilix");

function configureDIContainer() {
  return (0, _awilix.createContainer)().loadModules([['api/**/*Controller.js', {
    register: _awilix.asClass
  }], ['api/**/*Service.js', {
    register: _awilix.asClass
  }], ['api/**/*Repository.js', {
    register: _awilix.asClass
  }], ['api/**/*Cron.js', {
    register: _awilix.asClass
  }], ['api/**/*Provider.js', {
    register: _awilix.asClass
  }], ['api/**/*Emitter.js', {
    register: _awilix.asClass
  }]], {
    cwd: __dirname,
    formatName: 'camelCase',
    resolverOptions: {
      lifetime: _awilix.Lifetime.SCOPED,
      injectionMode: _awilix.InjectionMode.PROXY
    }
  });
}