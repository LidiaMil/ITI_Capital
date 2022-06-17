import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Trade } from './models/trade.model';

@Injectable()
export class TradeService {
  constructor(
    @InjectModel(Trade)
    private readonly tradeModel: typeof Trade,
  ) {}

  async findAll(): Promise<Trade[]> {
    return this.tradeModel.findAll();
  }

  async remove(): Promise<void> {
    await Trade.destroy();
  }
}