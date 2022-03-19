import { CookiesConfiguration } from "../Common/CookiesModel";
export default class Encryption {
    /**
     * @param CookiesConfiguration Cookies Configuration  information
     */
    private CookiesConfiguration;
    /**
     * @param CookiesConfiguration Cookies Configuration  information
     */
    constructor(CookiesConfiguration: CookiesConfiguration);
    /**crypto
    * @param data any data Type
    * @returns  encrypt data
    */
    crypto: (data: any) => any;
    /**decrypt
    * @param data any data Type
    * @returns  decrypt data
    */
    decrypt: (data: any) => any;
}
