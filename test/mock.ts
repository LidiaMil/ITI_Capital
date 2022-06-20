import { Security } from "../src/security/models/security.model";
import { Trade } from "../src/trade/models/trade.model";

export default async function () {
    try {
        for (let i = 0; i < 10; i++) {
            await Security.bulkCreate([
                {
                    seccode: Math.random().toString(36).substr(2, 5),
                    price: Math.random() * 10000 + 1,
                    isin: Math.random().toString(36).substr(2, 5) + 'isin',
                    lotsize: Math.random() * 10000 + 1,
                }
            ]);
    
            await Trade.bulkCreate([
                {
                    price: Math.random() * 10000 + 1,
                    size: Math.random() * 10000 + 1,
                    side: Math.random() * 10000 + 1,
                    security: Math.random() * 10000 + 1,
                    client: 'test' + i,
                }
            ]);
        }
    }
    catch (e) {
        console.log('[createTestDataModels]', e);
    }
}
