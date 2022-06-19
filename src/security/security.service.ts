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

  async create(createSecurityDto: CreateSecurityDto): Promise<Security> {
    return this.securityModel.create({createSecurityDto});
  }

  async findAll(): Promise<Security[]> {
    return this.securityModel.findAll();
  }

  async findAllShortInfo(): Promise<Security[]> {
    return this.securityModel.findAll({
      attributes: ['id', 'seccode'],
    });
  }

  async findOne(id: string): Promise<Security> {
    return this.securityModel.findOne({
      where: {
        id,
      },
    });
  }

  async remove(): Promise<void> {
    await this.securityModel.destroy({
      where: {},
      truncate: true
    });
  }
}