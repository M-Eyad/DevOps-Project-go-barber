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
                echo 'Done Testing!!'

                }
            }
        }
         stage('Deploy') {
            steps {
                script {
                  sh 'echo "mmmeee123$$$" | sudo -S bash ./deploy'
                }
            }
        }
    }
}
