import {
  createContainer,
  InjectionMode,
  Lifetime,
  asClass,
} from 'awilix';

export default function configureDIContainer() {
  return createContainer()
    .loadModules(
      [
        ['api/**/*Controller.js', { register: asClass }],
        ['api/**/*Service.js', { register: asClass }],
        ['api/**/*Repository.js', { register: asClass }],
        ['api/**/*Cron.js', { register: asClass }],
        ['api/**/*Provider.js', { register: asClass }],
        ['api/**/*Emitter.js', { register: asClass }],
      ], {
        cwd: __dirname,
        formatName: 'camelCase',
        resolverOptions: {
          lifetime: Lifetime.SCOPED,
          injectionMode: InjectionMode.PROXY,
        },
      },
    );
}
