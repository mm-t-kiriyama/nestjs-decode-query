import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DecodeModule } from './decode/decode.module';

@Module({
  imports: [DecodeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
