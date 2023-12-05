import { Module } from '@nestjs/common';
import { GestformController } from 'src/controllers/gestform.controller';
import { GestformService } from 'src/services/gestform.service';

@Module({
  providers: [GestformService],
  controllers: [GestformController],
})
export class GestformModule {}
