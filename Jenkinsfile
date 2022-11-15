pipeline {
    agent {
        image 'node-6-alpine'
        args '-p 5555:5555'
    }
    stages {
        stage('Startup') {
            steps {
                script {
                  echo 'hala'
                }
            }
        }
    }
}