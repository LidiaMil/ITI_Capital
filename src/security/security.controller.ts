import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateSecurityDto } from './dto/create-security.dto';
import { Security } from './models/security.model';
import { SecurityService } from './security.service';

@ApiTags('security')
@Controller()
export class SecurityController {
  constructor(private readonly securityService: SecurityService) {}

  @Post('security')
  @ApiOperation({ summary: 'Greetings' })
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createSecurityDto: CreateSecurityDto): Promise<Security> {
    return this.securityService.create(createSecurityDto);
  }

  @Get('securityList')
  @ApiOperation({ summary: 'Greetings' })
  findAll(): Promise<Security[]> {
    return this.securityService.findAllShortInfo();
  }

  @Get('security/:id')
  @ApiOperation({ summary: 'Greetings' })
  findOne(@Param('id') id: string): Promise<Security> {
    return this.securityService.findOne(id);
  }
}