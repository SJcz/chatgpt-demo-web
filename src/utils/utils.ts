import CryptoJS from 'crypto-js'
const config = require("../config/config.json")

export function encrptToken() {
  const appCodeName = window.navigator.appCodeName
  const origin = window.origin
  const mingwen = `${appCodeName}|${origin}|${Date.now()}`
  const srcs = CryptoJS.enc.Utf8.parse(mingwen);
  return CryptoJS.AES.encrypt(srcs, CryptoJS.enc.Utf8.parse(config.secret_key), {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  }).toString()
}

export function uuid() {
  const s = [];
  const hexDigits = "0123456789abcdef";
  for (let i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  s[8] = s[13] = s[18] = s[23] = "-";
  return s.join("");
}