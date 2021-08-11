# parque-pessoas

Microserviço de gestão de pessoas para o projeto de parque de diversão.

## **GET** - Consultar Pessoas (com ou sem IDs)

```
https://parque-pessoas.herokuapp.com/pessoas
```

### **Resposta**

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

```
https://parque-pessoas.herokuapp.com/pessoas/id
```

### **Resposta**

```JSON
[
    {
        "pessoaId": "pessoaId",
        "nome": "nome",
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

## **DELETE** - Deletar Pessoa

```
https://parque-pessoas.herokuapp.com/deletar-pessoa
```

### **Request Body (JSON)**

```JSON
{
  "pessoaId": "pessoaId"
}
```
