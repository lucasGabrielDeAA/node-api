NodeJS's API created for knowledge porpouses

# node-api

## Installing [NodeJS](https://nodejs.org/en/)

You should install NodeJS using a package manager, in the NodeJS's site, you have this option.

After installation, run the following command to check the version installed.

```
node -v
```

To start a NodeJS API, run the following commands.

```
mkdir <YOUR_API_NAME> && cd <YOUR_API_NAME>
```

The following command will generate the file's estructure of a API in the directory created and acessed above.

```
npm init -y
```

## Preparing the environment

# Docker & MongoDb

Follow the installation steps according your platform, at the [Docker](https://docs.docker.com/install/) documentation. After docker's installations, you need to run a mondogb's rom in the docker's environment. And enable the docker port to listen to real port commands. Running the following command.

```
docker run --name <MONGO_DB_NAME> -p 27017:27017 -d mongo
```

 To manage your mongoDB's environment, it's recomended to use the [Robo3T](https://robomongo.org/) software. Just download it, and run it, to connect it to yours mongo's docker rom.

 Note: Remember to always run your mongo's rom before start Robo3T, for this, use the following command.

 ```
 docker start <MONGO_DB_NAME>
 ```

 After all, you just need to install, the application's dependencies.

 ```
 yarn install
 ```

 ## Executing the application

 This application uses the [Nodemon](https://www.npmjs.com/package/nodemon) dependency, to run the application, you just need to run the following command to start the application, using nodemon to listen all the code's update.

 ```
 yarn run dev
 ```

 ## Accessing the application

 To access the ```GET```'s requests, you can use the browser. But, to make ```POST, PUT, DELETE``` request you should use some software for this. I choose to use the [PostMan](https://www.getpostman.com/), but you can use your favorite software for this. Accessing the following url.

 ```
 localhost:3001/api/products
 ```

