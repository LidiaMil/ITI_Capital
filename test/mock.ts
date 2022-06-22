import { Security } from "../src/security/models/security.model";
import { Trade } from "../src/trade/models/trade.model";

export default async function () {
    try {
        for (let i = 0; i < 10; i++) {
            await Security.create(
                {
                    seccode: Math.random().toString(36).substr(2, 5),
                    price: Math.floor(Math.random() * 10000)+1,
                    isin: Math.random().toString(36).substr(2, 5) + 'isin',
                    lotsize: Math.floor(Math.random() * 10000),
                }
            );
    
            await Trade.create(
                {
                    price: Math.floor(Math.random() * 10000) + 1,
                    size: Math.floor(Math.random() * 10000) + 1,
                    side: Math.floor(Math.random() * 10000) + 1,
                    security: Math.floor(Math.random() * 10000) + 1,
                    client: 'test' + i,
                }
            );
        }
    }
    catch (e) {
        console.log('[createTestDataModels]', e);
    }
}
