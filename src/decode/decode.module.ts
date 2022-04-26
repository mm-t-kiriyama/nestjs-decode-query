import { Module } from '@nestjs/common';
import { DecodeService } from './decode.service';
import { DecodeController } from './decode.controller';

@Module({
  controllers: [DecodeController],
  providers: [DecodeService]
})
export class DecodeModule {}
