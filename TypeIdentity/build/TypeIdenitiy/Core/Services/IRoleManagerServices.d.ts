import IServices from "./IServices";
export default interface IRoleManagerServices<RolesEntity, RolesEntityClaimsEntity> extends IServices<RolesEntity> {
    addPermisstionAsync(entity: RolesEntityClaimsEntity): Promise<RolesEntityClaimsEntity>;
    getRolesByNameAsync(name: String): Promise<RolesEntity>;
}
