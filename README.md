# This is my React/Express JS starter Pack with DB (MySQL)

> Express.js____React.js____MySQL

---

Server Dependancies :

* Nodemon
* Concurrently
* Mysql2    
* Sequelize

---

Client Dependancies :

* Webpack
* Babel
* Eslint
* Sass

---

Run command `yarn install / npm install` into both Server & Client Forlder

---

In server folder, add a config files named **config.json**: 

```
{
  "development": {
    "username": "root",
    "password": "password",
    "database": "dbname",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "test": {
    "username": "root",
    "password": "password",
    "database": "dbname",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "production": {
    "username": "root",
    "password": "password",
    "database": "dbname",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  }
}
```


