export enum EnvironmentEnum {
  Development = 'development',
  Production = 'production',
}

export function isProduction(): boolean {
  return process.env.NODE_ENV === EnvironmentEnum.Production;
}

export function isDevelopment(): boolean {
  return process.env.NODE_ENV === EnvironmentEnum.Development;
}
