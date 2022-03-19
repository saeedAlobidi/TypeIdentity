"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserLogins_1 = __importDefault(require("../Core/Entities/UserLogins"));
const typeorm_1 = require("typeorm");
let IdentityUserLogins = class IdentityUserLogins extends UserLogins_1.default {
};
IdentityUserLogins = __decorate([
    (0, typeorm_1.Entity)("IdentityUserLogins", { schema: "dbo" })
], IdentityUserLogins);
exports.default = IdentityUserLogins;
//# sourceMappingURL=IdentityUserLogins.js.map