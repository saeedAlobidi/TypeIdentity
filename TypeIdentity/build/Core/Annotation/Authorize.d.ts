import "reflect-metadata";
import { AuthorizeType } from "../../Idenitiy/Services/AuthorizeServices";
/**Authorize annotation check if user have permission to access this function inside class
  * @param authorizeSType authorizeSType (  Roles,Policy)
  * @param policyName    permission name such as admin or superadmin if authorizeSType Roles or read,write if authorizeSType Policy
  */
export declare function Authorize(authorizeSType: AuthorizeType, policyName: String): (target: any, propertyName: string, descriptor: TypedPropertyDescriptor<Function>) => void;
