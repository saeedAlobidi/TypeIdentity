import { EntityTarget } from "typeorm";
import IContext from "../../Core/DbConstraints/IContext";
import IUserClaimsManagerRepos from "../../Core/Repositories/IUserClaimsManagerRepos";
import GenericRepository from "./GenericRepository";



export default class UserClaimsManagerRepos<T> extends GenericRepository<T> implements IUserClaimsManagerRepos<T>{


    /**
*  UserClaimsManagerRepos constructor 
* @param conetxt  database conext
* @param entity  database entity 
@return new instance UserClaimsManagerRepos
*/

    constructor(conetxt: IContext, entity: EntityTarget<T>) {
        super(conetxt, entity);
    }


}
