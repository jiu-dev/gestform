import { Body, Controller, Post } from '@nestjs/common';
import { GestformDTO } from 'src/dtos/GestformDTO';
import { GestformService } from 'src/services/gestform.service';

@Controller('gestform')
export class GestformController {
  constructor(private readonly gestformService: GestformService) {}

  @Post()
  async transformNumbers(
    @Body() gestformDTO: GestformDTO,
  ): Promise<(string | number)[]> {
    return await this.gestformService.transformNumbers(gestformDTO.numbers);
  }
}
