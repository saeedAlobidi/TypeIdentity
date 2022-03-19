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
let UserTokens = class UserTokens extends SuperEntity_1.default {
};
__decorate([
    (0, typeorm_1.Column)("nvarchar", { primary: true, name: "UserId" }),
    __metadata("design:type", String)
], UserTokens.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { primary: true, name: "LoginProvider" }),
    __metadata("design:type", String)
], UserTokens.prototype, "loginProvider", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { primary: true, name: "Name" }),
    __metadata("design:type", String)
], UserTokens.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "Value", nullable: true }),
    __metadata("design:type", String)
], UserTokens.prototype, "value", void 0);
__decorate([
    (0, typeorm_1.JoinColumn)([{ name: "UserId", referencedColumnName: "id" }]),
    __metadata("design:type", Object)
], UserTokens.prototype, "user", void 0);
UserTokens = __decorate([
    (0, typeorm_1.Index)("PK_UserTokens", ["userId", "loginProvider", "name"], { unique: true }),
    (0, typeorm_1.Entity)("UserTokens", { schema: "dbo" })
], UserTokens);
exports.default = UserTokens;
//# sourceMappingURL=UserTokens.js.map