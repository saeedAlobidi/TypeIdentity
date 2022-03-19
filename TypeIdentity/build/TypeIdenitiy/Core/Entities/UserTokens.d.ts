import SuperEntity from "../Common/SuperEntity";
export default abstract class UserTokens<users> extends SuperEntity {
    userId: string;
    loginProvider: string;
    name: string;
    value: string | null;
    user: users;
}
