import { IsArray, IsNumber } from '@nestjs/class-validator';

export class GestformDTO {
  @IsArray()
  @IsNumber({}, { each: true })
  numbers: number[];
}
