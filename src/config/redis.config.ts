import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class RedisConfig {
  constructor(protected readonly _configService: ConfigService) {}

  getRedisHost(): string {
    return this._configService.get<string>('REDIS_HOST', 'localhost');
  }

  getRedisPort(): number {
    return this._configService.get<number>('REDIS_PORT');
  }
  getRedisDb(): string {
    return this._configService.get<string>('REDIS_DB');
  }

  getRedisUser(): string {
    return this._configService.get<string>('REDIS_USER');
  }

  getRedisPassword(): string {
    return this._configService.get<string>('REDIS_PASSWORD');
  }
}
