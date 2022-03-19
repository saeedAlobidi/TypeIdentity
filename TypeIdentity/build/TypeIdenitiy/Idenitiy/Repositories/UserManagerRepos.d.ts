import { EntityTarget } from "typeorm";
import IContext from "../../Core/DbConstraints/IContext";
import IUserManagerRepos from "../../Core/Repositories/IUserManagerRepos";
import GenericRepository from "./GenericRepository";
export default class UserManagerRepos<T> extends GenericRepository<T> implements IUserManagerRepos<T> {
    /**
*  UserManagerRepos constructor
* @param conetxt  database conext
* @param entity  database entity
@return new instance UserManagerRepos
*/
    constructor(conetxt: IContext, entity: EntityTarget<T>);
}
