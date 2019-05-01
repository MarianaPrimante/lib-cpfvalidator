# Validação de CPF 

**Esta biblioteca se destina à validação de números de CPF para uso em aplicações web.**
Na versão atual é capaz de validar um número de CPF digitado (aparecendo true ou false), conferindo se estão sendo digitados apenas números(sem letras ou outros dígitos), com 11 dígitos(sem serem todos números idênticos), sendo os dois últimos para confirmar a validação do número do cpf.

## Como instalar:

```shell

$  npm install lib-cpfvalidator

```

## Como utilizar:

```node

> const test = require("lib-cpfvalidator");
> test.cpfValidator('38748141810')
> // returns "true"
> test.cpfValidator('11111111111')
> // returns "false"

```
