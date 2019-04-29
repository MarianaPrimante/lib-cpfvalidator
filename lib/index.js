const cpfCheck = (cpf) => cpf.substr(0, 9).split("");

const divisionRest = (num) => num % 11;

const testDigit = (num) => (num < 2) ? 0 : 11 - num;

const digitsEnd = (cpf) => `${cpf.charAt(9)}${cpf.charAt(10)}`;

const digitsEndTest = (num1, num2) => `${num1}${num2}`;

const addMultiplicate = (total) => (result, num) => result + (num * total--);

const sumTotal = (list, total) => list.reduce(addMultiplicate(total), 0);

const cpfValidator = (cpfTotal) => {
  if (cpfTotal === "00000000000" || cpfTotal === "11111111111" || 
    cpfTotal === "22222222222" || cpfTotal === "33333333333" || 
    cpfTotal === "44444444444" || cpfTotal === "55555555555" || 
    cpfTotal === "66666666666" || cpfTotal === "77777777777" || 
    cpfTotal === "88888888888" || cpfTotal === "99999999999") {
    return false;
  }
  const cpf = cpfCheck(cpfTotal);
  const firstDigit = testDigit(divisionRest(sumTotal(cpf, 10)));
  const secondDigit = testDigit(divisionRest(sumTotal(cpf.concat(firstDigit), 11)));
  return Object.is(digitsEnd(cpfTotal), digitsEndTest(firstDigit, secondDigit));
}; 

module.exports.cpfValidator = cpfValidator;