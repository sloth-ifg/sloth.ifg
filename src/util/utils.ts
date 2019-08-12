import * as CryptoJS from 'crypto-js';

export function UrlConfig(uri: string) {
    switch (uri) {
        case "dashboard":
            return "http://localhost:8088/";
        case "img":
            return "http://localhost:8088/img/";
        default:
            return "";
    }
}

export function LogConfig(uri: string) {
    switch (uri) {
        case "logs":
            return "http://localhost:8088/logs";
        case "download":
            return "http://localhost:8088/logs/download";
        default:
            return "";
    }
}

export function ManagerConfig(uri: string) {
    switch (uri) {
        case "manager":
            return "http://localhost:8088/manager";
        case "add":
            return "http://localhost:8088/manager/add";
        case "modify":
            return "http://localhost:8088/manager/modify";
        default:
            return "";
    }
}

export function percent(total: number, present: number): number {
    return present / total * 100;
}

export function passwordHash(plain: string, key: string) {
    return CryptoJS.HmacSHA256(plain, key).toString(CryptoJS.enc.Base64);
}