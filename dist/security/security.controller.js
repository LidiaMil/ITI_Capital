"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const create_security_dto_1 = require("./dto/create-security.dto");
const security_service_1 = require("./security.service");
let SecurityController = class SecurityController {
    constructor(securityService) {
        this.securityService = securityService;
    }
    create(createSecurityDto) {
        return this.securityService.create(createSecurityDto);
    }
    findAll() {
        return this.securityService.findAllShortInfo();
    }
    findOne(id) {
        return this.securityService.findOne(id);
    }
};
__decorate([
    (0, common_1.Post)('security'),
    (0, swagger_1.ApiOperation)({ summary: 'Greetings' }),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_security_dto_1.CreateSecurityDto]),
    __metadata("design:returntype", Promise)
], SecurityController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('securityList'),
    (0, swagger_1.ApiOperation)({ summary: 'Greetings' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SecurityController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('security/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Greetings' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SecurityController.prototype, "findOne", null);
SecurityController = __decorate([
    (0, swagger_1.ApiTags)('security'),
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [security_service_1.SecurityService])
], SecurityController);
exports.SecurityController = SecurityController;
//# sourceMappingURL=security.controller.js.map