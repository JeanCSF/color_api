# COLOR API

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Descrição
Este projeto é uma API que retorna os nomes das cores em português. A ideia para a criação desta API surgiu da necessidade de encontrar uma fonte de cores em português gratuitamente, já que as opções disponíveis eram todas pagas. Os dados das cores foram obtidos a partir da [Lista de cores na Wikipedia](https://pt.wikipedia.org/wiki/Lista_de_cores).

## Uso
A API fornece endpoints para pesquisar o nome de uma cor a partir de seu código hexadecimal ou para listar todas as cores disponíveis.

### Endpoints:

#### GET /cor/:hex
Retorna o nome da cor correspondente ao código hexadecimal fornecido.

Exemplo de requisição:
```
GET /cor/FF0000
```

Resposta:
```json
{
  "nome": "Vermelho"
}
```

#### GET /cores
Retorna uma lista de todas as cores disponíveis, juntamente com seus códigos hexadecimais.

Exemplo de requisição:
```
GET /cores
```

Resposta:
```json
[
  {
    "nome": "Vermelho",
    "hex": "#FF0000"
  },
  {
    "nome": "Azul",
    "hex": "#0000FF"
  },
  // Outras cores...
]
```

## Contribuição
Contribuições são bem-vindas! Se você quiser adicionar mais cores, corrigir bugs ou melhorar a documentação, sinta-se à vontade para fazer um pull request.

## Licença
Este projeto está licenciado sob a [Licença MIT](LICENSE).
