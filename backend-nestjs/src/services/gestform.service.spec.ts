import { BadRequestException } from '@nestjs/common';
import { GestformService } from './gestform.service';

describe('GestformService', () => {
  let service: GestformService;

  beforeEach(() => {
    service = new GestformService();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('transformNumbers', () => {
    it('should correctly transform numbers', async () => {
      const results = await service.transformNumbers([1, 3, 5, 15]);
      expect(results).toEqual([1, 'Geste', 'Forme', 'Gestform']);
    });

    it('should throw BadRequestException for numbers out of range', async () => {
      await expect(() => service.transformNumbers([1001])).rejects.toThrow(
        BadRequestException,
      );
      await expect(() => service.transformNumbers([-1001])).rejects.toThrow(
        BadRequestException,
      );
    });
  });

  describe('isNumberValid', () => {
    it('should return true for numbers within range', () => {
      expect(service['isNumberValid'](0)).toBeTruthy();
      expect(service['isNumberValid'](1000)).toBeTruthy();
      expect(service['isNumberValid'](-1000)).toBeTruthy();
    });

    it('should return false for numbers outside range', () => {
      expect(service['isNumberValid'](1001)).toBeFalsy();
      expect(service['isNumberValid'](-1001)).toBeFalsy();
    });
  });
});
