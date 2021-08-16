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

# Consultar Pessoas (com ou sem IDs)

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
        "pessoaId": "pessoaId",
        "nome": "nome",
    },
    {
        "pessoaId": "pessoaId",
        "nome": "nome",
    }
]
```

# Consultar Pessoa pelo ID

## **GET**

```
https://parque-pessoas.herokuapp.com/v1/pessoas/id
```

## **Response**

```JSON
[
    {
        "pessoaId": "pessoaId",
        "nome": "nome",
    }
]
```

# Cadastrar Pessoa

## **POST**

```
https://parque-pessoas.herokuapp.com/v1/cadastrar-pessoa
```

## **Request Body (JSON)**

```JSON
{
  "nome": "nomeDaNovaPessoa"
}
```

# Alterar Pessoa

## **PUT**

```
https://parque-pessoas.herokuapp.com/v1/alterar-pessoa
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

## **Request Body (JSON)**

```JSON
{
  "pessoaId": "pessoaId"
}
```
