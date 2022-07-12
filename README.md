# CRUD com Spring Boot e Angular

Esse projeto é "quase" um CRUD, em que foi criado uma API REST com o Spring Boot que apenas salva usuários em um Banco de Dados H2, que guarda os dados na memória, ou seja, eles são apagados ao finalizar a execução. Esses usuários também podem ser buscados no BD via API. Para criar e listar esses usuários foi criada uma aplicação Angular com apenas essas duas opções, além de permitir filtrar os usuários listados na tela.

## O que é necessário

Para executar o projeto é preciso dos seguintes programas:
- JDK 8;
- Maven 3.8.6;
- Node.JS 16.16.0 (e npm);

É necessário ainda, clonar o projeto do GitHub num diretório de sua preferência:

```shell
cd "diretorio de sua preferencia"
git clone https://github.com/barbosa-vinicius/crud_springboot_angular/
```

## Como rodar o projeto - API

Acesse o diretório da API, baixe as dependências e então execute a aplicação

```shell
cd crud_springboot_angular/morpheusUsers
mvn clean install
mvn spring-boot:run
```

Você também pode abrir o diretório da API no IntelliJ ou Eclipse e executar a aplicação.

## Como rodar o projeto - Front end

Acesse o diretório do Front End, baixe as dependências e então execute a aplicação

```shell
cd crud_springboot_angular/morpheusUsers-app
npm i
npm start
```

## Testar a aplicação

Agora que ambos os módulos estão rodando, basta abrir o navageador de internet e acessar.
- [Acessar Aplicação](http://localhost:4200)