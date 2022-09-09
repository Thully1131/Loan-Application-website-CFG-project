# Loan-Application-website-CFG-project

The LoanApplication project is a full stack webapplication. The front-end of the application is done in React Js(Html, Css and Javascript). The back-end is also in React Js(Javascript). For database we used MYSQL db.

Instructions to run the Project:

After cloning the Git Repository into local machine, open CfgGroup6FinalProject in the visual studio code.

1. Open the path till project-frontend in visual studio terminal, and run the project-frontend using the command "npm start".
2. Open the path till project-backend in new terminal, and run the project-backend using the command "node index.js".
3. Open the path till project-frontend in another new terminal and run the test cases using the command "npm test". After it starts running, click on 'a' to run all test cases.
4. For database connection, we have to create a new database and then tables for our project. The queries for db creation and tables creation can be found in    DBProperties.sql file in the git repository.
5. The DB connection properties like username,host, password are stated in index.js file in project-backend. To run the project, we have to change them accordingly to your machine's sql properties. If you want to change your db username and password to root you can run the following query in workbench. 
              --  ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root' --
6. Once the connection has been made, open browser and give the url localhost:3000, our project will be loaded under following url.
7. As you are running the project for the first time, user has to be created first and then login. So using Signup page create a new user and once you create it you can then try to login with the username and password.
8. For the manager login, by default the username= "Admin" and password= "12345".
