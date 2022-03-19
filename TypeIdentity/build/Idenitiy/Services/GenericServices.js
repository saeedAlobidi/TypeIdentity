"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GenericServices {
    /** GenericServices  constructor
     * @param IGenericRepository gereric Repositor
     * @return new instance GenericServices
     */
    constructor(IGenericRepository) {
        this.IGenericRepository = IGenericRepository;
    }
    /** getAsync
      * @param entity database entity
      * @return  Promise of  entity
      */
    getAsync(entity) {
        throw new Error('Method not implemented.');
    }
    /** addAsync
      * @param entity database entity
      * @return  Promise of  entity
      */
    addAsync(entity) {
        throw new Error('Method not implemented.');
    }
    /** updateAsync
      * @param entity database entity
      * @return  Promise of  entity
      */
    updateAsync(entity) {
        throw new Error('Method not implemented.');
    }
    /** deleteAsync
      * @param entity database entity
      * @return  Promise of  entity
      */
    deleteAsync(entity) {
        throw new Error('Method not implemented.');
    }
}
exports.default = GenericServices;
//# sourceMappingURL=GenericServices.js.map