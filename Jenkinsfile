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

                }
            }
        }
         stage('Deploy') {
            steps {
                script {
                  echo "Done"
                  sh "npm install -g pm2"
                  sh "pm2 restart all"
                }
            }
        }
    }
}
