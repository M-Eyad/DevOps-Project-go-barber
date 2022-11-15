pipeline {
    agent any 

    tools { nodejs "node"}

    stages {
        stage('Startup') {
            steps {
                script {
                  bat 'cd gobarber-frontend && npm install'
                  bat 'cd gobarber-backend && npm install'
                }
            }
        }
         stage('Build') {
            steps {
                script {
                  bat 'cd gobarber-frontend && npm start'
                //   bat 'cd gobarber-backend && npm dev:server'
                }
            }
        }
         stage('Test') {
            steps {
                script {
                  bat 'cd gobarber-backend && npm test'
                }
            }
        }
         stage('Deploy') {
            steps {
                script {
                  echo 'Deploy'
                }
            }
        }
    }
}
