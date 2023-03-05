import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signup() {
    return 'WORK';
  }

  signin() {
    return { msg: 'testing' };
  }
}
