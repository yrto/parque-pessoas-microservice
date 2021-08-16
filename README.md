# parque-pessoas

Microserviço para gestão de pessoas em um parque de diversão. Projeto do módulo de Express do curso Web Full-Stack da Let's Code. Bibliotecas utilizadas:

- express
- express-validation
- axios
- mongoose
- nanoid
- nodemon
- dotenv
- winston

# Consultar todas as pessoas

## **GET**

```
https://parque-pessoas.herokuapp.com/v1/pessoas
```

## **Request Headers**

```
Authorization | Token
```

## **Response**

```JSON
[
  {
    "pessoaId": String,
    "nome": String,
    "idade": Number,
    "meiaEntrada": Boolean
  },
  ...
]
```

# Consultar pessoa pelo ID

## **GET**

```
https://parque-pessoas.herokuapp.com/v1/pessoas/id
```

## **Response**

```JSON
{
    "pessoaId": String,
    "nome": String,
    "idade": Number,
    "meiaEntrada": Boolean
}
```

# Cadastrar Pessoa

## **POST**

```
https://parque-pessoas.herokuapp.com/v1/cadastrar-pessoa
```

## **Request Headers**

```
Authorization | Token
```

## **Request Body (JSON)**

```JSON
{
  "nome": String,
  "idade": Number,
  "meiaEntrada": Boolean
}
```

# Alterar Pessoa

## **PUT**

```
https://parque-pessoas.herokuapp.com/v1/alterar-pessoa
```

## **Request Headers**

```
Authorization | Token
```

## **Request Body (JSON)**

```JSON
{
  "pessoaId": "pessoaId",
  "nome": "novoNomeDaPessoa"
}
```

# Deletar Pessoa

## **DELETE**

```
https://parque-pessoas.herokuapp.com/v1/deletar-pessoa
```

## **Request Headers**

```
Authorization | Token
```

## **Request Body (JSON)**

```JSON
{
  "pessoaId": String
}
```
