import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Trade } from './models/trade.model';
import { TradeController } from './trade.controller';
import { TradeGateway } from './trade.gateway';
import { TradeService } from './trade.service';

@Module({
  imports: [SequelizeModule.forFeature([Trade]), TradeGateway],
  providers: [TradeService],
  controllers: [TradeController],
  exports: [TradeService],
})
export class TradeModule {}