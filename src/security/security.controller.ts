import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateSecurityDto } from './dto/create-security.dto';
import { Security } from './models/security.model';
import { SecurityService } from './security.service';

@ApiTags('security')
@Controller()
export class SecurityController {
  constructor(private readonly securityService: SecurityService) {}

  @Post('security')
  @ApiOperation({ summary: 'Creates a tool in the database returns the original data with the assigned ID' })
  @ApiResponse({ status: 200, description: 'Successfully updated schema.' })
  @ApiResponse({ status: 400, description: 'Missing or invalid request body.' })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Schema not found.' })
  @ApiResponse({ status: 500, description: 'Internal error.' })
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createSecurityDto: CreateSecurityDto): Promise<Security> {
    return this.securityService.create(createSecurityDto);
  }

  @Get('securityList')
  @ApiOperation({ summary: 'List of tools with identifiers' })
  @ApiResponse({ status: 200, description: 'Successfully updated schema.' })
  @ApiResponse({ status: 400, description: 'Missing or invalid request body.' })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Schema not found.' })
  @ApiResponse({ status: 500, description: 'Internal error.' })
  findAll(): Promise<Security[]> {
    return this.securityService.findAllShortInfo();
  }

  @Get('security/:id')
  @ApiOperation({ summary: 'Data from the database for a specific instrument in accordance with the ID' })
  @ApiResponse({ status: 200, description: 'Successfully updated schema.' })
  @ApiResponse({ status: 400, description: 'Missing or invalid request body.' })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Schema not found.' })
  @ApiResponse({ status: 500, description: 'Internal error.' })
  findOne(@Param('id') id: string): Promise<Security> {
    return this.securityService.findOne(id);
  }

  @Delete()
  @ApiOperation({ summary: 'Clear database' })
  @ApiResponse({ status: 200, description: 'Successfully updated schema.' })
  @ApiResponse({ status: 400, description: 'Missing or invalid request body.' })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Schema not found.' })
  @ApiResponse({ status: 500, description: 'Internal error.' })
  remove(): Promise<void> {
    return this.securityService.remove();
  }
}