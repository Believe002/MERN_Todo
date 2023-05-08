pipeline {
  agent {
    node {
      label 'Jenkins-Slave'
    }

  }
  
  stages {
    stage('gitclone') {
      steps {
       git branch: 'main',
                credentialsId: 'Github_Token',
                url: 'https://github.com/Believe002/MERN_Todo.git'

      }
    }
    
    // stage('Node Build') {
    //   steps {
    //     nodejs(nodeJSInstallationName : 'NodeJs') {
        
    //     dir("trainee_backend/") {    
    //         sh 'pwd'
    //         sh 'npm install'
    //     }
            
    //     }
    //   }
    // }
    
    stage('Execute SonarQube Report') {
    steps {
        sh '/home/docker/workspace/sonar-scanner/bin/sonar-scanner   -Dsonar.projectKey=Node_todo   -Dsonar.sources=.   -Dsonar.host.url=http://docker.pipalia.tech:9000   -Dsonar.token=sqp_9db6875134414339983c8ea095e665fd56d9acb6 -Dsonar.login=admin -Dsonar.password=password -Dsonar.projectBaseDir=/home/docker/workspace/MERN-Stack'
      }    
    }

    stage('Build') {
      steps {
        sh 'docker-compose -f docker-compose.prod.yml down'
        sh 'docker-compose build'
      }
    }

    stage('Login') {
      steps {
        sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
      }
    }

    stage('Push-Frontend') {
      steps {
        sh 'docker tag mern-frontend:v1 mrbelieve002/mern-frontend:v${BUILD_NUMBER}'
        sh 'docker tag mern-frontend:v1 mrbelieve002/mern-frontend:latest'
        sh 'docker push mrbelieve002/mern-frontend:v${BUILD_NUMBER}'
        sh 'docker push mrbelieve002/mern-frontend:latest'
        sh 'docker rmi mern-frontend:v1'
        sh 'docker rmi mrbelieve002/mern-frontend:latest'
        sh 'docker rmi mrbelieve002/mern-frontend:v${BUILD_NUMBER}'
      }
    }

    stage('Push-Backend') {
      steps {
        sh 'docker tag mern-backend:v1 mrbelieve002/mern-backend:v${BUILD_NUMBER}'
        sh 'docker tag mern-backend:v1 mrbelieve002/mern-backend:latest'
        sh 'docker push mrbelieve002/mern-backend:v${BUILD_NUMBER}'
        sh 'docker push mrbelieve002/mern-backend:latest'
        sh 'docker rmi mern-backend:v1'
        sh 'docker rmi mrbelieve002/mern-backend:latest'
        sh 'docker rmi mrbelieve002/mern-backend:v${BUILD_NUMBER}'
      }
    }

    stage('CD'){
      steps {
        sh 'docker-compose down'
        sh 'Image=$(docker ps -aq | wc -l ) && echo "$Image" && if [ $Image -gt 0 ]; then docker rm -fv $(docker ps -aq); fi;'
        sh 'docker-compose -f docker-compose.prod.yml up -d'
        sh 'docker system prune -a --force'
      }
    }

  }
  
  environment {
    DOCKERHUB_CREDENTIALS_PSW = 'dckr_pat_GAVYIVPHT0gju3xKhdNAz1zztcE'
    DOCKERHUB_CREDENTIALS_USR = 'mrbelieve002'
      
  }
  
  post {
    always {
      cleanWs()
      sh 'docker logout'
    }

  }
}