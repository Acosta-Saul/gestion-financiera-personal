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
exports.AsientoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const asiento_entity_1 = require("./asiento.entity");
let AsientoService = class AsientoService {
    asientoRepository;
    constructor(asientoRepository) {
        this.asientoRepository = asientoRepository;
    }
    findAll() {
        return this.asientoRepository.find();
    }
    create(asiento) {
        return this.asientoRepository.save(asiento);
    }
    async remove(id) {
        await this.asientoRepository.delete(id);
    }
    async update(id, asiento) {
        await this.asientoRepository.update(id, asiento);
        return this.asientoRepository.findOneBy({ id });
    }
};
exports.AsientoService = AsientoService;
exports.AsientoService = AsientoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(asiento_entity_1.Asiento)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AsientoService);
//# sourceMappingURL=asiento.service.js.map