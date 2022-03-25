# :beers: Resilia-PUB API

O Resilia-PUB é uma API Rest de gerenciamento de PUBS construída em colaboração com [@Matheus Camba](https://github.com/MatheusCamba), [@Hugo Parada](https://github.com/haparada9), [@Milena Souza](https://github.com/Milena2712) e [@Arcenio Souza](https://github.com/ArcenioSouza). Cada colaborador ficou responsável por criar uma instância do banco de dados da API e posteriormente iremos usar os conhecimentos obtidos para juntarmos todas as instâncias e criar os seus relacionamentos. Com essa aplicação você será capaz de salvar, atualizar, pesquisar e deletar registros das comidas do PUB.

# :hammer: Ferramentas utilizadas

<div style="display: inline_block" align="center">
   <img align="center" width='50px' height='50px' src='https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/nodejs/nodejs-original.svg'>
   <img align="center" width='50px' height='50px' style="margin: 5px" src='https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/npm/npm-original-wordmark.svg'>
   <img align="center" width='50px' height='50px' style="margin: 5px" src='https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg'>
   <img align="center" width='50px' height='50px' style="background-color: #FFF; margin: 5px" src='https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/markdown/markdown-original.svg'>
   <img align="center" width='100px' height='50px' style="background-color: #FFF; margin: 5px" src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/SQLite370.svg/382px-SQLite370.svg.png'>
   <img align="center" width='50px' height='50px' style="margin: 5px" src='https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/vscode/vscode-original.svg'>
   <img align="center" width='50px' height='50px' style="margin: 5px" src='https://seeklogo.com/images/I/insomnia-logo-A35E09EB19-seeklogo.com.png'>
</div>
<br/>

# :books: Como utilizar a aplicação

### **1 - Faça o clone do repositório**

Para fazer o clone desse repositório basta copiar o código abaixo e colar em seu terminal.
```
git clone https://github.com/Gicelle-sena/comidas-pub.git
```

### **2 - Instale as dependencias necessárias**

Para realizar a instalação das dependencias necessárias, entre na pasta do projeto, e, no terminal, execute o comando abaixo:
```
npm install
```

### **3 - Execute a aplicação**

Para executar a aplicação basta executar o comando abaixo em seu terminal.
```
npm start
```
**Observação:** Essa aplicação será executada por padrão na porta 3000 do seu localHost, caso essa porta esteja sendo utilizada por outra aplicação basta mudar o valor da variável 'port' do arquivo 'app.js' para um valor de porta disponível em seu sistema.

# Rotas da API
 ```
    GET - Buscar todas as comidas http://localhost:3000/comidasBuscar/:id
    GET - Buscar apenas um funcionário por ID http://localhost:3000/comidas/:id
	POST - Salvar/Criar uma comida no banco http://localhost:3000/comidas/:id
	PUT - Atualizar um registro http://localhost:3000/atualizar/:id
	DELETE - Deletar um registro http://localhost:3000/deletar/:id
   ```
 # RESPONSE
    
   ```
  
  [
	{
		"id": 2,
		"titulo": "Coxinha",
		"descricao": "Frango com catupiry",
		"preco": 3
	}
]
  
  ```
