import { Global, Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DatabaseConfig } from 'src/config';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      name: 'master-db',
      inject: [DatabaseConfig],
      useFactory: async (
        _dbConfig: DatabaseConfig,
      ): Promise<TypeOrmModuleOptions> => ({
        type: 'mysql',
        host: _dbConfig.getDbHost(),
        port: _dbConfig.getPort(),
        database: _dbConfig.getDb(),
        username: _dbConfig.getUser(),
        password: _dbConfig.getPassword(),
      }),
    }),
  ],
  exports: [DatabaseConfig],
  providers: [DatabaseConfig],
})
export class DatabaseModule {}
