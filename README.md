# Validação de CPF v.1.0.0

**Esta biblioteca se destina à validação de números de CPF para uso em aplicações web.**
Na versão atual é capaz de validar um número de CPF digitado (aparecendo true ou false), conferindo se estão sendo digitados apenas números(sem letras ou outros dígitos), com 11 dígitos(sem serem todos números idênticos), sendo os dois últimos para confirmar a validação do número do cpf.

## Como instalar:

```shell

$  npm install lib-cpfvalidator

```

## Como utilizar:

```node

> const cpfValidator = require("lib-cpfvalidator");
> cpfValidator('38748141810'))
> // returns "true"
> cpfValidator('11111111111'))
> // returns "false"

```
