pipeline {
    agent any
    stages {
        stage('Startup') {
            agent {
                  docker { image 'node:16.3.1-alpine'}
            }
            steps {
                script {
                  echo 'hala'
                }
            }
        }
    }
}