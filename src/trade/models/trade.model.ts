import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Trade extends Model {
    @Column({ autoIncrement: true, primaryKey: true })
    id: number;

    @Column
    price: string;
  
    @Column
    size: number;
  
    @Column
    side: number;
  
    @Column
    security: number;
  
    @Column
    client: string;
}