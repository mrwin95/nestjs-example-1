import { Inject, Injectable } from '@nestjs/common';
import { AccountRepository } from './repositories';
import { Account } from './interfaces/account.interface';
import { AccountDto } from './dto';
import { IReturnValue } from 'src/types';
import { Cache } from 'cache-manager';
import { CACHE_MANAGER } from '@nestjs/cache-manager';

@Injectable()
export class AccountService {
  constructor(
    @Inject(CACHE_MANAGER) private _cacheManager: Cache,
    private readonly _accountRepo: AccountRepository,
  ) {}

  async getAccounts(): Promise<Account[]> {
    const re = await this._cacheManager.get('test');
    console.log('call', re);

    const results = await this._accountRepo.getAccounts();
    return results;
  }

  async createAccount(accountDto: AccountDto): Promise<IReturnValue> {
    await this._cacheManager.set('test', 'hello');
    return await this._accountRepo.createAccount(accountDto);
  }
}
