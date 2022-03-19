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
let UserClaims = class UserClaims extends SuperEntity_1.default {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "Id" }),
    __metadata("design:type", Number)
], UserClaims.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "UserId" }),
    __metadata("design:type", String)
], UserClaims.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "ClaimType", nullable: true }),
    __metadata("design:type", String)
], UserClaims.prototype, "claimType", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "ClaimValue", nullable: true }),
    __metadata("design:type", String)
], UserClaims.prototype, "claimValue", void 0);
__decorate([
    (0, typeorm_1.JoinColumn)([{ name: "UserId", referencedColumnName: "id" }]),
    __metadata("design:type", Object)
], UserClaims.prototype, "user", void 0);
UserClaims = __decorate([
    (0, typeorm_1.Index)("IX_UserClaims_UserId", ["userId"], {}),
    (0, typeorm_1.Index)("PK_UserClaims", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("UserClaims", { schema: "dbo" })
], UserClaims);
exports.default = UserClaims;
//# sourceMappingURL=UserClaims.js.map