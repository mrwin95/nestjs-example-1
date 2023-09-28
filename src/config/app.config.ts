import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppConfig {
  constructor(private readonly _configService: ConfigService) {}

  getPort(): number {
    return this._configService.get<number>('APP_PORT');
  }
}
