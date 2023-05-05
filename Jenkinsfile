pipeline {
  agent {
    node {
      label 'Jenkins-Slave'
    }

  }
  stages {
    stage('gitclone') {
      steps {
        git 'https://github.com/ankitpipalia/MERN-Stack.git'
      }
    }

    stage('Build') {
      steps {
        sh 'docker-compose -f docker-compose.prod.yml down'
        sh 'docker-compose -f docker-compose.build.yml build'
      }
    }

    stage('Login') {
      steps {
        sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
      }
    }

    stage('Push-Frontend') {
      steps {
        sh 'docker tag mern-stack_frontend babodesi/mern-frontend:v${BUILD_NUMBER}'
        sh 'docker tag mern-stack_frontend babodesi/mern-frontend:latest'
        sh 'docker push babodesi/mern-frontend:v${BUILD_NUMBER}'
        sh 'docker push babodesi/mern-frontend:latest'
      }
    }

    stage('Push-Backend') {
      steps {
        sh 'docker tag mern-stack_backend babodesi/mern-backend:v${BUILD_NUMBER}'
        sh 'docker tag mern-stack_backend babodesi/mern-backend:latest'
        sh 'docker push babodesi/mern-backend:v${BUILD_NUMBER}'
        sh 'docker push babodesi/mern-backend:latest'
        sh 'docker rmi babodesi/mern-backend:v${BUILD_NUMBER}'
        sh 'docker rmi babodesi/mern-frontend:v${BUILD_NUMBER}'
      }
    }

    stage('CD'){
      steps {
        sh 'docker-compose -f docker-compose.prod.yml up -d'
      }
    }

  }
  environment {
    DOCKERHUB_CREDENTIALS_PSW = 'ankit@2002'
    DOCKERHUB_CREDENTIALS_USR = 'babodesi'
      
  }
  post {
    always {
      cleanWs()
      sh 'docker logout'
    }

  }
}