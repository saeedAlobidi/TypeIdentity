import SuperEntity from "../Common/SuperEntity";
export default abstract class RoleClaims<role> extends SuperEntity {
    id: number;
    roleId: string;
    claimType: string | null;
    claimValue: string | null;
}
