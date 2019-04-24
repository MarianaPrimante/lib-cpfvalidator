module.exports.cpfValidate = cpfValidate;
module.exports.digitsEnd = digitsEnd;
module.exports.cpfCheck = cpfCheck;
module.exports.divisionRest = divisionRest;
module.exports.testDigit = testDigit;
module.exports.sumTotal = sumTotal;

function cpfCheck(cpf){
  return cpf.substr(0, 9).split("");
}

function divisionRest(num){
  return num % 11;
}

function testDigit(num){
  return (num < 2) ? 0 : 11 - num;
}

function digitsEnd(cpf){
  return `${cpf.charAt(9)}${cpf.charAt(10)}`;
}
 
function digitsEndTest(num1, num2){
  return `${num1}${num2}`;
}

function addMultiplicate(total){
  function resultAddMultiplicate(result, num){
    return result + (num * total--);
  }
  return resultAddMultiplicate;
}

function sumTotal(list, total){
  return list.reduce(addMultiplicate(total), 0);
}

function cpfValidate(cpfTotal){
  if (cpfTotal === "00000000000" || cpfTotal === "11111111111" || 
    cpfTotal === "22222222222" || cpfTotal === "33333333333" || 
    cpfTotal === "44444444444" || cpfTotal === "55555555555" || 
    cpfTotal === "66666666666" || cpfTotal === "77777777777" || 
    cpfTotal === "88888888888" || cpfTotal === "99999999999"){
    return false;
  }
  const cpf = cpfCheck(cpfTotal);
  const firstDigit = testDigit(divisionRest(sumTotal(cpf, 10)));
  const secondDigit = testDigit(divisionRest(sumTotal(cpf.concat(firstDigit), 11)));
  return Object.is(digitsEnd(cpfTotal), digitsEndTest(firstDigit, secondDigit));
} 