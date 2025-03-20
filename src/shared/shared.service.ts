import { Injectable } from '@nestjs/common';

@Injectable()
export class SharedService {
  getSharedString(): string {
    return 'Shared String';
  }
}
