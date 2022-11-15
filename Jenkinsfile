pipeline {
    agent any 

    tools { nodejs "node"}

    stages {
        stage('Startup') {
            steps {
                script {
                  bat 'cd gobarber-frontend'
                  bat 'yarn install'
                }
            }
        }
    }
}