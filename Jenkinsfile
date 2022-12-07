pipeline {
    agent any 

    tools { nodejs "node"}

    stages {
        stage('Startup') {
            steps {
                script {
                  echo '>>>>> Setup for the gobarber project'
                  echo 'Installing node modules for the frontend'
                  sh 'cd gobarber-frontend && npm install'
                  echo 'Installing node modules for the backend'
                  sh 'cd gobarber-backend && npm install'
                  echo 'Done Startup Stage >>>>> All modules are up to date and installed'
                }
            }
        }
         stage('Build') {
            steps {
                script {
                  echo '>>>>> Buidling gobarber project to check and test that the project is running'
                  echo 'Starting the project'
                  sh 'cd gobarber-frontend && npm start'
                  echo 'Done building stage >>>>> Project is running with no issues'
                }
            }
        }
         stage('Test') {
            steps {
                script {
                echo '>>>>> Testing stage for gobarber project'
                echo 'Making ssh connection to the server to test the project inside a docker container'
                sh "sshpass -p me12345 ssh root@161.35.195.149 && chmod +x testing && ./testing"
                echo 'Done Testing Stage >>>>>'
                }
            }
        }
         stage('Deploy') {
            steps {
                script {
                  echo '>>>>> Deploying the project. Deploying the project on digitalocean'
                  sh 'sshpass -p me12345 ssh root@161.35.195.149 && pm2 status && chmod +x deploy && ./deploy'
                  echo 'Done Deploying stage >>>>>'
                }
            }
        }
    }
}
