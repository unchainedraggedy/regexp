import Validator from '../index';

test('проверка имени состоящего из цифр', () => {
  const username = '123455';
  expect(() => Validator.validateUsername(username)).toThrow('имя пользователя должно состоять из букв латинского алфавита, цифр и символов _-. имя должно начинаться с буквы');
});

test('проверка имени, начинающегося с небуквенного символа', () => {
  const username = '_ash';
  expect(() => Validator.validateUsername(username)).toThrow('имя пользователя должно состоять из букв латинского алфавита, цифр и символов _-. имя должно начинаться с буквы');
});

test('проверка имени, в котором три цифры подряд', () => {
  const username = 'aaaoa444a';
  expect(() => Validator.validateUsername(username)).toThrow('имя пользователя не может содержать три цифры подряд');
});

test('проверка корректного имени', () => {
  const username = 'A-sh21M';
  const result = Validator.validateUsername(username);
  expect(result).toBe(username);
});

test('проверка имени, в котором три цифры подряд', () => {
  const username = 'aaaoa444a';
  expect(() => Validator.validateUsername(username)).toThrow('имя пользователя не может содержать три цифры подряд');
});
