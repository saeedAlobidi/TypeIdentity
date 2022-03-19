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
let Users = class Users extends SuperEntity_1.default {
    constructor() {
        super(...arguments);
        this.id = GUUID_1.default.newGuid();
        this.emailConfirmed = false;
        this.phoneNumberConfirmed = false;
        this.twoFactorEnabled = false;
        this.lockoutEnabled = false;
        this.accessFailedCount = 3;
    }
    ;
};
__decorate([
    (0, typeorm_1.Column)("nvarchar", { primary: true, name: "Id" }),
    __metadata("design:type", String)
], Users.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "name", nullable: true }),
    __metadata("design:type", String)
], Users.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "age", nullable: true }),
    __metadata("design:type", String)
], Users.prototype, "age", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "UserName", nullable: true }),
    __metadata("design:type", String)
], Users.prototype, "userName", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", {
        name: "NormalizedUserName",
        nullable: true,
        length: 256,
    }),
    __metadata("design:type", String)
], Users.prototype, "normalizedUserName", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "Email", nullable: true }),
    __metadata("design:type", String)
], Users.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "NormalizedEmail", nullable: true }),
    __metadata("design:type", String)
], Users.prototype, "normalizedEmail", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "EmailConfirmed" }),
    __metadata("design:type", Boolean)
], Users.prototype, "emailConfirmed", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "PasswordHash", nullable: true }),
    __metadata("design:type", String)
], Users.prototype, "passwordHash", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "SecurityStamp", nullable: true }),
    __metadata("design:type", String)
], Users.prototype, "securityStamp", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "ConcurrencyStamp", nullable: true }),
    __metadata("design:type", String)
], Users.prototype, "concurrencyStamp", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "PhoneNumber", nullable: true }),
    __metadata("design:type", String)
], Users.prototype, "phoneNumber", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "PhoneNumberConfirmed" }),
    __metadata("design:type", Boolean)
], Users.prototype, "phoneNumberConfirmed", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "TwoFactorEnabled" }),
    __metadata("design:type", Boolean)
], Users.prototype, "twoFactorEnabled", void 0);
__decorate([
    (0, typeorm_1.Column)("datetimeoffset", { name: "LockoutEnd", nullable: true }),
    __metadata("design:type", Date)
], Users.prototype, "lockoutEnd", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "LockoutEnabled" }),
    __metadata("design:type", Boolean)
], Users.prototype, "lockoutEnabled", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "AccessFailedCount" }),
    __metadata("design:type", Number)
], Users.prototype, "accessFailedCount", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "RoleId", nullable: true }),
    __metadata("design:type", String)
], Users.prototype, "RoleId", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "RoleName", nullable: true }),
    __metadata("design:type", String)
], Users.prototype, "RoleName", void 0);
Users = __decorate([
    (0, typeorm_1.Index)("EmailIndex", ["normalizedEmail"], {}),
    (0, typeorm_1.Index)("PK_Users", ["id"], { unique: true }),
    (0, typeorm_1.Index)("UserNameIndex", ["normalizedUserName"], { unique: true }),
    (0, typeorm_1.Entity)("Users", { schema: "dbo" })
], Users);
exports.default = Users;
//# sourceMappingURL=Users.js.map