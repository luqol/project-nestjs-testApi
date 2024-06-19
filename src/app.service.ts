import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const name = 'Joe';
    const text = `Hello ${name}`;
    return text;
  }
}
