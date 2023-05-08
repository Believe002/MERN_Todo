# MERN Stack Docker Compose
___

## Project Overview
 - This is a MERN (MongoDB, Express, React, Node.js) stack project that allows users to perform create, read, update, and delete operations. The project has been containerized using Docker Compose for easy deployment and management of the application.

### Prerequisites
 - Docker: You need to have Docker installed on your system. You can download Docker from the official Docker website at https://www.docker.com/products/docker-desktop.

### Installation
 - Clone the repository.
``` 
   git clone https://github.com/ankitpipalia/DevOps-Git.git
```
 - Navigate to the cloned directory.
``` 
   cd DevOps-Git
```
 - Build the Docker containers using Docker Compose.
``` 
   docker-compose build
```
 
### Running the Application
 - Start the Docker containers using Docker Compose.

``` 
   docker-compose up
```
 - The MERN stack application will now be running in Docker containers. The frontend React application will be accessible at http://localhost in your web browser.
### Testing
 - You can run tests in the trainee_backend directory by accessing the backend container and running the tests inside the container. Follow these steps:
 - Access the backend container using Docker Compose.
``` 
   docker-compose exec backend bash
```
 - Inside the container, run the tests using the npm test command.
```
npm test
```
 - The tests will be executed inside the container and the results will be displayed in the terminal.
## Images

![Home Page](https://github.com/ankitpipalia/DevOps-Git/blob/master/images/homepage.png)
![List Page](https://github.com/ankitpipalia/DevOps-Git/blob/master/images/listpage.png)
![Update Page](https://github.com/ankitpipalia/DevOps-Git/blob/master/images/updatepage.png)

## Port Mapping

 - The following ports are used by the Docker containers in this project:
   - 80: Nginx (for frontend access)
   - 3000: React frontend application
   - 4000: Express backend application
   - 27017: MongoDB

 - Make sure these ports are available and not being used by other processes on your system. You can update the port mappings in the docker-compose.yml file if needed.
 - That's it! You now have the MERN stack application running in Docker containers using Docker Compose. You can access the application in your web browser and start using its features. Happy coding!
