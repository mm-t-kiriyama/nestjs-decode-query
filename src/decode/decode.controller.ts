import { Controller, Get, Query, UsePipes } from '@nestjs/common';
import { decodeQueryPipe } from 'src/pipes/decodeQueryPipe';
import { DecodeService } from './decode.service';
import { SearchDecodeDto } from './dto/search-decode.dto';

@Controller('decode')
export class DecodeController {
  constructor(private readonly decodeService: DecodeService) {}

  // メソッド・スコープでPipeを適用させる
  @UsePipes(new decodeQueryPipe())
  @Get()
  findAll(@Query() query: SearchDecodeDto) {
    return query;
  }
}
