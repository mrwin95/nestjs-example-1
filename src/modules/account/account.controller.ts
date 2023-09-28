import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { AccountService } from './account.service';
import { Account } from './interfaces/account.interface';
import { AccountDto } from './dto';
import { IReturnValue } from 'src/types';

@Controller('accounts')
export class AccountController {
  constructor(private readonly _accountService: AccountService) {}

  @Get()
  async getAccounts(): Promise<Account[]> {
    return this._accountService.getAccounts();
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createAccount(@Body() accountDto: AccountDto): Promise<IReturnValue> {
    return this._accountService.createAccount(accountDto);
  }
}
