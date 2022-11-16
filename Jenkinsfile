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
                  bat 'cd gobarber-frontend'
                  bat 'cd gobarber-backend'
                }
            }
        }
         stage('Test') {
            steps {
                script {
                //   bat 'cd gobarber-backend && npm test'
                echo "$(<test.txt )"

                }
            }
        }
         stage('Deploy') {
            steps {
                script {
                  echo 'Deploy Stage'
                }
            }
        }
    }
}
