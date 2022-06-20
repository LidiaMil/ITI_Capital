import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import mock from './mock';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
    await mock()
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
  it('/securityList (GET)', () => {
    return request(app.getHttpServer())
      .get('/securityList')
      .expect(200)
  });
  it('/security/:id (GET)', () => {
    return request(app.getHttpServer())
      .get('/security/100')
      .expect(200)
      .expect({});
  });
  it('/security (POST)', () => {
    return request(app.getHttpServer())
      .post('/security')
      .expect(201)
  });
});
