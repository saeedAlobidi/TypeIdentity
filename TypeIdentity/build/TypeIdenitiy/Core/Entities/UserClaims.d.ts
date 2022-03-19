import SuperEntity from "../Common/SuperEntity";
export default abstract class UserClaims<user> extends SuperEntity {
    id: number;
    userId: string;
    claimType: string | null;
    claimValue: string | null;
    user: user;
}
