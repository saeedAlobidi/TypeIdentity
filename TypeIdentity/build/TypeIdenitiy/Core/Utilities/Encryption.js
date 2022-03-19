"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CryptoJS = require("crypto-js");
class Encryption {
    /**
     * @param CookiesConfiguration Cookies Configuration  information
     */
    constructor(CookiesConfiguration) {
        /**crypto
        * @param data any data Type
        * @returns  encrypt data
        */
        this.crypto = (data) => CryptoJS.AES.encrypt(JSON.stringify(data), this.CookiesConfiguration.getSecretKey()).toString();
        /**decrypt
        * @param data any data Type
        * @returns  decrypt data
        */
        this.decrypt = (data) => JSON.parse(CryptoJS.enc.Utf8.stringify(CryptoJS.AES.decrypt(data, this.CookiesConfiguration.getSecretKey())));
        this.CookiesConfiguration = CookiesConfiguration;
    }
}
exports.default = Encryption;
//# sourceMappingURL=Encryption.js.map