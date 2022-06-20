import { Module } from '@nestjs/common';
import { SecurityModule } from '../security/security.module';
import { TradeModule } from '../trade/trade.module';
import { TasksService } from './tasks.service';

@Module({
  imports: [TradeModule, SecurityModule],
  providers: [TasksService],
})
export class TasksModule {}