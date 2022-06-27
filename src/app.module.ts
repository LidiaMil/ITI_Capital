import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SecurityModule } from './security/security.module';
import { TasksModule } from './tasks/tasks.module';
import { TradeModule } from './trade/trade.module';
import config from './config/config';

@Module({
  imports: [
    SequelizeModule.forRoot({
      host: config.app.DB_HOST,
      port: 5432,
      username: config.app.DB_NAME,
      password: config.app.DB_PASS,
      database: config.app.DB_NAME,
      dialect: 'postgres',
      autoLoadModels: true,
      synchronize: true,
      logging:false,
      omitNull: true
    }),
    SecurityModule,
    TradeModule,
    ScheduleModule.forRoot(), 
    TasksModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
