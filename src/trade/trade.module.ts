import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Trade } from './models/trade.model';
import { TradeController } from './trade.controller';
import { TradeService } from './trade.service';

@Module({
  imports: [SequelizeModule.forFeature([Trade])],
  providers: [TradeService],
  controllers: [TradeController],
})
export class TradeModule {}