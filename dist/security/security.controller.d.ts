import { CreateSecurityDto } from './dto/create-security.dto';
import { Security } from './models/security.model';
import { SecurityService } from './security.service';
export declare class SecurityController {
    private readonly securityService;
    constructor(securityService: SecurityService);
    create(createSecurityDto: CreateSecurityDto): Promise<Security>;
    findAll(): Promise<Security[]>;
    findOne(id: string): Promise<Security>;
}
