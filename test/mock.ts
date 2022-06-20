import { Security } from "../src/security/models/security.model";
import { Trade } from "../src/trade/models/trade.model";

export default async function () {
    try {
        await Security.bulkCreate([
            {
                seccode: Math.random().toString(36).substr(2, 5),
                price: Math.random() * 10000 + 1,
                isin: Math.random().toString(36).substr(2, 5),
                lotsize: Math.random() * 10000 + 1,
            }
        ]);

        await Trade.bulkCreate([
            {
                price: Math.random() * 10000 + 1,
                size: Math.random() * 10000 + 1,
                side: Math.random() * 10000 + 1,
                security: Math.random() * 10000 + 1,
                client: 'test' + Math.random() * 10000 + 1,
            }
        ]);
    }
    catch (e) {
        console.log('[createTestDataModels]', e);
    }
}
