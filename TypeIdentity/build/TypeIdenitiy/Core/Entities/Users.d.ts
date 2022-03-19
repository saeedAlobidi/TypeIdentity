import SuperEntity from "../Common/SuperEntity";
export default abstract class Users<userClaims, userLogins, userTokens, roles> extends SuperEntity {
    id: string;
    name: string | null;
    age: string | null;
    userName: string | null;
    normalizedUserName: string | null;
    email: string | null;
    normalizedEmail: string | null;
    emailConfirmed: boolean;
    passwordHash: string | null;
    securityStamp: string | null;
    concurrencyStamp: string | null;
    phoneNumber: string | null;
    phoneNumberConfirmed: boolean;
    twoFactorEnabled: boolean;
    lockoutEnd: Date | null;
    lockoutEnabled: boolean;
    accessFailedCount: number;
    RoleId: string | null;
    RoleName: string | null;
}
