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

  test('/ (GET)', async() => {
    const res =  await request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');

    // console.log(res)
  });
  test('/securityList (GET)', () => {
    return request(app.getHttpServer())
      .get('/securityList')
      .expect(200)
  });
  test('/security/:id (GET)', () => {
    return request(app.getHttpServer())
      .get('/security/100')
      .expect(200)
  });
  test('/security (POST)', () => {
    return request(app.getHttpServer())
      .post('/security')
      .send({
        seccode: 'VTBR',
        price: '2,33',
        isin: 'testisin',
        lotsize: 10,
      })
      .expect(201)
  });
});
