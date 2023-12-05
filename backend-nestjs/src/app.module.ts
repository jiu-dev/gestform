import { Module } from '@nestjs/common';
import { GestformModule } from './modules/gestform.module';

@Module({
  imports: [GestformModule],
})
export class AppModule {}
