import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SecurityModule } from './security/security.module';
import { TradeModule } from './trade/trade.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'auth',
      password: 'password',
      database: 'capital',
      autoLoadModels: true,
      synchronize: true,
      logging:false,
      omitNull: true
    }),
    SecurityModule,
    TradeModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
