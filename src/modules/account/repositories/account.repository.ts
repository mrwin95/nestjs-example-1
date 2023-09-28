import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Account } from '../interfaces/account.interface';
import { AccountDto } from '../dto';
import { IReturnValue } from 'src/types';

@Injectable()
export class AccountRepository {
  constructor(
    @InjectDataSource('master-db') protected readonly _dataSource: DataSource,
  ) {}

  async getAccounts(): Promise<Account[]> {
    return await this._dataSource.query('call get_accounts;');
  }

  async createAccount(accountDto: AccountDto): Promise<IReturnValue> {
    return await this._dataSource.query(
      `call create_account('12',${accountDto.name}, ${accountDto.description})`,
    );
  }
}
