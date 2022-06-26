# Supermercado Feliz
Trabalho da disciplina de Introdução ao desenvolvimento web (2022)

# Autores
Lucas Xavier Leite - 10783347

Rafael Meliani Velloso - 4165457

Vinicius Finke Raiter José - 9791052

# Descrição
Nosso projeto é um supermercado online, em que o usuário pode escolher produtos, adicionar a seu carrinho virtual e encomendá-los.

O código se encontra na pasta "src" do projeto. Dentro desta pasta está a pasta components com as seguintes pastas:
  - generic: apresenta as funcionalidades genéricas que são usadas constantemente no projeto, como botões, janelas de pop-up, etc.);
  - header: apresenta o cabeçalho da página;
  - page: apresenta um container de página vazio (Page.js) e uma página que mostra os resultados de uma busca (SearchResults.js);
  - product: contém a implementação de apresentação de um produto (a apresentação de um produto, funcionalidade de adicionar ao carrinho, sua janela de pop-up e a funcionalidade de mapear produtos em seções de acordo com características em comum);
  - serchbar: contém a implementação da barra de busca;
  - sidebar: contém a implementação da barra lateral, usada para navegar entre as categorias de produtos;
  - user-area: contém área de login/cadastro, botão de carrinho, e, se usuário estiver logado, as opções de menu que mostra compras anteriores, formas de pagamento, finalizar compra, opção de sair; 

Dentro da pasta src está a "raiz" da página (App.js), os dados dos produtos que estarão a venda (ProductsData.js) e alguns arquivos de teste.

# Como rodar
## Pré-requisitos
  - Node.js (18.4.0)
  - npm (8.13.1)

## No terminal
- Navegue até a pasta do projeto;
- Comando: `npm install` -> Instala os pacotes necessários para o projeto;
- Comando: `npm start` -> Inicia a execução do projeto;
