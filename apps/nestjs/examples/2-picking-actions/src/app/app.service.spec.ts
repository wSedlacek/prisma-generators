import { Test } from '@nestjs/testing';

import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    service = app.get<AppService>(AppService);
  });

  describe('getData', () => {
    it('should return "Welcome to 2-picking-actions!"', () => {
      expect(service.getData()).toEqual({
        message: 'Welcome to 2-picking-actions!',
      });
    });
  });
});
