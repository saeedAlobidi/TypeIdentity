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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const SuperEntity_1 = __importDefault(require("../Common/SuperEntity"));
const GUUID_1 = __importDefault(require("../Utilities/GUUID"));
let Roles = class Roles extends SuperEntity_1.default {
    constructor() {
        super(...arguments);
        this.id = GUUID_1.default.newGuid();
    }
};
__decorate([
    (0, typeorm_1.Column)("nvarchar", { primary: true, name: "Id" }),
    __metadata("design:type", String)
], Roles.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "Name", nullable: true }),
    __metadata("design:type", String)
], Roles.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "NormalizedName", nullable: true }),
    __metadata("design:type", String)
], Roles.prototype, "normalizedName", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "ConcurrencyStamp", nullable: true }),
    __metadata("design:type", String)
], Roles.prototype, "concurrencyStamp", void 0);
Roles = __decorate([
    (0, typeorm_1.Index)("PK_Roles", ["id"], { unique: true }),
    (0, typeorm_1.Index)("RoleNameIndex", ["normalizedName"], { unique: true }),
    (0, typeorm_1.Entity)("Roles", { schema: "dbo" })
], Roles);
exports.default = Roles;
//# sourceMappingURL=Roles.js.map