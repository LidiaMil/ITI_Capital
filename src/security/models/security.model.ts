import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Security extends Model {
  @Column({ autoIncrement: true, primaryKey: true })
  id: number;

  @Column
  seccode: string;

  @Column
  price: number;

  @Column
  isin: string;

  @Column
  lotsize: number;
}