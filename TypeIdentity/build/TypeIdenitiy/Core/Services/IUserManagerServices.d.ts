import IServices from './IServices';
export default interface IUserManagerServices<UsersEntity, UsersClaimsEntity> extends IServices<UsersEntity> {
    FindByUserNameAsync(userName: String): Promise<UsersEntity>;
    FindByIdAsync(id: String): Promise<UsersEntity>;
    CreateUserClaimsAsync(entity: UsersClaimsEntity): Promise<UsersClaimsEntity>;
}
