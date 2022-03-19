import SuperEntity from "../Common/SuperEntity";
export default abstract class Roles<user, roleClaims> extends SuperEntity {
    id: string;
    name: string | null;
    normalizedName: string | null;
    concurrencyStamp: string | null;
}
