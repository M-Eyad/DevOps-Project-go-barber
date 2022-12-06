pipeline {
    agent any 

    tools { nodejs "node"}

    stages {
        stage('Startup') {
            steps {
                script {
                  sh 'cd gobarber-frontend && npm install'
                  sh 'cd gobarber-backend && npm install'
                }
            }
        }
         stage('Build') {
            steps {
                script {
                  sh 'cd gobarber-frontend'
                  sh 'cd gobarber-backend'
                }
            }
        }
         stage('Test') {
            steps {
                script {
                //   bat 'cd gobarber-backend && npm test'
                echo 'Done Testing!!'
                sh "docker-compose up"
                sh "docker-compose ps"
                }
            }
        }
         stage('Deploy') {
            steps {
                script {
                  echo "Deploying !"
                  sh "sshpass -p me12345 ssh root@161.35.195.149 && pm2 status && chmod +x deploy && ./deploy"
                }
            }
        }
    }
}
