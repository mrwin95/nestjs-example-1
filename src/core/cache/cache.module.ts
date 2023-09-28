import { Global, Module } from '@nestjs/common';
import { CacheModule as BaseCacheModule } from '@nestjs/cache-manager';
import { redisStore } from 'cache-manager-redis-yet';
import { RedisConfig } from 'src/config';

import { ConfigService } from '@nestjs/config';

@Global()
@Module({
  imports: [
    BaseCacheModule.registerAsync({
      inject: [RedisConfig],
      isGlobal: true,
      useFactory: async (_redisConfig: RedisConfig) => ({
        store: await redisStore({
          socket: {
            host: _redisConfig.getRedisHost(),
            port: _redisConfig.getRedisPort(),
          },
          username: _redisConfig.getRedisUser(),
          password: _redisConfig.getRedisPassword(),
        }),
      }),
    }),
  ],
  providers: [RedisConfig, ConfigService],
})
export class RedisCacheModule {}
