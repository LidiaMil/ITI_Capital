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
exports.SecurityService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const security_model_1 = require("./models/security.model");
let SecurityService = class SecurityService {
    constructor(securityModel) {
        this.securityModel = securityModel;
    }
    async create(createSecurityDto) {
        return this.securityModel.create({ createSecurityDto });
    }
    async findAll() {
        return this.securityModel.findAll();
    }
    async findAllShortInfo() {
        return this.securityModel.findAll({
            attributes: ['id', 'seccode'],
        });
    }
    async findOne(id) {
        return this.securityModel.findOne({
            where: {
                id,
            },
        });
    }
};
SecurityService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(security_model_1.Security)),
    __metadata("design:paramtypes", [Object])
], SecurityService);
exports.SecurityService = SecurityService;
//# sourceMappingURL=security.service.js.map