import { Model } from 'sequelize-typescript';
export declare class Trade extends Model {
    id: number;
    price: string;
    size: number;
    side: number;
    security: number;
    client: string;
}
