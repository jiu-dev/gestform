import { Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class GestformService {
  async transformNumbers(numbers: number[]): Promise<(string | number)[]> {
    numbers.forEach((number) => {
      if (!this.isNumberValid(number)) {
        throw new BadRequestException(
          `Number ${number} is out of allowed range (-1000 to 1000)`,
        );
      }
    });

    return numbers.map((number) => {
      if (number % 15 === 0) return 'Gestform';
      if (number % 3 === 0) return 'Geste';
      if (number % 5 === 0) return 'Forme';
      return number;
    });
  }

  private isNumberValid(number: number): boolean {
    return number >= -1000 && number <= 1000;
  }
}
