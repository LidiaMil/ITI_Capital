import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateSecurityDto } from './dto/create-security.dto';
import { Security } from './models/security.model';
import { SecurityService } from './security.service';

@ApiTags('security')
@Controller()
export class SecurityController {
  constructor(private readonly securityService: SecurityService) {}

  @Post('security')
  @ApiOperation({ summary: 'Creates a tool in the database returns the original data with the assigned ID' })
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createSecurityDto: CreateSecurityDto): Promise<Security> {
    return this.securityService.create(createSecurityDto);
  }

  @Get('securityList')
  @ApiOperation({ summary: 'List of tools with identifiers' })
  findAll(): Promise<Security[]> {
    return this.securityService.findAllShortInfo();
  }

  @Get('security/:id')
  @ApiOperation({ summary: 'Data from the database for a specific instrument in accordance with the ID' })
  findOne(@Param('id') id: string): Promise<Security> {
    return this.securityService.findOne(id);
  }

  @Delete()
  @ApiOperation({ summary: 'Clear database' })
  remove(): Promise<void> {
    return this.securityService.remove();
  }
}