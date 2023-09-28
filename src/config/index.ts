import { AppConfig } from './app.config';
import { DatabaseConfig } from './database.config';
import { RedisConfig } from './redis.config';
import { SwaggerConfig } from './swagger.config';

export const loadConfigs = [AppConfig, DatabaseConfig, RedisConfig];

export { AppConfig, DatabaseConfig, RedisConfig, SwaggerConfig };
