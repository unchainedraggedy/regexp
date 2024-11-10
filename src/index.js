export default class Validator {
  static validateUsername(username) {
    const isValid = /^[^-_\d][\w-]*[^-_\d]$/.test(username);
    if (!isValid) {
      throw new Error('имя пользователя должно состоять из букв латинского алфавита, цифр и символов _-. имя должно начинаться с буквы');
    }
    if (/\d\d\d/.test(username) === true) {
      throw new Error('имя пользователя не может содержать три цифры подряд');
    }
    return username;
  }
}
