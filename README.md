# parque-pessoas

Microserviço utilizando Express para gestão de pessoas.

## **GET** - Consultar Pessoas

```
https://parque-pessoas.herokuapp.com/pessoas
```

### **Resposta**

```JSON
[
    {
        "_id": "_id",
        "pessoaId": "pessoaId",
        "nome": "nome",
        "__v": 0
    },
    {
        "_id": "_id",
        "pessoaId": "pessoaId",
        "nome": "nome",
        "__v": 0
    }
]
```

```
https://parque-pessoas.herokuapp.com/pessoas/:nome
```

### **Resposta**

```JSON
[
    {
        "_id": "_id",
        "pessoaId": "pessoaId",
        "nome": "nome",
        "__v": 0
    },
    {
        "_id": "_id",
        "pessoaId": "pessoaId",
        "nome": "nome",
        "__v": 0
    }
]
```

## **POST** - Cadastrar Pessoa

```
https://parque-pessoas.herokuapp.com/cadastrar-pessoa
```

### **Request Body (JSON)**

```JSON
{
  "nome": "nomeDaNovaPessoa"
}
```

## **PUT** - Alterar Pessoa

```
https://parque-pessoas.herokuapp.com/alterar-pessoa
```

### **Request Body (JSON)**

```JSON
{
  "pessoaId": "pessoaId",
  "nome": "novoNomeDaPessoa"
}
```

## **DELETE**

```
https://parque-pessoas.herokuapp.com/deletar-pessoa
```

### **Request Body (JSON)**

```JSON
{
  "pessoaId": "pessoaId"
}
```
