import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Security } from './models/security.model';
import { CreateSecurityDto } from './dto/create-security.dto';

@Injectable()
export class SecurityService {
  constructor(
    @InjectModel(Security)
    private readonly securityModel: typeof Security,
  ) {}

  //создает инструмент в БД возвращает исходные данные с присвоенным ID
  async create(createSecurityDto: CreateSecurityDto): Promise<Security> {
    return this.securityModel.create({createSecurityDto});
  }

  async findAll(): Promise<Security[]> {
    return this.securityModel.findAll();
  }

  //список инструментов с идентфикатороми
  async findAllShortInfo(): Promise<Security[]> {
    return this.securityModel.findAll({
      attributes: ['id', 'seccode'],
    });
  }

  //данные из БД по конкретному инструменту в соответвии с ID
  async findOne(id: string): Promise<Security> {
    return this.securityModel.findOne({
      where: {
        id,
      },
    });
  }
}