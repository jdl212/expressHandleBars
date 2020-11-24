# EXPRESS HANDLEBARS BURGERS

## Eat-Da-Burger!
    -   This app allows users to devour existing burgers and add new burgers.
    -   This app uses Node JS and ExpressJs Framework    

## Technologies / Libraries used:
    -   NodeJS
    -   Express JS
    -   method-override
    -   MySql
    -   Express HandleBars
    -   bootstraps 4 
    -   fontawesome 5

## File Structures:
    .
    ├── config
    │   ├── connection.js
    │   └── orm.js
    ├── controllers
    │   └── routes.js
    ├── db
    │   ├── schema.sql
    │   └── seeds.sql
    ├── models
    │   └── burger.js
    ├── package.json
    ├── package-lock.json
    ├── public
    │   └── assets
    │       ├── css
    │       └── image
    │           └── hamburger.png
    ├── README.md
    ├── server.js
    └── views
        ├── index.handlebars
        └── layouts
            └── main.handlebars

10 directories, 13 files

## Config
    -   Config folder contains configuration details like DB connections and ORM (OBJECT RELATIONAL MAPPING)

## Controllers
    -   Controllers folder use to define various controllers which will handle the url and as per url return response and perform operations.
    - 	We have router.js as our main and only controller.
    -   This router.js handles all the functionality in our app from listing all burgers to modify burgers and add new burgers.

## DB
    -   We are using the MYSQL DB
    -   The connection details need to be put in config/connection.js 

## Models
    -   We will be using 1 model burger.js which has all the basic ORM operation i.e create update select

## Assets
    -   We are using assets/image/hamburger.png for the image which is shown in index page

## Views
    -   The layout has base view main.handlebars which contains css and js library
    -   The layout index.handlebars has the code which shows the index page/view.

## package.json
    -   Node package manager used this a library info for the project
    -   We run `npm install` too install all the packages    
    -   package.json contains the start script
    -   npm start to start the application

## server.js 
    - Server js file which is used to start the application and contains all the details like PORT etc.

## GIT
    - We have used the github for version control
    - Version control is a way in which we have track/history of all the changes and bugs features tracking facility
    - Steps to add the local code to github
        -   1. Create a repository in github using browser
        -   2. In local run command `git init` to initialize the repository with git
        -   3. Run command `git remote add origin URL_OF_THE_REPO_CREATED.git` to link local files to just created repo in github.com from browser.
        -   4. Run command `git add .` to add all the files in git.
        -   5. Run command ` git commit -m "message of commit"` to commit the local changes.
        -   6. Run command `git push origin master` to push the local files to github server.
        -   7. Enter username and password to verify and push changes to github server.

