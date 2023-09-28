import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';
import { ConfigModule } from './core/config';
import { DatabaseModule } from './core/database';
import { modules } from './modules';
import { RedisCacheModule } from './core/cache';

@Module({
  imports: [ConfigModule, DatabaseModule, RedisCacheModule, ...modules],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule {}
