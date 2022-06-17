import { Trade } from './models/trade.model';
import { TradeService } from './trade.service';
export declare class TradeController {
    private readonly tradeService;
    constructor(tradeService: TradeService);
    findAll(): Promise<Trade[]>;
    remove(): Promise<void>;
}
