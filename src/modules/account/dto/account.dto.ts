import { IsNotEmpty } from 'class-validator';

export class AccountDto {
  @IsNotEmpty()
  name: string;
  description: string;
}
