export default interface ISignInManagerServices<UsersEntity, RolesEntityClaimsEntity> {
    SignInAsync(user: UsersEntity, isPersistent: Boolean): any;
    SignOutAsync(): any;
}
