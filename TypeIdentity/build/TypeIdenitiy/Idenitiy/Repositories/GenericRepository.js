"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class GenericRepository {
    /**
    *  GenericRepository constructor
    * @param conetxt database conext
    * @param entity database entity
    * @return new instance
    */
    constructor(conetxt, entity) {
        this.Dbcont = conetxt.Dbcont;
        this.conetxt = conetxt;
        this.entity = entity;
    }
    /**
    *  query builder
    * @param query database query string
    * @return new entity
    */
    GetQuery(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = yield this.Dbcont;
            const data = yield connection.query(query);
            return data;
        });
    }
    /**
    *  query builder
    * @param query database query string
    * @return new entity
    */
    GetQueryBuilder(queryBuilderAlias) {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = yield this.Dbcont;
            this.query = yield connection.getRepository(this.entity).createQueryBuilder(queryBuilderAlias);
            return this.query;
        });
    }
    /**
    *  query builder
    * @param query database query string
    * @return new entity
    */
    BuildQueryBuild(queryBuilderAlias) {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = yield this.Dbcont;
            this.query = yield connection.getRepository(this.entity).createQueryBuilder(queryBuilderAlias);
            return this;
        });
    }
    /**
   *  GetByIdPromise
   * @param id database id ofentity
   * @return new entity
   */
    GetByIdPromise(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = yield this.Dbcont;
            return connection.getRepository(this.entity).findByIds([id]);
        });
    }
    /**
    *  GetAllPromise get all data in same entity
    *
    * @return new entity
    */
    GetAllPromise() {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = yield this.Dbcont;
            return connection.getRepository(this.entity).find();
        });
    }
    /**
    *  AddPromise entity
    * @param entity  new instance database entity
    * @return insert entity
    */
    AddPromise(entity) {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = yield this.Dbcont;
            return connection.getRepository(this.entity).save(entity);
        });
    }
    /**
 *  UpdatePromise entity
 * @param entity entity that you want update
 * @return update entity
 */
    UpdatePromise(entity) {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = yield this.Dbcont;
            return connection.getRepository(this.entity).save(entity);
        });
    }
    /**
 *  DeletePromise entity
 * @param entity  the  entity you want to delete
 * @return update entity
 */
    DeletePromise(entity) {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = yield this.Dbcont;
            return connection.getRepository(this.entity).delete(entity);
        });
    }
}
exports.default = GenericRepository;
//# sourceMappingURL=GenericRepository.js.map