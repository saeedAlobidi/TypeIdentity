import SuperEntity from "../Common/SuperEntity";
export default abstract class UserLogins<user> extends SuperEntity {
    loginProvider: string;
    providerKey: string;
    providerDisplayName: string | null;
    userId: string;
    user: user;
}
