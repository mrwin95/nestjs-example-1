import { Module } from '@nestjs/common';
import { AccountController } from './account.controller';
import { AccountService } from './account.service';
import { AccountRepository } from './repositories';

@Module({
  controllers: [AccountController],
  providers: [AccountService, AccountRepository],
  exports: [AccountRepository],
})
export class AccountModule {}
