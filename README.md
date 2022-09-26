<h1 align="center">Sistemas de artigos</h1>
<p align="center">Backend feito em NodeJS e EJS</p>
<h4 align="center"> 
    🟢  Projeto concluído  🟢
</h4>
<h2 align="center">
    <img src="https://img.shields.io/static/v1?label=Node&message=Working&color=#430098&style=flat&logo=nodejs"/>
    </h2>

Tabela de conteúdos
=================
<!--ts-->
   * [Sobre](#sobre)
   * [Utilizando](#Utilizando)
   * [Tecnologias](#tecnologias)
   * [Créditos](#Créditos)
<!--te-->

<h1>Sobre</h1>
<p>O backend é um CRUD para um sistema de artigos no qual os administradores conseguem adicionar, editar e remover tanto artigos, quanto as categorias, e os usuários podem ler esses artigos.
  </br>
<h1>Como usar</h1>
<h2>Pré-requisitos</h2>
<img src="https://www.opus-software.com.br/wp-content/uploads/2018/09/nodejs.jpg" width = "250px"></br>
<p>Antes de começar, você deve ter instalado em sua máquina o Node. Podendo ser baixado através desse <a href = "https://nodejs.org/en/download/">link</a>, e também o MySql que pode ser baixado <a href = "https://www.mysql.com/products/workbench/">aqui</a>.</br>
<p>Após ter feito a instalação do MySql, abra o workbench e crie um banco de dados chamado</br>

```bash
guiapress
``` 
<p>E troque, no código, os atributos "root" e "root" para as suas credenciais do banco:</br>

```bash
database/database.js
``` 


<h2>Utilizando</h2>
<p>Após ter feito a instalação, abra o programa em seu editor de código e coloque-o para rodar através do terminal com:</br>

```bash
nodemon index.js
``` 
Feito isso, a aplicação estará rodando localmente. Acesse a URL:

```bash
nodemon index.js
``` 
Feito isso, você pode verificar se está tudo certo criando uma nova requisição @Get, ponha o "Body" como "Json" e coloque a seguinte url:</br>

```bash
http://localhost:8090/
``` 
 e clique para logar no canto superior direito para poder administrar as categorias e artigos do seu site. Use a rota abaixo, colando na url do site, para criar um administrador. Em seguida, logue com essa conta.
 
 ```bash
/admin/user/create
``` 


<h3>Imagens</h3></br>
<div align = "center">
<img src="https://user-images.githubusercontent.com/63808405/192182040-68917994-763c-4bb6-bd03-d71ae5af6b08.png" width = "750px">
<img src="https://user-images.githubusercontent.com/63808405/192182047-f854d494-0b14-4f46-ae8d-230817d3e86b.png" width = "750px">
<img src="https://user-images.githubusercontent.com/63808405/192182050-f973f261-0b99-4215-90bb-4fbf9372aacc.png" width = "750px">
<img src="https://user-images.githubusercontent.com/63808405/192182053-4313831d-76cc-45cc-820b-50532376a0e2.png" width = "750px">
<img src="https://user-images.githubusercontent.com/63808405/192182054-f6b4a260-f8c0-4ee1-bb72-39c58fefcc91.png" width = "750px">
<img src="https://user-images.githubusercontent.com/63808405/192182055-3bd97360-c090-4258-90be-1746d18eba1c.png" width = "750px">
  </div>

<h1>Tecnologias</h1>
- NodeJS</br>
- TinyMCE</br>
- Sequelize</br>
- EJS</br>
- Slugify</br>
- Express sessions</br>


<h1>Créditos</h1>

---

<a href="https://www.linkedin.com/in/valter-gabriel">
 <img style="border-radius: 50%;" src="https://user-images.githubusercontent.com/63808405/171045850-84caf881-ee10-4782-9016-ea1682c4731d.jpeg" width="100px;" alt=""/>
 <br />
 <sub><b>Valter Gabriel</b></sub></a> <a href="https://www.linkedin.com/in/valter-gabriel" title="Linkedin">🚀</a>
 
Feito por Valter Gabriel 👋🏽 Entre em contato!

[![Linkedin Badge](https://img.shields.io/badge/-Gabriel-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/valter-gabriel/)](https://www.linkedin.com/in/valter-gabriel/) 



