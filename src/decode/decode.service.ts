import { Injectable, Query } from '@nestjs/common';
import { SearchDecodeDto } from './dto/search-decode.dto';

@Injectable()
export class DecodeService {
  findAll() {
    return `This action returns all decode`;
  }
}
