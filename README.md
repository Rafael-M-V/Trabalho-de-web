# Supermercado Feliz
Trabalho da disciplina de Introdução ao desenvolvimento web (2022)

# Autores
Lucas Xavier Leite - 10783347

Rafael Meliani Velloso - 4165457

Vinicius Finke Raiter José - 9791052

# 1. Requisitos
 Nosso projeto é um supermercado online, em que o usuário pode escolher produtos, adicionar a seu carrinho virtual e encomendá-los.
 Existem dois tipos de usuários: cliente e administrador. O cliente é alguém que pode desfrutar dos serviços do mercado e o admin é um cliente com privilégios (pode alterar dados do site).

## 1.1. Funcionalidades implementadas
### Cliente
1. Criar conta;
2. Fazer login;
3. Fazer logout;
4. Buscar por produto;
5. Ver descrição de produto;
6. Adicionar produto ao carrinho;
7. Editar carrinho (remover produto, alterar sua quantidade);
8. Fazer pagamento;

### Administrador
1. Funcionalidades de cliente;
2. Adicionar produto a venda;
3. Excluir produto a venda;
4. Editar produto (preço, desconto, descrição, etc.);
5. Editar site (produtos em destaque, etc.)
6. Excluir contas de clientes;

## 1.2. Diagrama de Navegação
![Diagrama](mockup/diagrama/diagrama.jpg "Diagrama de navegação")

## 1.3. Dados que serão salvos no servidor
### Cliente
1. Nome;
2. Email;
3. Senha criptografada;
4. Endereço;
5. Privilégios;

### Produto
1. Descrição;
2. Preço unitário;
3. Quantidade em estoque;
4. Unidade;
5. Valor de desconto;
6. Categorias: determinam o tipo de produto (perecível, não perecível, higiene, limpeza);
7. Tags: servem para agrupar produtos de diferentes formas (saudáveis, para o dia-a-dia, frutas, frios, etc.);

# 2. Organização do código
O código se encontra na pasta `src` do projeto. Dentro desta pasta está a pasta components com as seguintes pastas:
  - `generic`: apresenta as funcionalidades genéricas que são usadas constantemente no projeto, como botões, janelas de pop-up, etc.);
  - `header`: apresenta o cabeçalho da página;
  - `page`: apresenta um container de página vazio (`Page.js`) e uma página que mostra os resultados de uma busca (`SearchResults.js`);
  - `product`: contém a implementação de apresentação de um produto (a apresentação de um produto, funcionalidade de adicionar ao carrinho, sua janela de pop-up e a funcionalidade de mapear produtos em seções de acordo com características em comum);
  - `serchbar`: contém a implementação da barra de busca;
  - `sidebar`: contém a implementação da barra lateral, usada para navegar entre as categorias de produtos;
  - `user-area`: contém área de login/cadastro, botão de carrinho, e, se usuário estiver logado, as opções de menu que mostra compras anteriores, formas de pagamento, finalizar compra, opção de sair; 

Existe uma pasta `server` contendo as funcionalidades necessárias para a criação e execução do MongoDB, utilizamos a arquitetura MVC Web e temos uma distinção interna dentro dessa pasta sendo:
  - `Controllers`: controladoras contendo as funções que são executadas dentro do banco, como buscas, adições e remoções;
  - `Models`: pasta que possui os esquemas de dados de produtos e usuários;
  - `Routes`: contém as rotas que serão utilizadas para operações internas de clientes e produtos, que executam as chamadas de acordo;

Dentro da pasta src está a "raiz" da página (`App.js`), os dados dos produtos que estarão a venda podem vir de dois locais, pelo banco de dados ou em uma versão local em `ProductsData.js`.

Avisos:
1. as imagens upadas não funcionarão em ambiente de desenvolvimento
2. a busca por id tem precedência em relação à busca por nome, então deve-se apagar o id para se buscar por nome

# 3. Procedimentos de execução
## 3.1. Pré-requisitos
  - Node.js (>=16.15.1);
  - npm (>=8.5.5);
  - Arquivo `.env` presente na pasta server;

## 3.2. No terminal
- Navegue até a pasta do projeto;
- Comando: `npm install` -> Instala os pacotes necessários para o projeto;
- Acesse a pasta `server`;
- Comando: `npm start` -> Inicia a execução do banco de dados;
- Em outro terminal, acesse a raiz do projeto;
- Comando `npm start` -> Inicia a execução do projeto;

# 4. Funcionalidade especial
Nossa aplicação conta com uma barra capaz de realizar buscas por diferentes produtos, o usuário não precisa saber exatamente o nome daquilo que está procurando pois a barra é equipada para realizar buscas apenas com partes do nome de um produto (substrings). A barra de busca tem acesso ao banco de dados para realizar suas funções, mas por conta disso não é capaz de reconhecer caracteres especiais como letras acentuadas.
