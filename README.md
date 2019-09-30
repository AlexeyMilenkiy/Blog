# Blog

The app is a blog where you can register users, create posts and subscribe to registered users.


## Getting Started
You need to download this project to run it locally.
To launch it you must install dependencies and then launch the app. First you need to set the data base.

### Prerequisites

The app uses Node Js and PostgreSQL data bases. 
If you don't have its then just follow the link and install its 
[NodeJs](https://nodejs.org), 
[PostrgeSQL](https://www.postgresql.org/).


### Installing 

#### Backend part
Proceed to `server` directory and execute to install dependencies.

```
npm install
```
Then you need to set data base configuration in `server/config/config.json` directory. 
```json
{
  "development": {
    "username": "user name",
    "password": "****",
    "database": "database name",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "define": {
      "timestamps": false
    }
  }
}

```
You only need to create the data base, the tables will be created automatically.

Next launch the migrations. 

```
npx sequelize-cli db:migrate
```
And than launch the server.

```
npm start
```

The server will be launched by [localhost:3000](http://localhost:3000), link.

#### Frontend part

Then you have to launch <strong>Angular serve</strong>. 
Proceed to `client` directory, select 
```
npm install
```
and then launch the app with 
```
npm start
```
The app is available by its [localhost:4200](http://localhost:4200), link.


