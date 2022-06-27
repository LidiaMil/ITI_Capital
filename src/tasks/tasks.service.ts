import { Injectable, Logger } from '@nestjs/common';
import { Cron, Interval, } from '@nestjs/schedule';
import { SecurityService } from '../security/security.service';
import { TradeService } from '../trade/trade.service';

@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);
  constructor(
      private readonly tradeService: TradeService,
      private readonly securityService: SecurityService
    ) {}
  
  // @Cron('45 * * * * *')
  // handleCron() {
  //   this.securityService.remove()
  //   this.logger.debug('Called when the second is 45');
  // }

  @Interval(10000*10000*10000)
  handleInterval() {
    this.tradeService.remove()
    this.logger.debug('Called every 10 seconds');
  }
}