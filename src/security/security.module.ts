import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Security } from './models/security.model';
import { SecurityController } from './security.controller';
import { SecurityService } from './security.service';

@Module({
  imports: [SequelizeModule.forFeature([Security])],
  providers: [SecurityService],
  controllers: [SecurityController],
})
export class SecurityModule {}