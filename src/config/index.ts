import { DatabaseConfig } from './database.config';
import { RedisConfig } from './redis.config';
import { SwaggerConfig } from './swagger.config';

export const loadConfigs = [DatabaseConfig, RedisConfig];

export { DatabaseConfig, RedisConfig, SwaggerConfig };
