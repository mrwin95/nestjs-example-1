import { Global, Module } from '@nestjs/common';
import { ConfigModule as BaseConfigModule } from '@nestjs/config';
import { loadConfigs } from 'src/config';

@Global()
@Module({
  imports: [
    BaseConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      expandVariables: true,
    }),
  ],
  providers: loadConfigs,
  exports: loadConfigs,
})
export class ConfigModule {}
