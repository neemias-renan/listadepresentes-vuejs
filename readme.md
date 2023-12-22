# Projeto Lista de Presentes do Papai Noel em Vue.js 🎅

Este projeto em Vue.js proporciona uma experiência simples e interativa para criar e visualizar uma lista de presentes do Papai Noel. Siga os passos abaixo para configurar e executar o projeto localmente.

## Pré-requisitos 🧐

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em seu sistema antes de prosseguir.

## Instalação 🚀

1. Clone este repositório em sua máquina local:

```bash
git clone https://github.com/neemias-renan/listadepresentes-vuejs.git
```

2. Navegue até o diretório do projeto:

```bash
cd listadepresentes-vuejs 
cd presentes
```

3. Instale as dependências do projeto:

```bash
npm install
```

## Execução ▶️

Após a conclusão da instalação e configuração, execute o projeto localmente:

```bash
npm run serve
```

Visite `http://localhost:8080` em seu navegador para visualizar a lista de presentes do Papai Noel.

# Passo a Passo para Iniciar o Projeto do Zero 🏁

Para iniciar um novo projeto Vue.js, siga os passos abaixo:

1. Instale o Vue CLI globalmente:

```bash
npm install -g @vue/cli
```

2. Crie um novo projeto Vue:

```bash
vue create nome-do-projeto
```

Siga as instruções para configurar o projeto conforme suas preferências.

### Assets ✨

O diretório "variables" contém as variáveis utilizadas no CSS do projeto.

### Componentes 🧩

Foram criados três componentes para o projeto:
1) `ContainerItems.vue`
2) `ItemCard.vue`
3) `TheHeader.vue`

Esses componentes ajudam a modularizar a aplicação e facilitam a manutenção do código.

### Routes 🛣️

A configuração das rotas está definida no arquivo de rotas, indicando os caminhos das diferentes páginas da aplicação.

### Services 🌐

No diretório "services", estão as definições iniciais da API utilizando o Axios, uma biblioteca para requisições HTTP.

### Views 👀

A pasta "views" contém as páginas principais da aplicação. Inicialmente, são apresentadas a tela principal e uma tela para a criação de novos itens na lista de presentes.
