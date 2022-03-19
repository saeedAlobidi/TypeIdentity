import { EntityTarget } from "typeorm";
import IContext from "../../Core/DbConstraints/IContext";
import IRoleManagerRepos from "../../Core/Repositories/IRoleManagerRepos";
import GenericRepository from "./GenericRepository";
export default class RoleManagerRepos<T> extends GenericRepository<T> implements IRoleManagerRepos<T> {
    /**
*  RoleManagerRepos constructor
* @param conetxt  database conext
* @param entity  database entity
@return new instance RoleManagerRepos
*/
    constructor(conetxt: IContext, entity: EntityTarget<T>);
}
