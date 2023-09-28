import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DatabaseConfig {
  constructor(protected readonly _configService: ConfigService) {}

  getDbHost(): string {
    return this._configService.get<string>('DATABASE_HOST', 'localhost');
  }

  getPort(): number {
    return this._configService.get<number>('DATABASE_PORT');
  }
  getDb(): string {
    return this._configService.get<string>('DATABASE_DB');
  }

  getUser(): string {
    return this._configService.get<string>('DATABASE_USER');
  }

  getPassword(): string {
    return this._configService.get<string>('DATABASE_PASSWORD');
  }
}
