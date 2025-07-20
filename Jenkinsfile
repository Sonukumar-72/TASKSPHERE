pipeline {
    agent {
        docker {
            image 'hashicorp/terraform:1.7.0'
        }
    }

    environment {
        AWS_ACCESS_KEY_ID     = credentials('aws-access-key')
        AWS_SECRET_ACCESS_KEY = credentials('aws-secret-key')
    }

    stages {
        stage('Init & Plan') {
            steps {
                script {
                    def modules = ['ec2-jenkins', 'eks-cluster', 's3-frontend']
                    modules.each { module ->
                        dir("infra/${module}") {
                            sh 'terraform init'
                            sh 'terraform validate'
                            sh 'terraform plan -out=tfplan'
                        }
                    }
                }
            }
        }

        stage('Approval') {
            steps {
                input message: "Approve to apply infrastructure changes?", ok: "Apply"
            }
        }

        stage('Apply') {
            steps {
                script {
                    def modules = ['ec2-jenkins', 'eks-cluster', 's3-frontend']
                    modules.each { module ->
                        dir("infra/${module}") {
                            sh 'terraform apply -auto-approve tfplan'
                        }
                    }
                }
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}
