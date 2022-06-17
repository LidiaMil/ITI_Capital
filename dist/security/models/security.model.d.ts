import { Model } from 'sequelize-typescript';
export declare class Security extends Model {
    id: number;
    seccode: string;
    price: number;
    isin: string;
    lotsize: number;
}
