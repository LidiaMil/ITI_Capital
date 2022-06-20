import { ApiProperty } from "@nestjs/swagger";

export class CreateSecurityDto {
    @ApiProperty({ example: 'VTBR' })
    seccode: string;
  
    @ApiProperty({ example: '2.33' })
    price: string;

    @ApiProperty({ example: 'testisin' })
    isin: string;

    @ApiProperty({ example: 10 })
    lotsize: number;
  }