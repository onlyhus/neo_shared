import { Injectable } from '@nestjs/common';

@Injectable()
export class SharedService {
  getSharedString(): string {
    return 'New Shared String';
  }
}
