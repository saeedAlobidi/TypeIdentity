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
const tsyringe_1 = require("tsyringe");
const IDbConstraint_1 = __importDefault(require("./IDbConstraint"));
let DbConstraint = class DbConstraint extends IDbConstraint_1.default {
    constructor() {
        /**
         * @param type database type mssql,oracle ect for more info  https://typeorm.io
         * @param host  ip address of your database
         * @param username  database username
         * @param password database password
         * @param database database  name
         */
        super(...arguments);
        this.type = "mssql";
        this.host = "localhost";
        this.username = "mms";
        this.password = "mms";
        this.database = "test_test";
    }
};
DbConstraint = __decorate([
    (0, tsyringe_1.singleton)()
], DbConstraint);
exports.default = DbConstraint;
//# sourceMappingURL=DbConstraint.js.map