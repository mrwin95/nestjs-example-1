import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';
// import { CACHE_MANAGER } from '@nestjs/cache-manager';
// import { Cache } from 'cache-manager';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly configService: ConfigService, // @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/db')
  getDb(): string {
    return this.configService.get<string>('DATABASE_HOST');
  }

  @Get('cache/demo/set')
  async demoSetCache() {
    // await this.cacheManager.set('new_test', 'hello world');
    return true;
  }

  @Get('cache/demo/get')
  async demoGetCache() {
    // return this.cacheManager.get('new_test');
  }
}
