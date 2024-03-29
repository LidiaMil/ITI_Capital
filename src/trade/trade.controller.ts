import { Controller, Delete, Get, } from '@nestjs/common';
import { ApiTags, ApiOperation, } from '@nestjs/swagger';
import { Trade } from './models/trade.model';
import { TradeService } from './trade.service';

@ApiTags('trade')
@Controller('trade')
export class TradeController {
  constructor(private readonly tradeService: TradeService) {}

  @Get()
  @ApiOperation({ summary: 'Search all trade' })
  findAll(): Promise<Trade[]> {
    return this.tradeService.findAll();
  }

  @Delete()
  @ApiOperation({ summary: 'Clear table' })
  remove(): Promise<void> {
    return this.tradeService.remove();
  }
}
