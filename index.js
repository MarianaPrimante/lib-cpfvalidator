const cpfCheck = (cpf) => cpf.toString().slice(0, 9).split("");

const divisionRest = (num) => num % 11;

const testDigit = (num) => (num < 2) ? 0 : 11 - num;

const digitsEnd = (cpf) => `${cpf.toString().charAt(9)}${cpf.toString().charAt(10)}`;

const digitsEndTest = (num1, num2) => `${num1}${num2}`;

const addMultiplicate = (total) => (result, num) => result + (num * total--);

const sumTotal = (list, total) => list.reduce(addMultiplicate(total), 0);

const cpfValidator = (cpfTotal) => {
  const cpfString = cpfTotal.toString();
  if (cpfString === "00000000000" || cpfString === "11111111111" || 
    cpfString === "22222222222" || cpfString === "33333333333" || 
    cpfString === "44444444444" || cpfString === "55555555555" || 
    cpfString === "66666666666" || cpfString === "77777777777" || 
    cpfString === "88888888888" || cpfString === "99999999999") {
    return false;
  }
  const cpf = cpfCheck(cpfTotal);
  const firstDigit = testDigit(divisionRest(sumTotal(cpf, 10)));
  const secondDigit = testDigit(divisionRest(sumTotal(cpf.concat(firstDigit), 11)));
  return Object.is(digitsEnd(cpfTotal), digitsEndTest(firstDigit, secondDigit));
}; 

module.exports.cpfValidator = cpfValidator;