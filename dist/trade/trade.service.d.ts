import { Trade } from './models/trade.model';
export declare class TradeService {
    private readonly tradeModel;
    constructor(tradeModel: typeof Trade);
    findAll(): Promise<Trade[]>;
    remove(): Promise<void>;
}
