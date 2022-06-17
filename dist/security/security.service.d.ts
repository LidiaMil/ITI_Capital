import { Security } from './models/security.model';
import { CreateSecurityDto } from './dto/create-security.dto';
export declare class SecurityService {
    private readonly securityModel;
    constructor(securityModel: typeof Security);
    create(createSecurityDto: CreateSecurityDto): Promise<Security>;
    findAll(): Promise<Security[]>;
    findAllShortInfo(): Promise<Security[]>;
    findOne(id: string): Promise<Security>;
}
