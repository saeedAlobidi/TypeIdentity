import GenericRepository from './GenericRepository';
import { EntityTarget } from 'typeorm';
import IContext from '../../Core/DbConstraints/IContext';
import IRoleClaimsManagerRepos from '../../Core/Repositories/IRoleClaimsManagerRepos';
export default class RoleClaimsManagerRepos<T> extends GenericRepository<T> implements IRoleClaimsManagerRepos<T> {
    /**
*  RoleClaimsManagerRepos constructor
* @param conetxt  database conext
* @param entity  database entity
  @return new instance RoleClaimsManagerRepos
*/
    constructor(conetxt: IContext, entity: EntityTarget<T>);
}
