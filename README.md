<h1 align="center">Article Systems</h1>
<p align="center">Backend made in NodeJS and EJS</p>
<h4 align="center">
    🟢 Project completed 🟢
</h4>
<h2 align="center">
    <img src="https://img.shields.io/static/v1?label=Node&message=Working&color=#430098&style=flat&logo=nodejs"/>
    </h2>

table of contents
===================
<!--ts-->
   * [About](#about)
   * [Using](#Using)
   * [Technologies](#technologies)
   * [Credits](#Credits)
<!--te-->

<h1>About</h1>
<p>The backend is a CRUD for an article system where admins can add, edit and remove both articles and categories, and users can read those articles.
  </br>
<h1>How to use</h1>
<h2>Prerequisites</h2>
<img src="https://www.opus-software.com.br/wp-content/uploads/2018/09/nodejs.jpg" width = "250px"></br>
<p>Before you begin, you must have installed Node. Downloadable via this <a href="https://nodejs.org/en/download/">link</a>, and also MySql downloadable <a href="https://www.mysql .com/products/workbench/">here</a>.</br>
<p>After installing MySql, open the workbench and create a database called</br>

```bash
guiapress
```
<p>And change the "root" and "root" attributes in the code to your bank credentials:</br>

```bash
database/database.js
```


<h2>Using</h2>
<p>After installing, open the program in your code editor and run it through the terminal with:</br>

```bash
nodemon index.js
```
Once this is done, the application will be running locally. Access the URL:

```bash
nodemon index.js
```
Once this is done, you can check if everything is ok by creating a new @Get request, put the "Body" as "Json" and put the following url:</br>

```bash
http://localhost:8090/
```
 and click to login in the upper right corner to manage your site's categories and articles. Use the route below, pasting in the site url, to create an admin. Then log in with that account.
 
 ```bash
/admin/user/create
```


<h3>Images</h3></br>
<div align="center">
<img src="https://user-images.githubusercontent.com/63808405/192182040-68917994-763c-4bb6-bd03-d71ae5af6b08.png" width = "750px">
<img src="https://user-images.githubusercontent.com/63808405/192182047-f854d494-0b14-4f46-ae8d-230817d3e86b.png" width = "750px">
<img src="https://user-images.githubusercontent.com/63808405/192182050-f973f261-0b99-4215-90bb-4fbf9372aacc.png" width = "750px">
<img src="https://user-images.githubusercontent.com/63808405/192182053-4313831d-76cc-45cc-820b-50532376a0e2.png" width = "750px">
<img src="https://user-images.githubusercontent.com/63808405/192182054-f6b4a260-f8c0-4ee1-bb72-39c58fefcc91.png" width = "750px">
<img src="https://user-images.githubusercontent.com/63808405/192182055-3bd97360-c090-4258-90be-1746d18eba1c.png" width = "750px">
  </div>

<h1>Technologies</h1>
- NodeJS</br>
- TinyMCE</br>
- Sequelize</br>
- EJS</br>
- Slugify</br>
- Express sessions</br>


<h1>Credits</h1>

---

<a href="https://www.linkedin.com/in/valter-gabriel">
 <img style="border-radius: 50%;" src="https://user-images.githubusercontent.com/63808405/171045850-84caf881-ee10-4782-9016-ea1682c4731d.jpeg" width="100px;" alt=""/>
 <br />
 <sub><b>Valter Gabriel</b></sub></a> <a href="https://www.linkedin.com/in/valter-gabriel" title="Linkedin">🚀</ a>
 
Made by Valter Gabriel 👋🏽 Get in touch!

[![Linkedin Badge](https://img.shields.io/badge/-Gabriel-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/valter-gabriel/ )](https://www.linkedin.com/in/valter-gabriel/)
